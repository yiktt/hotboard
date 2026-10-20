/* ================= 数据源配置 ================= */
const CATS = [
  { id:'hot',    name:'综合热搜', en:'TRENDING' },
  { id:'tech',   name:'科技开发', en:'TECH & DEV' },
  { id:'global', name:'海外视野', en:'GLOBAL' },
  { id:'news',   name:'新闻资讯', en:'NEWS' },
  { id:'fun',    name:'影音娱乐', en:'ENTERTAINMENT' },
];
/* X 趋势可选地区：id 对应 getdaytrends 的国家/地区页 */
const X_REGIONS = [
  { id:'worldwide', name:'全球' },
  { id:'united-states', name:'美国' },
  { id:'japan', name:'日本' },
  { id:'korea', name:'韩国' },
  { id:'united-kingdom', name:'英国' },
  { id:'france', name:'法国' },
  { id:'germany', name:'德国' },
  { id:'canada', name:'加拿大' },
  { id:'australia', name:'澳大利亚' },
  { id:'india', name:'印度' },
  { id:'singapore', name:'新加坡' },
  { id:'malaysia', name:'马来西亚' },
  { id:'thailand', name:'泰国' },
  { id:'vietnam', name:'越南' },
  { id:'philippines', name:'菲律宾' },
  { id:'indonesia', name:'印度尼西亚' },
  { id:'brazil', name:'巴西' },
  { id:'mexico', name:'墨西哥' },
  { id:'spain', name:'西班牙' },
  { id:'italy', name:'意大利' },
  { id:'netherlands', name:'荷兰' },
  { id:'turkey', name:'土耳其' },
  { id:'russia', name:'俄罗斯' },
  { id:'saudi-arabia', name:'沙特阿拉伯' },
  { id:'united-arab-emirates', name:'阿联酋' },
  { id:'south-africa', name:'南非' },
  { id:'nigeria', name:'尼日利亚' },
  { id:'pakistan', name:'巴基斯坦' },
  { id:'argentina', name:'阿根廷' },
  { id:'algeria', name:'阿尔及利亚' },
  { id:'austria', name:'奥地利' },
  { id:'bahrain', name:'巴林' },
  { id:'belarus', name:'白俄罗斯' },
  { id:'belgium', name:'比利时' },
  { id:'chile', name:'智利' },
  { id:'colombia', name:'哥伦比亚' },
  { id:'denmark', name:'丹麦' },
  { id:'dominican-republic', name:'多米尼加' },
  { id:'ecuador', name:'厄瓜多尔' },
  { id:'egypt', name:'埃及' },
  { id:'ghana', name:'加纳' },
  { id:'greece', name:'希腊' },
  { id:'guatemala', name:'危地马拉' },
  { id:'ireland', name:'爱尔兰' },
  { id:'israel', name:'以色列' },
  { id:'jordan', name:'约旦' },
  { id:'kenya', name:'肯尼亚' },
  { id:'kuwait', name:'科威特' },
  { id:'latvia', name:'拉脱维亚' },
  { id:'lebanon', name:'黎巴嫩' },
  { id:'new-zealand', name:'新西兰' },
  { id:'norway', name:'挪威' },
  { id:'oman', name:'阿曼' },
  { id:'panama', name:'巴拿马' },
  { id:'peru', name:'秘鲁' },
  { id:'poland', name:'波兰' },
  { id:'portugal', name:'葡萄牙' },
  { id:'puerto-rico', name:'波多黎各' },
  { id:'qatar', name:'卡塔尔' },
  { id:'sweden', name:'瑞典' },
  { id:'switzerland', name:'瑞士' },
  { id:'ukraine', name:'乌克兰' },
  { id:'venezuela', name:'委内瑞拉' },
];
/* App Store 可选地区：id 为 Apple 商店国家/地区代码 */
const APP_REGIONS = [
  { id:'cn', name:'中国大陆' },
  { id:'hk', name:'中国香港' },
  { id:'tw', name:'中国台湾' },
  { id:'us', name:'美国' },
  { id:'jp', name:'日本' },
  { id:'kr', name:'韩国' },
  { id:'gb', name:'英国' },
  { id:'ca', name:'加拿大' },
  { id:'au', name:'澳大利亚' },
  { id:'sg', name:'新加坡' },
  { id:'my', name:'马来西亚' },
  { id:'th', name:'泰国' },
  { id:'vn', name:'越南' },
  { id:'ph', name:'菲律宾' },
  { id:'id', name:'印度尼西亚' },
  { id:'in', name:'印度' },
  { id:'de', name:'德国' },
  { id:'fr', name:'法国' },
  { id:'it', name:'意大利' },
  { id:'es', name:'西班牙' },
  { id:'nl', name:'荷兰' },
  { id:'se', name:'瑞典' },
  { id:'no', name:'挪威' },
  { id:'dk', name:'丹麦' },
  { id:'fi', name:'芬兰' },
  { id:'pl', name:'波兰' },
  { id:'tr', name:'土耳其' },
  { id:'ru', name:'俄罗斯' },
  { id:'br', name:'巴西' },
  { id:'mx', name:'墨西哥' },
  { id:'ar', name:'阿根廷' },
  { id:'za', name:'南非' },
  { id:'ae', name:'阿联酋' },
  { id:'sa', name:'沙特阿拉伯' },
];
/* cid = codelife 榜单 ID；orz = orz.ai 备用平台名；api = 自定义官方接口；feed = RSS 地址；nohot = 热度值无意义时不显示；home = 官方热榜页 */
const SOURCES = [
  { id:'weibo',      cat:'hot',    name:'微博热搜',      char:'微', color:'#e6162d', sub:'随时随地发现新鲜事',   cid:'KqndgxeLl9', orz:'weibo',        home:'https://s.weibo.com/top/summary' },
  { id:'zhihu',      cat:'hot',    name:'知乎热榜',      char:'知', color:'#0084ff', sub:'有问题 就会有答案',    cid:'mproPpoq6O', orz:'zhihu',        home:'https://www.zhihu.com/hot' },
  { id:'baidu',      cat:'hot',    name:'百度热点',      char:'百', color:'#2932e1', sub:'实时热点榜',           cid:'Jb0vmloB1G', orz:'baidu',        home:'https://top.baidu.com/board?tab=realtime' },
  { id:'toutiao',    cat:'hot',    name:'头条热榜',      char:'头', color:'#f85959', sub:'信息创造价值',         cid:'toutiao',    orz:'jinritoutiao', home:'https://www.toutiao.com/' },
  { id:'wechat',     cat:'hot',    name:'微信热文',      char:'信', color:'#07c160', sub:'24h 热门公众号文章',   cid:'WnBe01o371',                     home:'https://weixin.qq.com/' },
  { id:'smzdm',      cat:'hot',    name:'什么值得买',    char:'值', color:'#e02727', sub:'好文 · 好价榜',        cid:'K7GdagpoQy',                     home:'https://www.smzdm.com/' },
  { id:'tieba',      cat:'hot',    name:'百度贴吧',      char:'贴', color:'#3085d6', sub:'热议话题榜',           cid:'Om4ejxvxEN', orz:'tieba',        home:'https://tieba.baidu.com/' },
  { id:'sinahot',    cat:'hot',    name:'新浪热榜',      char:'新', color:'#f6842e', sub:'实时热点榜',           api:'sina-hot',                        home:'https://news.sina.com.cn/' },
  { id:'netease',    cat:'hot',    name:'网易新闻',      char:'网', color:'#d0021b', sub:'热点新闻榜',           api:'netease', nohot:true,            home:'https://news.163.com/' },
  { id:'github',     cat:'tech',   name:'GitHub 趋势',   char:'G',  color:'#8250df', sub:'Trending Today',      cid:'rYqoXQ8vOD', orz:'github',       home:'https://github.com/trending' },
  { id:'juejin',     cat:'tech',   name:'掘金',          char:'掘', color:'#1e80ff', sub:'本周最热技术文章',     cid:'QaqeEaVe9R', orz:'juejin',       home:'https://juejin.cn/hot' },
  { id:'sspai',      cat:'tech',   name:'少数派',        char:'少', color:'#e64552', sub:'高质量数字消费指南',   cid:'Y2KeDGQdNP', orz:'shaoshupai',   home:'https://sspai.com/' },
  { id:'ithome',     cat:'tech',   name:'IT之家',        char:'IT', color:'#d22222', sub:'科技资讯日榜',         cid:'74Kvx59dkx',                     home:'https://www.ithome.com/' },
  { id:'kr36',       cat:'tech',   name:'36氪',          char:'36', color:'#0068ff', sub:'24 小时热榜',          cid:'Q1Vd5Ko85R', orz:'36kr',         home:'https://36kr.com/hot-list/catalog' },
  { id:'csdn',       cat:'tech',   name:'CSDN',          char:'C',  color:'#fc5531', sub:'综合热榜',             cid:'DgeyrgMoZq',                     home:'https://blog.csdn.net/rank/list' },
  { id:'zcool',      cat:'tech',   name:'站酷',          char:'酷', color:'#e07b00', sub:'热门设计作品榜',       cid:'VaobJ88oAj',                     home:'https://www.zcool.com.cn/' },
  { id:'huxiu',      cat:'tech',   name:'虎嗅',          char:'虎', color:'#d0021b', sub:'24小时热文',           cid:'5VaobgvAj1',                     home:'https://www.huxiu.com/' },
  { id:'oschina',    cat:'tech',   name:'开源中国',      char:'开', color:'#00a062', sub:'热门资讯',             cid:'rYqoXZzdOD', nohot:true,         home:'https://www.oschina.net/' },
  { id:'renren',     cat:'tech',   name:'人人都是产品经理', char:'人', color:'#1e88e5', sub:'热门文章榜',         cid:'20MdKx4ew1', nohot:true,         home:'https://www.woshipm.com/' },
  /* 海外视野：境外平台，经公开接口或代理获取数据 */
  { id:'phunt',      cat:'global', name:'Product Hunt',  char:'P',  color:'#da552f', sub:'今日新品榜',           cid:'LBwdG0jePx', nohot:true,         home:'https://www.producthunt.com/' },
  { id:'appstore',   cat:'global', name:'App Store',     char:'A',  color:'#0d96f6', sub:'热门免费应用榜',       api:'appstore', region:'us', regions:APP_REGIONS, nohot:true, home:'https://apps.apple.com/us/charts/iphone' },
  { id:'hackernews', cat:'global', name:'Hacker News',   char:'HN', color:'#ff6600', sub:'Front Page 首页',      api:'hn',                             home:'https://news.ycombinator.com/' },
  { id:'devto',      cat:'global', name:'dev.to',        char:'D',  color:'#3b49df', sub:'本周热门文章',         api:'devto',                          home:'https://dev.to/' },
  { id:'x',          cat:'global', name:'X 趋势',        char:'X',  color:'#0f1419', sub:'全球实时趋势',         api:'x', region:'united-states', regions:X_REGIONS, home:'https://x.com/explore' },
  /* 海外媒体：经 Redocly 代理读取官方 RSS，按发布时间展示 */
  { id:'bbc',        cat:'global', name:'BBC 新闻',      char:'BBC', color:'#bb1919', sub:'World News 国际新闻',  api:'rss', nohot:true, feed:'https://feeds.bbci.co.uk/news/world/rss.xml', home:'https://www.bbc.com/news/world' },
  { id:'nyt',        cat:'global', name:'纽约时报',      char:'NYT', color:'#000000', sub:'World 国际新闻',       api:'rss', nohot:true, feed:'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', home:'https://www.nytimes.com/section/world' },
  { id:'guardian',   cat:'global', name:'卫报',          char:'卫',  color:'#052962', sub:'World 国际新闻',       api:'rss', nohot:true, feed:'https://www.theguardian.com/world/rss', home:'https://www.theguardian.com/world' },
  { id:'aljazeera',  cat:'global', name:'半岛电视台',    char:'半',  color:'#f7a800', sub:'国际新闻头条',         api:'rss', nohot:true, feed:'https://www.aljazeera.com/xml/rss/all.xml', home:'https://www.aljazeera.com/' },
  { id:'npr',        cat:'global', name:'NPR',           char:'NPR', color:'#d71920', sub:'Top Stories 头条新闻', api:'rss', nohot:true, feed:'https://feeds.npr.org/1001/rss.xml', home:'https://www.npr.org/sections/news/' },
  { id:'dw',         cat:'global', name:'德国之声',      char:'DW',  color:'#0091d5', sub:'World 国际新闻',       api:'rss', nohot:true, feed:'https://rss.dw.com/rdf/rss-en-world', home:'https://www.dw.com/en/world/s-1429' },
  { id:'txnews',     cat:'news',   name:'腾讯新闻·热问', char:'腾', color:'#12b7f5', sub:'全网热议话题',         cid:'12owgX0oNV', orz:'tenxunwang',   home:'https://news.qq.com/' },
  { id:'sina',       cat:'news',   name:'新浪财经',      char:'新', color:'#f6842e', sub:'点击量排行',           cid:'rx9ozj7oXb', orz:'sina_finance', home:'https://finance.sina.com.cn/' },
  { id:'cbn',        cat:'news',   name:'第一财经',      char:'第', color:'#c0392b', sub:'新闻排行周榜',         cid:'0MdKam4ow1',                     home:'https://www.yicai.com/' },
  { id:'xueqiu',     cat:'news',   name:'雪球',          char:'雪', color:'#0089e0', sub:'今日投资话题',         cid:'X12owXzvNV', orz:'xueqiu',       home:'https://xueqiu.com/' },
  { id:'thepaper',   cat:'news',   name:'澎湃新闻',      char:'澎', color:'#e66a2c', sub:'热点新闻榜',           api:'thepaper', nohot:true,           home:'https://www.thepaper.cn/' },
  { id:'chinanews',  cat:'news',   name:'中国新闻网',    char:'中', color:'#c8102e', sub:'即时新闻',             api:'rss', nohot:true, feed:'https://www.chinanews.com.cn/rss/scroll-news.xml', home:'https://www.chinanews.com.cn/' },
  { id:'wallstreetcn', cat:'news', name:'华尔街见闻',    char:'华', color:'#d0021b', sub:'热门资讯',             cid:'G2me3ndwjq',                     home:'https://wallstreetcn.com/' },
  { id:'bili',       cat:'fun',    name:'哔哩哔哩',      char:'B',  color:'#fb7299', sub:'全站日榜',             cid:'74KvxwokxM', orz:'bilibili',     home:'https://www.bilibili.com/v/popular/rank/all' },
  { id:'douyin',     cat:'fun',    name:'抖音热点',      char:'抖', color:'#fe2c55', sub:'热门视频榜',           cid:'DpQvNABoNE', orz:'douyin',       home:'https://www.douyin.com/hot' },
  { id:'douban',     cat:'fun',    name:'豆瓣电影',      char:'豆', color:'#42bd56', sub:'新片榜',               api:'douban',                        home:'https://movie.douban.com/chart' },
  { id:'hupu',       cat:'fun',    name:'虎扑步行街',    char:'虎', color:'#c7232c', sub:'步行街热帖',           cid:'G47o8weMmN', orz:'hupu',         home:'https://bbs.hupu.com/all-gambia' },
  { id:'weread',     cat:'fun',    name:'微信读书',      char:'读', color:'#00a99d', sub:'总榜',                 cid:'4KvxEX0dkx',                     home:'https://weread.qq.com/' },
  { id:'dongqiudi',  cat:'fun',    name:'懂球帝',        char:'球', color:'#16a34a', sub:'足球热点榜',           cid:'n3moBE1eN5', nohot:true,         home:'https://www.dongqiudi.com/' },
  { id:'kuaishou',   cat:'fun',    name:'快手',          char:'快', color:'#ff5000', sub:'快手热榜',             cid:'MZd7PrPerO',                     home:'https://www.kuaishou.com/' },
  { id:'maoyan',     cat:'fun',    name:'猫眼电影',      char:'猫', color:'#ef4238', sub:'电影热度榜',           cid:'9JndkpJe3V', nohot:true,         home:'https://www.maoyan.com/' },
  { id:'imdb',       cat:'fun',    name:'IMDb',          char:'IMDb', color:'#f5c518', sub:'Most Popular 影视榜', cid:'VaobbkqoAj', nohot:true,          home:'https://www.imdb.com/chart/moviemeter/' },
];

