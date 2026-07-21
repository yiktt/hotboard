/* ================= 数据源配置 ================= */
const CATS = [
  { id:'hot',    name:'综合热搜', en:'TRENDING' },
  { id:'tech',   name:'科技开发', en:'TECH & DEV' },
  { id:'global', name:'海外视野', en:'GLOBAL' },
  { id:'news',   name:'新闻资讯', en:'NEWS' },
  { id:'fun',    name:'影音娱乐', en:'ENTERTAINMENT' },
];
/* cid = codelife 榜单 ID；orz = orz.ai 备用平台名；api = 自定义官方接口；nohot = 热度值无意义时不显示；home = 官方热榜页 */
const SOURCES = [
  { id:'weibo',      cat:'hot',    name:'微博热搜',      char:'微', color:'#e6162d', sub:'随时随地发现新鲜事',   cid:'KqndgxeLl9', orz:'weibo',        home:'https://s.weibo.com/top/summary' },
  { id:'zhihu',      cat:'hot',    name:'知乎热榜',      char:'知', color:'#0084ff', sub:'有问题 就会有答案',    cid:'mproPpoq6O', orz:'zhihu',        home:'https://www.zhihu.com/hot' },
  { id:'baidu',      cat:'hot',    name:'百度热点',      char:'百', color:'#2932e1', sub:'实时热点榜',           cid:'Jb0vmloB1G', orz:'baidu',        home:'https://top.baidu.com/board?tab=realtime' },
  { id:'toutiao',    cat:'hot',    name:'头条热榜',      char:'头', color:'#f85959', sub:'信息创造价值',         cid:'toutiao',    orz:'jinritoutiao', home:'https://www.toutiao.com/' },
  { id:'wechat',     cat:'hot',    name:'微信热文',      char:'信', color:'#07c160', sub:'24h 热门公众号文章',   cid:'WnBe01o371',                     home:'https://weixin.qq.com/' },
  { id:'smzdm',      cat:'hot',    name:'什么值得买',    char:'值', color:'#e02727', sub:'好文 · 好价榜',        cid:'K7GdagpoQy',                     home:'https://www.smzdm.com/' },
  { id:'tieba',      cat:'hot',    name:'百度贴吧',      char:'贴', color:'#3085d6', sub:'热议话题榜',           cid:'Om4ejxvxEN', orz:'tieba',        home:'https://tieba.baidu.com/' },
  { id:'github',     cat:'tech',   name:'GitHub 趋势',   char:'G',  color:'#8250df', sub:'Trending Today',      cid:'rYqoXQ8vOD', orz:'github',       home:'https://github.com/trending' },
  { id:'juejin',     cat:'tech',   name:'掘金',          char:'掘', color:'#1e80ff', sub:'本周最热技术文章',     cid:'QaqeEaVe9R', orz:'juejin',       home:'https://juejin.cn/hot' },
  { id:'sspai',      cat:'tech',   name:'少数派',        char:'少', color:'#e64552', sub:'高质量数字消费指南',   cid:'Y2KeDGQdNP', orz:'shaoshupai',   home:'https://sspai.com/' },
  { id:'ithome',     cat:'tech',   name:'IT之家',        char:'IT', color:'#d22222', sub:'科技资讯日榜',         cid:'74Kvx59dkx',                     home:'https://www.ithome.com/' },
  { id:'kr36',       cat:'tech',   name:'36氪',          char:'36', color:'#0068ff', sub:'24 小时热榜',          cid:'Q1Vd5Ko85R', orz:'36kr',         home:'https://36kr.com/hot-list/catalog' },
  { id:'csdn',       cat:'tech',   name:'CSDN',          char:'C',  color:'#fc5531', sub:'综合热榜',             cid:'DgeyrgMoZq',                     home:'https://blog.csdn.net/rank/list' },
  { id:'zcool',      cat:'tech',   name:'站酷',          char:'酷', color:'#e07b00', sub:'热门设计作品榜',       cid:'VaobJ88oAj',                     home:'https://www.zcool.com.cn/' },
  /* 海外视野：均为中国大陆网络环境可直连访问的境外平台 */
  { id:'phunt',      cat:'global', name:'Product Hunt',  char:'P',  color:'#da552f', sub:'今日新品榜',           cid:'LBwdG0jePx', nohot:true,         home:'https://www.producthunt.com/' },
  { id:'appstore',   cat:'global', name:'App Store',     char:'A',  color:'#0d96f6', sub:'热门免费应用榜',       cid:'4anopWBelZ', nohot:true,         home:'https://www.apple.com/cn/app-store/' },
  { id:'hackernews', cat:'global', name:'Hacker News',   char:'HN', color:'#ff6600', sub:'Front Page 首页',      api:'hn',                             home:'https://news.ycombinator.com/' },
  { id:'devto',      cat:'global', name:'dev.to',        char:'D',  color:'#3b49df', sub:'本周热门文章',         api:'devto',                          home:'https://dev.to/' },
  { id:'txnews',     cat:'news',   name:'腾讯新闻·热问', char:'腾', color:'#12b7f5', sub:'全网热议话题',         cid:'12owgX0oNV', orz:'tenxunwang',   home:'https://news.qq.com/' },
  { id:'sina',       cat:'news',   name:'新浪财经',      char:'新', color:'#f6842e', sub:'点击量排行',           cid:'rx9ozj7oXb', orz:'sina_finance', home:'https://finance.sina.com.cn/' },
  { id:'cbn',        cat:'news',   name:'第一财经',      char:'第', color:'#c0392b', sub:'新闻排行周榜',         cid:'0MdKam4ow1',                     home:'https://www.yicai.com/' },
  { id:'xueqiu',     cat:'news',   name:'雪球',          char:'雪', color:'#0089e0', sub:'今日投资话题',         cid:'X12owXzvNV', orz:'xueqiu',       home:'https://xueqiu.com/' },
  { id:'bili',       cat:'fun',    name:'哔哩哔哩',      char:'B',  color:'#fb7299', sub:'全站日榜',             cid:'74KvxwokxM', orz:'bilibili',     home:'https://www.bilibili.com/v/popular/rank/all' },
  { id:'douyin',     cat:'fun',    name:'抖音热点',      char:'抖', color:'#fe2c55', sub:'热门视频榜',           cid:'DpQvNABoNE', orz:'douyin',       home:'https://www.douyin.com/hot' },
  { id:'douban',     cat:'fun',    name:'豆瓣电影',      char:'豆', color:'#42bd56', sub:'新片榜',               cid:'mDOvnyBoEB', orz:'douban',       home:'https://movie.douban.com/chart' },
  { id:'hupu',       cat:'fun',    name:'虎扑步行街',    char:'虎', color:'#c7232c', sub:'步行街热帖',           cid:'G47o8weMmN', orz:'hupu',         home:'https://bbs.hupu.com/all-gambia' },
  { id:'weread',     cat:'fun',    name:'微信读书',      char:'读', color:'#00a99d', sub:'总榜',                 cid:'4KvxEX0dkx',                     home:'https://weread.qq.com/' },
  { id:'dongqiudi',  cat:'fun',    name:'懂球帝',        char:'球', color:'#16a34a', sub:'足球热点榜',           cid:'n3moBE1eN5', nohot:true,         home:'https://www.dongqiudi.com/' },
];

