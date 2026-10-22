import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectFontText } from './font-text.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = join(root, 'fonts');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const FONTSOURCE = '5.3.0';

async function download(url, label){
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${label} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error(`${label} 响应过小（${buf.length} 字节）`);
  return buf;
}

const { text } = collectFontText(root);
mkdirSync(fontsDir, { recursive: true });
writeFileSync(join(fontsDir, 'zcool-ui.txt'), text + '\n', 'utf8');

const cssUrl = 'https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&text=' + encodeURIComponent(text) + '&display=swap';
const css = (await download(cssUrl, 'ZCOOL CSS')).toString('utf8');
const fontUrl = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
if (!fontUrl) throw new Error('ZCOOL CSS 中未找到 woff2 地址');
const ranges = [...css.matchAll(/unicode-range:\s*([^;]+);/g)].map(m => m[1]).join(',');
if (ranges){
  const covered = cp => ranges.split(',').some(part => {
    const [a, b] = part.trim().replace(/^U\+/i, '').split('-').map(x => parseInt(x, 16));
    return cp === a || (b !== undefined && cp >= a && cp <= b);
  });
  const missing = [...text].filter(ch => !covered(ch.codePointAt(0)));
  if (missing.length) throw new Error('字体子集缺少字符：' + missing.join(''));
}
const zcool = await download(fontUrl, 'ZCOOL woff2');
writeFileSync(join(fontsDir, 'zcool-ui.woff2'), zcool);

for (const weight of [400, 700]){
  const url = `https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@${FONTSOURCE}/files/jetbrains-mono-latin-${weight}-normal.woff2`;
  const buf = await download(url, `JetBrains Mono ${weight}`);
  writeFileSync(join(fontsDir, `jetbrains-mono-${weight}.woff2`), buf);
  console.log(`JetBrains Mono ${weight}: ${buf.length} bytes`);
}

console.log(`ZCOOL 子集: ${[...text].length} 字符，${zcool.length} 字节`);
console.log(`字体文本: ${join(fontsDir, 'zcool-ui.txt')}`);