/* 官方图标（本地资源，加载失败时回退为字符徽标） */
const ICONS = {
  weibo:'weibo.svg',       zhihu:'zhihu.png',       baidu:'baidu.png',       toutiao:'toutiao.png',
  wechat:'wechat.svg',     smzdm:'smzdm.jpg',       tieba:'tieba.jpg',       github:'github.png',
  juejin:'juejin.svg',     sspai:'sspai.png',       ithome:'ithome.png',     kr36:'kr36.jpg',
  csdn:'csdn.svg',         zcool:'zcool.svg',       phunt:'phunt.svg',       appstore:'appstore.png',
  hackernews:'hackernews.ico', devto:'devto.svg',   txnews:'txnews.png',     sina:'sina.png',
  cbn:'cbn.png',           xueqiu:'xueqiu.jpg',     bili:'bili.png',         douyin:'douyin.png',
  douban:'douban.svg',     hupu:'hupu.png',         weread:'weread.svg',     dongqiudi:'dongqiudi.png',
  x:'x.svg',               bbc:'bbc.svg',           nyt:'newyorktimes.svg',  guardian:'theguardian.svg',
  aljazeera:'aljazeera.png', npr:'npr.png',         dw:'dw.png',
  sinahot:'sinahot.jpg',   netease:'netease.jpg',   huxiu:'huxiu.jpg',       oschina:'oschina.jpg',
  renren:'renren.jpg',     thepaper:'thepaper.jpg', chinanews:'chinanews.jpg', wallstreetcn:'wallstreetcn.jpg',
  kuaishou:'kuaishou.jpg', maoyan:'maoyan.jpg',    imdb:'imdb.svg',
};
const iconURL = id => ICONS[id] ? `icons/${ICONS[id]}` : '';