const API_CODELIFE = id => `https://api.codelife.cc/api/top/list?lang=cn&id=${encodeURIComponent(id)}`;
const API_ORZ      = p  => `https://orz.ai/api/v1/dailynews/?platform=${encodeURIComponent(p)}`;
const API_HN       = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=20';
const API_DEVTO    = 'https://dev.to/api/articles?top=7&per_page=20';
const REFRESH_MS = 5 * 60 * 1000;
const SHOW = 10;

/* ================= 工具 ================= */
const $  = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2,'0');
const FLAME = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>';

function fmtHot(h){
  if (h === null || h === undefined || h === '') return '';
  const s = String(h).trim();
  if (/[万亿]/.test(s)) return s;
  const n = Number(s.replace(/[, ]/g,''));
  if (!isNaN(n) && n >= 1e8) return (n/1e8).toFixed(1) + '亿';
  if (!isNaN(n) && n >= 1e4) return (n/1e4).toFixed(1) + '万';
  return s;
}
async function getJSON(url, timeout = 12000){
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers:{ Accept:'application/json' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally { clearTimeout(timer); }
}
function toast(msg){
  const box = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3600);
}

/* ================= 时钟 ================= */
const WD = '日一二三四五六';
function tickClock(){
  const d = new Date();
  $('#clock-time').innerHTML = `${pad(d.getHours())}<i>:</i>${pad(d.getMinutes())}<i>:</i>${pad(d.getSeconds())}`;
  $('#clock-date').textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 星期${WD[d.getDay()]}`;
}
tickClock(); setInterval(tickClock, 1000);

/* ================= 主题切换 ================= */
$('#btn-theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('hotboard-theme', next); } catch(e){}
});

/* ================= 站点统计：运行时长 + 加载速度 ================= */
const SITE_BIRTH = new Date('2026-07-20T00:00:00+08:00').getTime();
function tickUptime(){
  const s = Math.max(0, Math.floor((Date.now() - SITE_BIRTH) / 1000));
  const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
  $('#stat-uptime').textContent = `${d} 天 ${pad(h)} 时 ${pad(m)} 分 ${pad(sec)} 秒`;
}
tickUptime(); setInterval(tickUptime, 1000);

function reportLoadTime(){
  const el = $('#stat-load');
  let ms = null;
  try{
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav && nav.loadEventEnd > 0) ms = nav.loadEventEnd - nav.startTime;
  }catch(e){}
  if (ms === null && window.performance && performance.timing){
    const t = performance.timing;
    if (t.loadEventEnd && t.navigationStart) ms = t.loadEventEnd - t.navigationStart;
  }
  if (ms === null) ms = performance.now();
  el.textContent = ms >= 1000 ? (ms / 1000).toFixed(2) + ' 秒' : Math.round(ms) + ' 毫秒';
}
if (document.readyState === 'complete') setTimeout(reportLoadTime, 0);
else window.addEventListener('load', () => setTimeout(reportLoadTime, 0));

/* ================= 卡片渲染 ================= */
const board = $('#board');
const cardMap = new Map();

function skeleton(){
  let rows = '';
  const ws = [86,72,92,64,80,58,88,70];
  for (let i = 0; i < 8; i++){
    rows += `<div class="sk"><span class="b c"></span><span class="b t" style="max-width:${ws[i]}%"></span><span class="b h"></span></div>`;
  }
  return rows;
}
function listHTML(items){
  return '<ol class="ranklist' + (items.length > SHOW ? ' collapsed' : '') + '">' + items.map((it, i) => {
    const r = i + 1;
    const hot = fmtHot(it.hot);
    return `<li class="rk">
      <span class="rank${r <= 3 ? ' r'+r : ''}">${r}</span>
      <a class="rk-t" href="${esc(it.url || '#')}" target="_blank" rel="noopener noreferrer" title="${esc(it.title)}">${esc(it.title)}</a>
      ${hot ? `<span class="rk-h">${FLAME}${esc(hot)}</span>` : ''}
    </li>`;
  }).join('') + '</ol>';
}
function buildCard(src){
  const el = document.createElement('article');
  el.className = 'card reveal';
  el.dataset.cat = src.cat;
  const small = src.char.length > 1 ? ' small' : '';
  el.innerHTML = `
    <header class="card-hd">
      <span class="pbadge${small}" style="--pc:${src.color}">${esc(src.char)}</span>
      <div class="pmeta">
        <h3><a href="${esc(src.home)}" target="_blank" rel="noopener noreferrer" title="访问「${esc(src.name)}」官方榜单">${esc(src.name)}<svg class="ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></a></h3>
        <p><span>${esc(src.sub)}</span><span class="ptime">加载中…</span></p>
      </div>
      <button class="iconbtn card-refresh" aria-label="刷新${esc(src.name)}" title="刷新本榜">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"/></svg>
      </button>
    </header>
    <div class="card-bd">${skeleton()}</div>
    <footer class="card-ft" hidden><button class="more"></button></footer>`;
  el.querySelector('.card-refresh').addEventListener('click', () => loadCard(src, el));
  el.querySelector('.more').addEventListener('click', function(){
    const ol = el.querySelector('.ranklist');
    const open = ol.classList.toggle('collapsed');
    this.textContent = open ? `展开全部（共 ${src._count} 条）` : '收起榜单';
  });
  cardMap.set(src.id, el);
  return el;
}
async function loadSource(src){
  /* 海外平台官方 API（中国大陆可直连） */
  if (src.api === 'hn'){
    const j = await getJSON(API_HN);
    if (j && Array.isArray(j.hits) && j.hits.length){
      return j.hits.map(h => ({ title: h.title, hot: h.points, url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}` }));
    }
    throw new Error('Hacker News 数据异常');
  }
  if (src.api === 'devto'){
    const j = await getJSON(API_DEVTO);
    if (Array.isArray(j) && j.length){
      return j.map(a => ({ title: a.title, hot: a.positive_reactions_count, url: a.url || 'https://dev.to' + a.path }));
    }
    throw new Error('dev.to 数据异常');
  }
  /* codelife 主源 */
  try{
    const j = await getJSON(API_CODELIFE(src.cid));
    if (j && j.code === 200 && Array.isArray(j.data) && j.data.length){
      return j.data.map(it => ({ title: it.title, hot: src.nohot ? '' : it.hotValue, url: it.link }));
    }
    throw new Error('主源数据异常');
  }catch(e){
    if (!src.orz) throw e;
  }
  /* orz.ai 备源 */
  const j = await getJSON(API_ORZ(src.orz));
  if (j && String(j.status) === '200' && Array.isArray(j.data) && j.data.length){
    return j.data.map(it => ({ title: it.title, hot: '', url: it.url }));
  }
  throw new Error('主备源均不可用');
}
async function loadCard(src, el){
  const body = el.querySelector('.card-bd');
  const ft = el.querySelector('.card-ft');
  const btn = el.querySelector('.card-refresh');
  btn.classList.add('spin');
  ft.hidden = true;
  try{
    const items = await loadSource(src);
    src._top = { title: items[0].title, url: items[0].url, char: src.char, color: src.color };
    src._count = items.length;
    body.innerHTML = listHTML(items);
    el.querySelector('.ptime').textContent = '更新于 ' + new Date().toTimeString().slice(0,8);
    if (items.length > SHOW){
      ft.hidden = false;
      el.querySelector('.more').textContent = `展开全部（共 ${items.length} 条）`;
      el.querySelector('.ranklist').classList.add('collapsed');
    }
    applySearch(); /* 刷新后保持搜索过滤状态 */
  }catch(e){
    body.innerHTML = `<div class="card-err"><p>榜单加载失败，可能是网络波动</p><button class="retry">重新加载</button></div>`;
    el.querySelector('.ptime').textContent = '加载失败';
    body.querySelector('.retry').addEventListener('click', () => loadCard(src, el));
  }finally{
    btn.classList.remove('spin');
  }
}

