import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/* 使用展示字体的静态文案；新增/修改后运行 node scripts/build-fonts.mjs */
export const STATIC_TEXT = ['今日热榜', '全网热点 · 实时聚合', '实时热点', '全部', '免责声明', '热'];

export function collectFontText(root){
  const js = readFileSync(join(root, 'hot.js'), 'utf8');
  const block = name => js.match(new RegExp('const ' + name + ' = \\[([\\s\\S]*?)\\n\\];'))?.[1] || '';
  const cats = [...block('CATS').matchAll(/name:'([^']*)'/g)].map(m => m[1]);
  const sourceBlock = block('SOURCES');
  const names = [...sourceBlock.matchAll(/name:'([^']*)'/g)].map(m => m[1]);
  const chars = [...sourceBlock.matchAll(/char:'([^']*)'/g)].map(m => m[1]);
  const ascii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
  const punct = '·，。！？：；“”‘’（）【】《》—…、';
  const texts = [...STATIC_TEXT, ...cats, ...names, ...chars];
  const required = [...new Set(texts.join(''))].join('');
  const text = [...new Set((required + ascii + punct).split(''))].sort().join('');
  return { text, required, cats, names, chars, texts };
}
