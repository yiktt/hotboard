import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const js = readFileSync(join(root, 'hot.js'), 'utf8');
const failures = [];
const ok = [];

const check = (label, condition, detail = '') => {
  if (condition) ok.push(label);
  else failures.push(detail || label);
};

const cspMeta = html.match(/<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)"/i);
check('存在 CSP meta', !!cspMeta);
const csp = cspMeta?.[1] || '';
const cspHash = csp.match(/script-src[^;]*'sha256-([^']+)'/)?.[1] || '';
const inlineScript = html.match(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/i)?.[1] || '';
const inlineHash = createHash('sha256').update(inlineScript.replace(/\r\n/g, '\n'), 'utf8').digest('base64');
check('CSP 内联脚本哈希与主题脚本一致', cspHash === inlineHash, `CSP hash ${cspHash || '(missing)'} 与脚本 hash ${inlineHash} 不一致`);
check('CSP 包含 Referrer-Policy', /<meta\s+name="referrer"\s+content="strict-origin-when-cross-origin"/i.test(html));
check('CSP connect-src 覆盖榜单接口', ['api.codelife.cc', 'cors.redoc.ly', 'hn.algolia.com', 'dev.to'].every(host => csp.includes(host)));

const catsBlock = js.match(/const CATS = \[([\s\S]*?)\n\];/)?.[1] || '';
const catIds = [...catsBlock.matchAll(/id:'([^']+)'/g)].map(m => m[1]);
check('分类数量为 5', catIds.length === 5, `分类数量 ${catIds.length}`);

const sourcesBlock = js.match(/const SOURCES = \[([\s\S]*?)\n\];/)?.[1] || '';
const sources = [...sourcesBlock.matchAll(/\{\s*id:'([^']+)'([^\n]*)\}/g)].map(m => ({
  id: m[1],
  body: m[2],
  cat: m[2].match(/cat:'([^']+)'/)?.[1] || '',
  cid: m[2].match(/cid:'([^']+)'/)?.[1] || '',
  api: m[2].match(/api:'([^']+)'/)?.[1] || '',
  feed: m[2].match(/feed:'([^']+)'/)?.[1] || '',
  regions: m[2].match(/regions:(X_REGIONS|APP_REGIONS)/)?.[1] || '',
  region: m[2].match(/region:'([^']+)'/)?.[1] || '',
}));
check('榜单数量为 46', sources.length === 46, `榜单数量 ${sources.length}`);
check('榜单 id 唯一', new Set(sources.map(s => s.id)).size === sources.length);
check('所有分类都在 CATS 中', sources.every(s => catIds.includes(s.cat)), sources.filter(s => !catIds.includes(s.cat)).map(s => s.id).join(','));

const allowedApis = new Set(['sina-hot', 'netease', 'thepaper', 'rss', 'douban', 'x', 'appstore', 'hn', 'devto']);
const badSources = sources.filter(s => {
  if (!s.cid && !s.api) return true;
  if (s.api && !allowedApis.has(s.api)) return true;
  if (s.api === 'rss' && !s.feed) return true;
  if (s.regions && !s.region) return true;
  return false;
});
check('榜单数据源配置完整', badSources.length === 0, badSources.map(s => s.id).join(','));

const regionIds = block => [...(js.match(new RegExp(`const ${block} = \\[([\\s\\S]*?)\\n\\];`))?.[1] || '').matchAll(/id:'([^']+)'/g)].map(m => m[1]);
const regionSets = { X_REGIONS: regionIds('X_REGIONS'), APP_REGIONS: regionIds('APP_REGIONS') };
const badRegions = sources.filter(s => s.regions && !regionSets[s.regions].includes(s.region));
check('默认地区存在于地区列表', badRegions.length === 0, badRegions.map(s => s.id).join(','));

const iconsBlock = js.match(/const ICONS = \{([\s\S]*?)\n\};/)?.[1] || '';
const icons = new Map([...iconsBlock.matchAll(/([a-z0-9]+)\s*:\s*'([^']+)'/gi)].map(m => [m[1], m[2]]));
check('榜单图标映射数量一致', icons.size === sources.length, `图标 ${icons.size} / 榜单 ${sources.length}`);
const missingIcons = sources.filter(s => !icons.has(s.id));
check('每个榜单都有图标映射', missingIcons.length === 0, missingIcons.map(s => s.id).join(','));
const missingFiles = sources.filter(s => icons.get(s.id) && !existsSync(join(root, 'icons', icons.get(s.id))));
check('图标文件都存在', missingFiles.length === 0, missingFiles.map(s => `${s.id}:${icons.get(s.id)}`).join(','));

try {
  execFileSync(process.execPath, ['--check', join(root, 'hot.js')], { stdio: 'pipe' });
  check('hot.js 语法通过', true);
} catch (error) {
  check('hot.js 语法通过', false, String(error.stdout || error.message).trim());
}

for (const line of ok) console.log(`PASS ${line}`);
for (const line of failures) console.error(`FAIL ${line}`);
console.log(`check: ${ok.length} passed, ${failures.length} failed`);
if (failures.length) process.exit(1);