/* 组装板块：分类标题 + 卡片 */
let idx = 0;
CATS.forEach(cat => {
  const label = document.createElement('div');
  label.className = 'cat-label reveal';
  label.dataset.cat = cat.id;
  label.innerHTML = `<span class="bar" aria-hidden="true"></span><h2>${cat.name}</h2><span>${cat.en}</span>`;
  board.appendChild(label);
  const grid = document.createElement('div');
  grid.className = 'grid';
  SOURCES.filter(s => s.cat === cat.id).forEach(s => {
    const el = buildCard(s);
    el.style.transitionDelay = (idx++ % 4) * 70 + 'ms';
    grid.appendChild(el);
  });
  board.appendChild(grid);
});

/* 滚动浮现 */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .06 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ================= 分类页签 ================= */
const tabsBox = $('#tabs');
function buildTabs(){
  const all = [{ id:'all', name:'全部', n: SOURCES.length }, ...CATS.map(c => ({ id:c.id, name:c.name, n: SOURCES.filter(s => s.cat === c.id).length }))];
  tabsBox.innerHTML = all.map((t,i) =>
    `<button class="tab${i===0?' on':''}" role="tab" aria-selected="${i===0}" data-cat="${t.id}">${t.name}<b>${t.n}</b></button>`).join('');
  tabsBox.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    tabsBox.querySelectorAll('.tab').forEach(b => { b.classList.remove('on'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('on'); btn.setAttribute('aria-selected','true');
    const cat = btn.dataset.cat;
    board.querySelectorAll('.card, .cat-label').forEach(el => {
      el.classList.toggle('off', cat !== 'all' && el.dataset.cat !== cat);
    });
  }));
}
buildTabs();