const API_CODELIFE = id => `https://api.codelife.cc/api/top/list?lang=cn&id=${encodeURIComponent(id)}`;
const API_ORZ      = p  => `https://orz.ai/api/v1/dailynews/?platform=${encodeURIComponent(p)}`;
const API_HN       = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=20';
const API_DEVTO    = 'https://dev.to/api/articles?top=7&per_page=20';
/* 豆瓣官方接口未开放 CORS，经 Redocly 公共代理读取官方页面 */
const API_DOUBAN     = 'https://cors.redoc.ly/https://movie.douban.com/chart';
const API_DOUBAN_HOT = 'https://cors.redoc.ly/https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=20&page_start=0';
/* X 官方未提供浏览器可用的趋势接口，读取 getdaytrends 的全球/各地区趋势页 */
const API_X          = 'https://cors.redoc.ly/https://getdaytrends.com/';
/* App Store 分区免费榜：iTunes RSS 未开放 CORS，经 Redocly 代理读取 */
const API_ITUNES     = cc => `https://cors.redoc.ly/https://itunes.apple.com/${encodeURIComponent(cc)}/rss/topfreeapplications/limit=${SHOW}/json`;
/* 综合与新闻热榜：读取平台公开榜单接口，经 Redocly 代理 */
const API_SINA_HOT   = () => {
  const d = new Date();
  const day = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `https://cors.redoc.ly/https://top.news.sina.com.cn/ws/GetTopDataList.php?top_type=day&top_cat=www_www_all_suda_suda&top_time=${day}&top_show_num=50&top_order=DESC&js_var=all_1_data`;
};
const API_NETEASE    = 'https://cors.redoc.ly/https://m.163.com/fe/api/hot/news/flow';
const API_THEPAPER   = 'https://cors.redoc.ly/https://cache.thepaper.cn/contentapi/wwwIndex/rightSidebar';
const REFRESH_MS = 5 * 60 * 1000;
const SHOW = 10;