/* ================= 搜索过滤 ================= */
const qInput = $('#q'), sstat = $('#sstat');
function applySearch(){
  const q = qInput.value.trim().toLowerCase();
  document.body.classList.toggle('searching', !!q);
  document.querySelector('.search').classList.toggle('has', !!q);
  let total = 0;
  cardMap.forEach(el => {
    if (!q){ el.classList.remove('dim'); el.querySelectorAll('.rk.hide').forEach(li => li.classList.remove('hide')); return; }
    let n = 0;
    el.querySelectorAll('.rk').forEach(li => {
      const hit = li.querySelector('.rk-t').textContent.toLowerCase().includes(q);
      li.classList.toggle('hide', !hit);
      if (hit) n++;
    });
    total += n;
    el.classList.toggle('dim', n === 0);
  });
  sstat.hidden = !q;
  if (q) sstat.textContent = `匹配 ${total} 条`;
}
qInput.addEventListener('input', applySearch);
$('#q-clr').addEventListener('click', () => { qInput.value = ''; applySearch(); qInput.focus(); });
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== qInput){ e.preventDefault(); qInput.focus(); }
  if (e.key === 'Escape' && document.activeElement === qInput){ qInput.value=''; applySearch(); qInput.blur(); }
});

/* ================= 滚动播报 ================= */
function buildTicker(){
  const tops = SOURCES.filter(s => s._top);
  if (!tops.length) return;
  const html = tops.map(s =>
    `<a class="tk" href="${esc(s._top.url || '#')}" target="_blank" rel="noopener noreferrer"><i style="--pc:${s.color}">${esc(s._top.char)}</i>${esc(s._top.title)}</a>`).join('');
  const track = $('#tk-track');
  track.style.setProperty('--dur', Math.max(60, tops.length * 5) + 's');
  track.innerHTML = `<div class="tk-group">${html}</div><div class="tk-group" aria-hidden="true">${html}</div>`;
}

/* ================= 加载与自动刷新 ================= */
let nextAt = Date.now() + REFRESH_MS;
async function refreshAll(silent){
  const btn = $('#btn-refresh');
  btn.classList.add('spin');
  await Promise.allSettled(SOURCES.map((s, i) =>
    new Promise(r => setTimeout(() => loadCard(s, cardMap.get(s.id)).finally(r), i * 55))
  ));
  buildTicker();
  btn.classList.remove('spin');
  nextAt = Date.now() + REFRESH_MS;
  if (!silent) toast('已更新 · ' + new Date().toTimeString().slice(0,5));
}
$('#btn-refresh').addEventListener('click', () => refreshAll());

setInterval(() => {
  const left = Math.max(0, nextAt - Date.now());
  $('#cd').textContent = pad(Math.floor(left/60000)) + ':' + pad(Math.floor(left%60000/1000));
  if (left <= 0 && !document.hidden) refreshAll(true);
}, 1000);

/* 切回标签页时若已过期则刷新 */
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && Date.now() > nextAt) refreshAll(true);
});
window.addEventListener('offline', () => toast('网络已断开，数据可能不是最新'));
window.addEventListener('online',  () => toast('网络已恢复'));

/* ================= 一键到顶 / 到底 ================= */
const fTop = $('#f-top'), fBot = $('#f-bottom');
let fTick = false;
function floatCheck(){
  if (fTick) return;
  fTick = true;
  requestAnimationFrame(() => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fTop.classList.toggle('show', y > 420);
    fBot.classList.toggle('show', max > 600 && y < max - 420);
    fTick = false;
  });
}
window.addEventListener('scroll', floatCheck, { passive:true });
window.addEventListener('resize', floatCheck);
floatCheck();
fTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
fBot.addEventListener('click', () => window.scrollTo({ top:document.documentElement.scrollHeight, behavior:'smooth' }));

/* 首次加载 */
refreshAll(true);