/* ================= 工具 ================= */
const $  = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL = u => /^https?:\/\//i.test(String(u ?? '')) ? u : '#';
const pad = n => String(n).padStart(2,'0');
const FLAME = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>';
const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z"/></svg>';

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
async function getText(url, timeout = 15000, accept = 'text/html'){
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers:{ Accept: accept } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.text();
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
    const extra = it.score
      ? `<span class="rk-h rk-score" title="豆瓣评分">${STAR}${esc(it.score)}</span>`
      : hot ? `<span class="rk-h">${FLAME}${esc(hot)}</span>` : '';
    return `<li class="rk">
      <span class="rank${r <= 3 ? ' r'+r : ''}">${r}</span>
      <a class="rk-t" href="${esc(safeURL(it.url))}" target="_blank" rel="noopener noreferrer" title="${esc(it.title)}">${esc(it.title)}</a>
      ${extra}
    </li>`;
  }).join('') + '</ol>';
}
function regionName(src){
  return (src.regions || []).find(r => r.id === src.region)?.name || '';
}
function sourceHome(src){
  if (src.api === 'appstore') return `https://apps.apple.com/${src.region}/charts/iphone`;
  return src.home;
}
function sourceSub(src){
  if (src.api === 'x'){
    const name = regionName(src);
    return name === '全球' ? '全球实时趋势' : `${name}实时趋势`;
  }
  if (src.api === 'appstore') return `热门免费应用 · ${regionName(src)}`;
  return src.sub;
}
function buildCard(src){
  const el = document.createElement('article');
  el.className = 'card reveal';
  el.dataset.cat = src.cat;
  const small = src.char.length > 1 ? ' small' : '';
  const icon = iconURL(src.id);
  const regionPicker = src.regions ? `
    <footer class="card-ft region">
      <label class="region-pick">
        <span class="region-cap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.7 4 5.7 4 9s-1.2 6.3-4 9c-2.8-2.7-4-5.7-4-9s1.2-6.3 4-9z"/></svg>
          地区
        </span>
        <span class="region-box">
          <select class="region-select" aria-label="选择${esc(src.name)}的国家或地区">
            ${src.regions.map(r => `<option value="${esc(r.id)}"${r.id === src.region ? ' selected' : ''}>${esc(r.name)}</option>`).join('')}
          </select>
          <svg class="region-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </label>
    </footer>` : '';
  el.innerHTML = `
    <header class="card-hd">
      <span class="pbadge${small}" style="--pc:${src.color}">
        ${icon ? `<img src="${esc(icon)}" alt="" loading="lazy" decoding="async">` : ''}
        <b>${esc(src.char)}</b>
      </span>
      <div class="pmeta">
        <h3><a href="${esc(sourceHome(src))}" target="_blank" rel="noopener noreferrer" title="访问「${esc(src.name)}」官方榜单">${esc(src.name)}<svg class="ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></a></h3>
        <p><span class="psub">${esc(sourceSub(src))}</span><span class="ptime">加载中…</span></p>
      </div>
      <button class="iconbtn card-refresh" aria-label="刷新${esc(src.name)}" title="刷新本榜">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"/></svg>
      </button>
    </header>
    <div class="card-bd">${skeleton()}</div>
    ${regionPicker || '<footer class="card-ft" hidden><button class="more"></button></footer>'}`;
  const badge = el.querySelector('.pbadge');
  if (!icon) badge.classList.add('noicon');
  else badge.querySelector('img').addEventListener('error', () => badge.classList.add('noicon'));
  el.querySelector('.card-refresh').addEventListener('click', () => loadCard(src, el));
  const more = el.querySelector('.more');
  if (more) more.addEventListener('click', function(){
    const ol = el.querySelector('.ranklist');
    const collapsed = ol.classList.toggle('collapsed');
    if (qInput.value.trim()) applySearch();
    else this.textContent = collapsed ? `展开全部（共 ${src._count} 条）` : '收起榜单';
  });
  const regionSelect = el.querySelector('.region-select');
  if (regionSelect){
    el.classList.add('has-region');
    regionSelect.addEventListener('change', () => {
      src.region = regionSelect.value;
      el.querySelector('.pmeta h3 a').href = sourceHome(src);
      el.querySelector('.psub').textContent = sourceSub(src);
      loadCard(src, el);
    });
  }
  cardMap.set(src.id, el);
  return el;
}
async function loadDouban(){
  try{
    const html = await getText(API_DOUBAN);
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const title = [...doc.querySelectorAll('h2')].find(el => el.textContent.includes('豆瓣新片榜'));
    const section = title?.closest('.article') || doc.querySelector('.article');
    const items = section ? [...section.querySelectorAll('.item')].map(row => {
      const link = row.querySelector('a.nbg') || row.querySelector('.pl2 a');
      return {
        title: (link?.getAttribute('title') || link?.querySelector('img')?.alt || '').trim(),
        url: link?.href || '',
        score: row.querySelector('.rating_nums')?.textContent.trim() || '',
      };
    }).filter(it => it.title && it.url) : [];
    if (items.length) return items;
  }catch(e){}
  const j = await getJSON(API_DOUBAN_HOT);
  if (j && Array.isArray(j.subjects) && j.subjects.length){
    return j.subjects.map(it => ({ title: it.title, url: it.url, score: it.rate || '' }));
  }
  throw new Error('豆瓣数据异常');
}
async function loadX(src){
  const slug = src.region && src.region !== 'worldwide' ? `${src.region}/` : '';
  const html = await getText(API_X + slug);
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const rows = [...doc.querySelectorAll('#trends tr, #moreTrends tr')].filter(row => row.querySelector('th.pos'));
  const items = rows.map(row => {
    const title = row.querySelector('td.main a')?.textContent.trim() || '';
    return {
      title,
      url: `https://x.com/search?q=${encodeURIComponent(title)}&src=trend_click&f=top`,
    };
  }).filter(it => it.title).slice(0, SHOW);
  if (items.length) return items;
  throw new Error('X 趋势数据异常');
}
async function loadAppStore(src){
  const j = await getJSON(API_ITUNES(src.region || 'cn'), 20000);
  const entries = j?.feed?.entry;
  if (Array.isArray(entries) && entries.length){
    return entries.map(e => {
      const links = Array.isArray(e.link) ? e.link : [e.link];
      const alt = links.find(l => l?.attributes?.rel === 'alternate') || links[0];
      return {
        title: e['im:name']?.label || '',
        url: e.id?.label || alt?.attributes?.href || '',
      };
    }).filter(it => it.title && it.url).slice(0, SHOW);
  }
  throw new Error('App Store 数据异常');
}
async function loadSinaHot(){
  const txt = await getText(API_SINA_HOT(), 18000, 'application/javascript, application/json, text/plain, */*');
  const start = txt.indexOf('{'), end = txt.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('新浪热榜数据异常');
  const j = JSON.parse(txt.slice(start, end + 1));
  const items = (j.data || []).map(it => ({ title: it.title, hot: it.top_num, url: it.url })).filter(it => it.title && it.url);
  if (items.length) return items.slice(0, 30);
  throw new Error('新浪热榜数据异常');
}
async function loadNeteaseHot(){
  const j = await getJSON(API_NETEASE, 18000);
  const list = j?.data?.list;
  if (Array.isArray(list) && list.length){
    return list.map(it => ({ title: it.title, url: it.url })).filter(it => it.title && it.url).slice(0, 30);
  }
  throw new Error('网易新闻数据异常');
}
async function loadThePaperHot(){
  const j = await getJSON(API_THEPAPER, 18000);
  const list = j?.data?.hotNews;
  if (Array.isArray(list) && list.length){
    return list.map(it => ({
      title: it.name,
      url: it.link || `https://www.thepaper.cn/newsDetail_forward_${it.contId}`,
    })).filter(it => it.title && it.url).slice(0, 30);
  }
  throw new Error('澎湃新闻数据异常');
}
async function loadRSS(src){
  const xml = await getText('https://cors.redoc.ly/' + src.feed, 18000, 'application/rss+xml, application/xml, text/xml, */*');
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  if (doc.querySelector('parsererror')) throw new Error('RSS 解析失败');
  const items = [...doc.querySelectorAll('item, entry')].map(node => {
    const title = node.querySelector('title')?.textContent.replace(/\s+/g, ' ').trim() || '';
    let url = node.querySelector('link')?.textContent.trim() || '';
    if (!url){
      const linkEl = [...node.querySelectorAll('link')].find(l => !l.getAttribute('rel') || l.getAttribute('rel') === 'alternate') || node.querySelector('link');
      url = linkEl?.getAttribute('href') || '';
    }
    return { title, url };
  }).filter(it => it.title && it.url).slice(0, 30);
  if (items.length) return items;
  throw new Error('新闻 RSS 数据异常');
}
async function loadSource(src){
  if (src.api === 'sina-hot') return loadSinaHot();
  if (src.api === 'netease') return loadNeteaseHot();
  if (src.api === 'thepaper') return loadThePaperHot();
  if (src.api === 'rss') return loadRSS(src);
  if (src.api === 'douban') return loadDouban();
  if (src.api === 'x') return loadX(src);
  if (src.api === 'appstore') return loadAppStore(src);
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
  const seq = (src._seq = (src._seq || 0) + 1);
  btn.classList.add('spin');
  if (!src.regions) ft.hidden = true;
  try{
    const items = await loadSource(src);
    if (seq !== src._seq) return;
    src._top = { title: items[0].title, url: items[0].url, char: src.char, color: src.color };
    src._count = items.length;
    body.innerHTML = listHTML(items);
    el.querySelector('.ptime').textContent = '更新于 ' + new Date().toTimeString().slice(0,8);
    if (src.regions){
      ft.hidden = false;
    }else if (items.length > SHOW){
      ft.hidden = false;
      el.querySelector('.more').textContent = `展开全部（共 ${items.length} 条）`;
      el.querySelector('.ranklist').classList.add('collapsed');
    }
    applySearch(); /* 刷新后保持搜索过滤状态 */
  }catch(e){
    if (seq !== src._seq) return;
    body.innerHTML = `<div class="card-err"><p>榜单加载失败，可能是网络波动</p><button class="retry">重新加载</button></div>`;
    el.querySelector('.ptime').textContent = '加载失败';
    body.querySelector('.retry').addEventListener('click', () => loadCard(src, el));
  }finally{
    if (seq === src._seq) btn.classList.remove('spin');
  }
}

/* 组装板块：分类标题 + 卡片 */
const catGrids = [];
let searchFoldedCats = null;
function setGridFolded(grid, folded){
  grid.classList.toggle('folded', folded);
  const label = grid.previousElementSibling;
  if (!label) return;
  label.classList.toggle('folded', folded);
  const btn = label.querySelector('.cat-toggle');
  if (!btn) return;
  btn.setAttribute('aria-expanded', String(!folded));
  btn.title = `${folded ? '展开' : '收起'}${btn.querySelector('.cat-name')?.textContent || ''}`;
}
let idx = 0;
CATS.forEach(cat => {
  const label = document.createElement('h2');
  label.className = 'cat-label reveal';
  label.dataset.cat = cat.id;
  label.innerHTML = `
    <button class="cat-toggle" type="button" aria-expanded="true" aria-controls="grid-${cat.id}" title="收起${cat.name}">
      <span class="bar" aria-hidden="true"></span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-en">${cat.en}</span>
      <svg class="cat-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>`;
  board.appendChild(label);
  const grid = document.createElement('div');
  grid.className = 'grid';
  grid.id = `grid-${cat.id}`;
  SOURCES.filter(s => s.cat === cat.id).forEach(s => {
    const el = buildCard(s);
    el.style.transitionDelay = (idx++ % 4) * 70 + 'ms';
    grid.appendChild(el);
  });
  board.appendChild(grid);
  catGrids.push(grid);
  label.querySelector('.cat-toggle').addEventListener('click', () => {
    const folded = !grid.classList.contains('folded');
    setGridFolded(grid, folded);
    if (qInput.value.trim() && searchFoldedCats){
      if (folded) searchFoldedCats.add(grid);
      else searchFoldedCats.delete(grid);
    }
  });
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
  const searching = !!q;
  if (searching && !searchFoldedCats){
    searchFoldedCats = new Set(catGrids.filter(g => g.classList.contains('folded')));
    searchFoldedCats.forEach(g => setGridFolded(g, false));
  }else if (!searching && searchFoldedCats){
    searchFoldedCats.forEach(g => setGridFolded(g, true));
    searchFoldedCats = null;
  }
  document.body.classList.toggle('searching', searching);
  document.querySelector('.search').classList.toggle('has', searching);
  let total = 0;
  cardMap.forEach(el => {
    const ol = el.querySelector('.ranklist');
    if (!ol){ el.classList.remove('dim'); return; }
    const lis = [...ol.querySelectorAll('.rk')];
    const ft = el.querySelector('.card-ft');
    const more = el.querySelector('.more');
    const hasRegion = el.classList.contains('has-region');
    const collapsed = ol.classList.contains('collapsed');
    if (!searching){
      el.classList.remove('dim');
      lis.forEach(li => li.classList.remove('hide','over'));
      if (ft && !hasRegion) ft.hidden = lis.length <= SHOW;
      if (more) more.textContent = collapsed ? `展开全部（共 ${lis.length} 条）` : '收起榜单';
      return;
    }
    let hits = 0;
    lis.forEach(li => {
      const hit = li.querySelector('.rk-t').textContent.toLowerCase().includes(q);
      if (hit) hits++;
      li.classList.toggle('hide', !hit);
      li.classList.toggle('over', hit && collapsed && hits > SHOW);
    });
    total += hits;
    el.classList.toggle('dim', hits === 0);
    if (ft && !hasRegion){
      ft.hidden = hits <= SHOW;
      if (!ft.hidden && more) more.textContent = collapsed ? `展开全部（匹配 ${hits} 条）` : '收起榜单';
    }
  });
  sstat.hidden = !searching;
  if (searching) sstat.textContent = `匹配 ${total} 条`;
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
  const html = tops.map(s => {
    const icon = iconURL(s.id);
    return `<a class="tk" href="${esc(safeURL(s._top.url))}" target="_blank" rel="noopener noreferrer"><i class="${icon ? '' : 'noicon'}" style="--pc:${s.color}">${icon ? `<img src="${esc(icon)}" alt="" loading="lazy">` : ''}<b>${esc(s._top.char)}</b></i>${esc(s._top.title)}</a>`;
  }).join('');
  const track = $('#tk-track');
  track.style.setProperty('--dur', Math.max(60, tops.length * 5) + 's');
  track.innerHTML = `<div class="tk-group">${html}</div><div class="tk-group" aria-hidden="true">${html}</div>`;
  track.querySelectorAll('.tk i img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('noicon')));
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

/* ================= 免责声明弹窗 ================= */
const dInfo = $('#d-info'), dTrigger = $('#d-trigger');
let bodyPad = '';
function openInfo(){
  bodyPad = document.body.style.paddingRight;
  const sbw = window.innerWidth - document.documentElement.clientWidth;
  if (sbw > 0) document.body.style.paddingRight = sbw + 'px';
  document.body.classList.add('dinfo-open');
  dInfo.showModal();
}
function closeInfo(){ dInfo.close(); }
dTrigger.addEventListener('click', openInfo);
$('#d-close').addEventListener('click', closeInfo);
$('#d-ok').addEventListener('click', closeInfo);
dInfo.addEventListener('close', () => {
  document.body.classList.remove('dinfo-open');
  document.body.style.paddingRight = bodyPad;
  dTrigger.focus();
});
dInfo.addEventListener('click', e => {
  if (!dInfo.open) return;
  const r = dInfo.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeInfo();
});

/* 首次加载 */
refreshAll(true);
