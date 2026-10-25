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
/* cid = codelife 榜单 ID；api = 自定义官方接口；feed = RSS 地址；nohot = 热度值无意义时不显示；home = 官方热榜页 */
const SOURCES = [
  { id:'weibo',      cat:'hot',    name:'微博热搜',      char:'微', color:'#e6162d', sub:'随时随地发现新鲜事',   cid:'KqndgxeLl9',        home:'https://s.weibo.com/top/summary' },
  { id:'zhihu',      cat:'hot',    name:'知乎热榜',      char:'知', color:'#0084ff', sub:'有问题 就会有答案',    cid:'mproPpoq6O',        home:'https://www.zhihu.com/hot' },
  { id:'baidu',      cat:'hot',    name:'百度热点',      char:'百', color:'#2932e1', sub:'实时热点榜',           cid:'Jb0vmloB1G',        home:'https://top.baidu.com/board?tab=realtime' },
  { id:'toutiao',    cat:'hot',    name:'头条热榜',      char:'头', color:'#f85959', sub:'信息创造价值',         cid:'toutiao', home:'https://www.toutiao.com/' },
  { id:'wechat',     cat:'hot',    name:'微信热文',      char:'信', color:'#07c160', sub:'24h 热门公众号文章',   cid:'WnBe01o371',                     home:'https://weixin.qq.com/' },
  { id:'smzdm',      cat:'hot',    name:'什么值得买',    char:'值', color:'#e02727', sub:'好文 · 好价榜',        cid:'K7GdagpoQy',                     home:'https://www.smzdm.com/' },
  { id:'tieba',      cat:'hot',    name:'百度贴吧',      char:'贴', color:'#3085d6', sub:'热议话题榜',           cid:'Om4ejxvxEN',        home:'https://tieba.baidu.com/' },
  { id:'sinahot',    cat:'hot',    name:'新浪热榜',      char:'新', color:'#f6842e', sub:'实时热点榜',           api:'sina-hot',                        home:'https://news.sina.com.cn/' },
  { id:'netease',    cat:'hot',    name:'网易新闻',      char:'网', color:'#d0021b', sub:'热点新闻榜',           api:'netease', nohot:true,            home:'https://news.163.com/' },
  { id:'github',     cat:'tech',   name:'GitHub 趋势',   char:'G',  color:'#8250df', sub:'Trending Today',      cid:'rYqoXQ8vOD',       home:'https://github.com/trending' },
  { id:'juejin',     cat:'tech',   name:'掘金',          char:'掘', color:'#1e80ff', sub:'本周最热技术文章',     cid:'QaqeEaVe9R',       home:'https://juejin.cn/hot' },
  { id:'sspai',      cat:'tech',   name:'少数派',        char:'少', color:'#e64552', sub:'高质量数字消费指南',   cid:'Y2KeDGQdNP',   home:'https://sspai.com/' },
  { id:'ithome',     cat:'tech',   name:'IT之家',        char:'IT', color:'#d22222', sub:'科技资讯日榜',         cid:'74Kvx59dkx',                     home:'https://www.ithome.com/' },
  { id:'kr36',       cat:'tech',   name:'36氪',          char:'36', color:'#0068ff', sub:'24 小时热榜',          cid:'Q1Vd5Ko85R',         home:'https://36kr.com/hot-list/catalog' },
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
  { id:'txnews',     cat:'news',   name:'腾讯新闻·热问', char:'腾', color:'#12b7f5', sub:'全网热议话题',         cid:'12owgX0oNV',   home:'https://news.qq.com/' },
  { id:'sina',       cat:'news',   name:'新浪财经',      char:'新', color:'#f6842e', sub:'点击量排行',           cid:'rx9ozj7oXb', home:'https://finance.sina.com.cn/' },
  { id:'cbn',        cat:'news',   name:'第一财经',      char:'第', color:'#c0392b', sub:'新闻排行周榜',         cid:'0MdKam4ow1',                     home:'https://www.yicai.com/' },
  { id:'xueqiu',     cat:'news',   name:'雪球',          char:'雪', color:'#0089e0', sub:'今日投资话题',         cid:'X12owXzvNV',       home:'https://xueqiu.com/' },
  { id:'thepaper',   cat:'news',   name:'澎湃新闻',      char:'澎', color:'#e66a2c', sub:'热点新闻榜',           api:'thepaper', nohot:true,           home:'https://www.thepaper.cn/' },
  { id:'chinanews',  cat:'news',   name:'中国新闻网',    char:'中', color:'#c8102e', sub:'即时新闻',             api:'rss', nohot:true, feed:'https://www.chinanews.com.cn/rss/scroll-news.xml', home:'https://www.chinanews.com.cn/' },
  { id:'wallstreetcn', cat:'news', name:'华尔街见闻',    char:'华', color:'#d0021b', sub:'热门资讯',             cid:'G2me3ndwjq',                     home:'https://wallstreetcn.com/' },
  { id:'bili',       cat:'fun',    name:'哔哩哔哩',      char:'B',  color:'#fb7299', sub:'全站日榜',             cid:'74KvxwokxM',     home:'https://www.bilibili.com/v/popular/rank/all' },
  { id:'douyin',     cat:'fun',    name:'抖音热点',      char:'抖', color:'#fe2c55', sub:'热门视频榜',           cid:'DpQvNABoNE',       home:'https://www.douyin.com/hot' },
  { id:'douban',     cat:'fun',    name:'豆瓣电影',      char:'豆', color:'#42bd56', sub:'新片榜',               api:'douban',                        home:'https://movie.douban.com/chart' },
  { id:'hupu',       cat:'fun',    name:'虎扑步行街',    char:'虎', color:'#c7232c', sub:'步行街热帖',           cid:'G47o8weMmN',         home:'https://bbs.hupu.com/all-gambia' },
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

/* 时间戳绕过 CDN 缓存，减少榜单滞后 */
const API_CODELIFE = id => `https://api.codelife.cc/api/top/list?lang=cn&id=${encodeURIComponent(id)}&_=${Date.now()}`;
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
function sinaDay(d = new Date()){
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone:'Asia/Shanghai', year:'numeric', month:'2-digit', day:'2-digit' }).formatToParts(d);
  const pick = type => parts.find(p => p.type === type)?.value || '';
  return pick('year') + pick('month') + pick('day');
}
const API_SINA_HOT   = () => {
  const day = sinaDay();
  return `https://cors.redoc.ly/https://top.news.sina.com.cn/ws/GetTopDataList.php?top_type=day&top_cat=www_www_all_suda_suda&top_time=${day}&top_show_num=50&top_order=DESC&js_var=all_1_data`;
};
const API_NETEASE    = 'https://cors.redoc.ly/https://m.163.com/fe/api/hot/news/flow';
const API_THEPAPER   = 'https://cors.redoc.ly/https://cache.thepaper.cn/contentapi/wwwIndex/rightSidebar';
const REFRESH_MS = 5 * 60 * 1000;
const SHOW = 10;
const LOAD_CONCURRENCY = 6;
const CACHE_PREFIX = 'hotboard-cache-v1:';

/* ================= 工具 ================= */
const $  = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL = u => {
  const s = String(u ?? '').trim();
  if (!/^https?:\/\//i.test(s)) return '#';
  try {
    const url = new URL(s);
    if (!/^https?:$/.test(url.protocol) || url.username || url.password) return '#';
    return url.href;
  } catch {
    return '#';
  }
};
const pad = n => String(n).padStart(2,'0');
const fmtTime = ts => new Date(ts).toTimeString().slice(0,8);
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
function cleanItems(arr){
  if (!Array.isArray(arr)) return [];
  return arr.map(it => {
    if (!it || typeof it !== 'object') return null;
    const title = String(it.title ?? '').replace(/\s+/g,' ').trim();
    const url = String(it.url ?? '').trim();
    if (!title || !/^https?:\/\//i.test(url)) return null;
    return { title, url, hot: it.hot ?? '', score: it.score ?? '' };
  }).filter(Boolean).slice(0, 100);
}
function fmtStamp(ts){
  const d = new Date(ts), now = new Date();
  const sameDay = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  return sameDay ? fmtTime(ts) : `${d.getMonth()+1}/${d.getDate()} ${fmtTime(ts)}`;
}
function cacheKey(src){
  return CACHE_PREFIX + src.id + (src.region ? ':' + src.region : '');
}
function readCache(src){
  try{
    const raw = sessionStorage.getItem(cacheKey(src));
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Number.isFinite(data.t)) return null;
    const items = cleanItems(data.items);
    return items.length ? { t:data.t, items } : null;
  }catch(e){
    return null;
  }
}
function writeCache(src, items){
  try{
    sessionStorage.setItem(cacheKey(src), JSON.stringify({ t: Date.now(), items }));
  }catch(e){
    try{
      for (let i = sessionStorage.length - 1; i >= 0; i--){
        const key = sessionStorage.key(i);
        if (key && key.startsWith(CACHE_PREFIX)) sessionStorage.removeItem(key);
      }
      sessionStorage.setItem(cacheKey(src), JSON.stringify({ t: Date.now(), items }));
    }catch(_){}
  }
}
async function getJSON(url, timeout = 12000, signal){
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  const onAbort = () => ctrl.abort();
  if (signal){ signal.aborted ? ctrl.abort() : signal.addEventListener('abort', onAbort, { once:true }); }
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers:{ Accept:'application/json' } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}
async function getText(url, timeout = 15000, accept = 'text/html', signal){
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  const onAbort = () => ctrl.abort();
  if (signal){ signal.aborted ? ctrl.abort() : signal.addEventListener('abort', onAbort, { once:true }); }
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers:{ Accept: accept } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.text();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
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
let themeTarget = document.documentElement.dataset.theme || 'light';
let themeSwitchId = 0;
function syncThemeColor(theme){
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  const color = theme === 'dark' ? '#131519' : '#f3f2ec';
  metas.forEach((meta, i) => {
    if (i === 0){ meta.removeAttribute('media'); meta.content = color; }
    else meta.remove();
  });
}
syncThemeColor(themeTarget);
function commitTheme(root, next){
  root.dataset.theme = next;
  syncThemeColor(next);
  try { localStorage.setItem('hotboard-theme', next); } catch(e){}
}
$('#btn-theme').addEventListener('click', () => {
  const root = document.documentElement;
  const next = themeTarget === 'dark' ? 'light' : 'dark';
  themeTarget = next;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const id = ++themeSwitchId;
  const finish = () => {
    if (id !== themeSwitchId) return;
    root.classList.remove('theme-switching', 'theme-vt');
  };

  root.classList.add('theme-switching');
  if (reduce || typeof document.startViewTransition !== 'function'){
    commitTheme(root, next);
    if (reduce){
      finish();
    }else{
      requestAnimationFrame(() => requestAnimationFrame(finish));
    }
    return;
  }

  root.classList.add('theme-vt');
  try{
    const vt = document.startViewTransition(() => commitTheme(root, next));
    vt.finished.then(finish, finish);
  }catch(e){
    commitTheme(root, next);
    requestAnimationFrame(() => requestAnimationFrame(finish));
  }
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
function itemHTML(it, i){
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
}
function listHTML(items){
  return '<ol class="ranklist">' + items.map(itemHTML).join('') + '</ol>';
}
function indexList(ol, items){
  const lis = ol.children;
  for (let i = 0; i < lis.length; i++){
    lis[i]._search = String(items[i]?.title || '').toLowerCase();
  }
}
function renderItems(src, el, items){
  const wasExpanded = src._expanded === true;
  const active = document.activeElement;
  const hadFocus = active && el.contains(active) && active.classList.contains('rk-t');
  const focusIndex = hadFocus ? [...el.querySelectorAll('.rk-t')].indexOf(active) : -1;
  src._items = items;
  src._expanded = wasExpanded && items.length > SHOW;
  src._hydrated = items.length <= SHOW || src._expanded;
  const body = el.querySelector('.card-bd');
  body.innerHTML = listHTML(src._expanded ? items : items.slice(0, SHOW));
  const ol = body.querySelector('.ranklist');
  if (items.length > SHOW && !src._expanded) ol.classList.add('collapsed');
  indexList(ol, items);
  if (focusIndex >= 0){
    const links = el.querySelectorAll('.rk-t');
    if (links[focusIndex]) links[focusIndex].focus({ preventScroll:true });
  }
}
function ensureFullList(src, el){
  if (!src._items || src._hydrated) return;
  const ol = el.querySelector('.ranklist');
  if (!ol) return;
  const extra = src._items.slice(SHOW);
  if (extra.length) ol.insertAdjacentHTML('beforeend', extra.map((it, i) => itemHTML(it, i + SHOW)).join(''));
  src._hydrated = true;
  indexList(ol, src._items);
}
function trimList(src, el){
  if (!src._items || src._items.length <= SHOW) return;
  const ol = el.querySelector('.ranklist');
  if (!ol) return;
  while (ol.children.length > SHOW) ol.lastElementChild.remove();
  src._hydrated = false;
  ol.classList.add('collapsed');
  const ft = el.querySelector('.card-ft');
  const more = el.querySelector('.more');
  if (ft && !el.classList.contains('has-region')) ft.hidden = false;
  if (more) more.textContent = `展开全部（共 ${src._count} 条）`;
}
function trimCollapsedLists(){
  cardMap.forEach(el => {
    const src = el._src;
    if (src?._hydrated && !src._expanded) trimList(src, el);
  });
}
function renderCardData(src, el, items, ts){
  src._top = { title: items[0].title, url: items[0].url, char: src.char, color: src.color };
  src._count = items.length;
  src._dataTs = ts;
  renderItems(src, el, items);
  const ft = el.querySelector('.card-ft');
  const more = el.querySelector('.more');
  if (items.length > SHOW){
    ft.hidden = false;
    if (more) more.textContent = src._expanded ? '收起榜单' : `展开全部（共 ${items.length} 条）`;
  }else{
    ft.hidden = !src.regions;
  }
  const ptime = el.querySelector('.ptime');
  ptime.textContent = '抓取于 ' + fmtStamp(ts);
  ptime.title = src.api ? '抓取时间' : '抓取时间；数据来自 Codelife 第三方聚合，可能滞后官方';
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
  el._src = src;
  if (!src._state) src._state = 'idle';
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
        <p><span class="psub">${esc(sourceSub(src))}</span><span class="ptime">加载中…</span>${src.api ? '' : '<span class="src-tag" title="数据来自 Codelife 第三方聚合，可能滞后官方">第三方</span>'}</p>
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
  el.querySelector('.card-refresh').addEventListener('click', () => enqueueLoad(src, el, { force:true }));
  const more = el.querySelector('.more');
  if (more) more.addEventListener('click', function(){
    const ol = el.querySelector('.ranklist');
    if (ol.classList.contains('collapsed')) ensureFullList(src, el);
    const collapsed = ol.classList.toggle('collapsed');
    src._expanded = !collapsed;
    if (qInput.value.trim()) scheduleSearch();
    else if (collapsed) trimList(src, el);
    else this.textContent = '收起榜单';
  });
  const regionSelect = el.querySelector('.region-select');
  if (regionSelect){
    el.classList.add('has-region');
    regionSelect.addEventListener('change', () => {
      if (!src.regions.some(r => r.id === regionSelect.value)) return;
      src.region = regionSelect.value;
      el.querySelector('.pmeta h3 a').href = sourceHome(src);
      el.querySelector('.psub').textContent = sourceSub(src);
      enqueueLoad(src, el, { force:true, clear:true, supersede:true });
    });
  }
  cardMap.set(src.id, el);
  return el;
}
async function loadDouban(_src, signal){
  try{
    const html = await getText(API_DOUBAN, 15000, 'text/html', signal);
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
  }catch(e){
    if (signal?.aborted) throw e;
    console.warn('[hotboard] 豆瓣页面解析失败，尝试热门接口', e?.name === 'AbortError' ? '请求超时' : e);
  }
  const j = await getJSON(API_DOUBAN_HOT, 12000, signal);
  if (j && Array.isArray(j.subjects) && j.subjects.length){
    return j.subjects.map(it => ({ title: it.title, url: it.url, score: it.rate || '' }));
  }
  throw new Error('豆瓣数据异常');
}
async function loadX(src, signal){
  const region = src.region || 'united-states';
  const slug = region !== 'worldwide' ? `${region}/` : '';
  const html = await getText(API_X + slug, 15000, 'text/html', signal);
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
async function loadAppStore(src, signal){
  const j = await getJSON(API_ITUNES(src.region || 'us'), 20000, signal);
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
async function loadSinaHot(_src, signal){
  const txt = await getText(API_SINA_HOT(), 18000, 'application/javascript, application/json, text/plain, */*', signal);
  const start = txt.indexOf('{'), end = txt.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('新浪热榜数据异常');
  const j = JSON.parse(txt.slice(start, end + 1));
  const items = (j.data || []).map(it => ({ title: it.title, hot: it.top_num, url: it.url })).filter(it => it.title && it.url);
  if (items.length) return items.slice(0, 30);
  throw new Error('新浪热榜数据异常');
}
async function loadNeteaseHot(_src, signal){
  const j = await getJSON(API_NETEASE, 18000, signal);
  const list = j?.data?.list;
  if (Array.isArray(list) && list.length){
    return list.map(it => ({ title: it.title, url: it.url })).filter(it => it.title && it.url).slice(0, 30);
  }
  throw new Error('网易新闻数据异常');
}
async function loadThePaperHot(_src, signal){
  const j = await getJSON(API_THEPAPER, 18000, signal);
  const list = j?.data?.hotNews;
  if (Array.isArray(list) && list.length){
    return list.map(it => ({
      title: it.name,
      url: it.link || `https://www.thepaper.cn/newsDetail_forward_${it.contId}`,
    })).filter(it => it.title && it.url).slice(0, 30);
  }
  throw new Error('澎湃新闻数据异常');
}
async function loadRSS(src, signal){
  const xml = await getText('https://cors.redoc.ly/' + src.feed, 18000, 'application/rss+xml, application/xml, text/xml, */*', signal);
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
async function loadHN(_src, signal){
  const j = await getJSON(API_HN, 12000, signal);
  if (j && Array.isArray(j.hits) && j.hits.length){
    return j.hits.map(h => ({ title: h.title, hot: h.points, url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}` }));
  }
  throw new Error('Hacker News 数据异常');
}
async function loadDevto(_src, signal){
  const j = await getJSON(API_DEVTO, 12000, signal);
  if (Array.isArray(j) && j.length){
    return j.map(a => ({ title: a.title, hot: a.positive_reactions_count, url: a.url || 'https://dev.to' + a.path }));
  }
  throw new Error('dev.to 数据异常');
}
const LOADERS = {
  'sina-hot': loadSinaHot,
  netease: loadNeteaseHot,
  thepaper: loadThePaperHot,
  rss: loadRSS,
  douban: loadDouban,
  x: loadX,
  appstore: loadAppStore,
  hn: loadHN,
  devto: loadDevto,
};
function validateSources(){
  const seen = new Set();
  SOURCES.forEach(src => {
    if (seen.has(src.id)) console.warn('[hotboard] 数据源 id 重复', src.id);
    seen.add(src.id);
    if (!src.cid && !src.api) console.warn('[hotboard] 数据源缺少 cid/api', src.id);
    if (src.api && !LOADERS[src.api]) console.warn('[hotboard] 未知 api', src.id, src.api);
    if (src.api === 'rss' && !src.feed) console.warn('[hotboard] RSS 数据源缺少 feed', src.id);
    if (src.regions && !src.regions.some(r => r.id === src.region)) console.warn('[hotboard] 默认地区无效', src.id, src.region);
    if (!ICONS[src.id]) console.warn('[hotboard] 数据源缺少图标', src.id);
  });
}
validateSources();
async function loadSource(src, signal){
  const custom = LOADERS[src.api];
  if (custom) return custom(src, signal);
  const j = await getJSON(API_CODELIFE(src.cid), 12000, signal);
  if (j && j.code === 200 && Array.isArray(j.data) && j.data.length){
    return j.data.map(it => ({ title: it.title, hot: src.nohot ? '' : it.hotValue, url: it.link }));
  }
  throw new Error('主源数据异常');
}
function friendlyError(reason){
  if (reason === '请求超时') return '请求超时，请稍后重试';
  if (/^HTTP \d+/.test(reason)) return '数据源暂时不可用';
  return '榜单加载失败，请稍后重试';
}
/* 每帧只写入一张榜单，避免多个响应同帧渲染造成长帧 */
const renderQueue = [];
let renderScheduled = false;
function flushRenderQueue(){
  renderScheduled = false;
  const run = renderQueue.shift();
  if (run) run();
  if (renderQueue.length){
    renderScheduled = true;
    requestAnimationFrame(flushRenderQueue);
  }
}
function renderSlot(){
  if (document.hidden) return Promise.resolve();
  return new Promise(resolve => {
    renderQueue.push(resolve);
    if (!renderScheduled){
      renderScheduled = true;
      requestAnimationFrame(flushRenderQueue);
    }
  });
}
async function loadCard(src, el, { force = false, clear = false } = {}){
  const body = el.querySelector('.card-bd');
  const ft = el.querySelector('.card-ft');
  const btn = el.querySelector('.card-refresh');
  const seq = (src._seq = (src._seq || 0) + 1);
  src._abort?.abort();
  const ctrl = new AbortController();
  src._abort = ctrl;
  if (clear){
    body.innerHTML = skeleton();
    el.querySelector('.ptime').textContent = '加载中…';
    src._items = null;
    src._hydrated = false;
    src._count = 0;
    src._dataTs = 0;
    src._top = null;
    scheduleTicker();
  }
  let cached = readCache(src);
  if (cached){
    try{
      await renderSlot();
      if (seq !== src._seq) return { ok:false, superseded:true };
      renderCardData(src, el, cached.items, cached.t);
      scheduleTicker();
      if (!force && Date.now() - cached.t < REFRESH_MS){
        btn.classList.remove('spin');
        if (qInput.value.trim()) scheduleSearch();
        return { ok:true, shown:true, cached:true };
      }
    }catch(e){
      console.warn('[hotboard] 缓存渲染失败', src.id, e);
      cached = null;
    }
  }
  const previous = src._items ? { items: src._items, t: src._dataTs || Date.now() } : null;
  btn.classList.add('spin');
  if (!cached && !src._items) ft.hidden = !src.regions;
  try{
    const items = cleanItems(await loadSource(src, ctrl.signal));
    if (seq !== src._seq) return { ok:false, superseded:true };
    if (!items.length) throw new Error('空数据');
    writeCache(src, items);
    await renderSlot();
    if (seq !== src._seq) return { ok:false, superseded:true };
    renderCardData(src, el, items, Date.now());
    scheduleTicker();
    if (qInput.value.trim()) scheduleSearch();
    return { ok:true, shown:true, count:items.length };
  }catch(e){
    if (seq !== src._seq) return { ok:false, superseded:true };
    const reason = e?.name === 'AbortError' ? '请求超时' : (e?.message || String(e));
    console.warn('[hotboard] 加载失败', src.id, reason);
    const fallback = cached || previous;
    if (fallback){
      await renderSlot();
      if (seq !== src._seq) return { ok:false, superseded:true };
      renderCardData(src, el, fallback.items, fallback.t);
      const ptime = el.querySelector('.ptime');
      ptime.textContent = (cached ? '缓存 · ' : '上次数据 · ') + fmtStamp(fallback.t);
      ptime.title = `网络刷新失败（${reason}），显示${cached ? '缓存数据' : '上次成功数据'}`;
      scheduleTicker();
      if (qInput.value.trim()) scheduleSearch();
      return { ok:false, shown:true, stale:true, reason };
    }
    await renderSlot();
    if (seq !== src._seq) return { ok:false, superseded:true };
    body.innerHTML = `<div class="card-err"><p>${friendlyError(reason)}<span class="err-detail">${esc(reason)}</span></p><button class="retry">重新加载</button></div>`;
    el.querySelector('.ptime').textContent = '加载失败';
    el.querySelector('.ptime').title = reason;
    src._top = null;
    scheduleTicker();
    body.querySelector('.retry').addEventListener('click', () => enqueueLoad(src, el, { force:true }));
    return { ok:false, shown:false, reason };
  }finally{
    if (src._abort === ctrl) src._abort = null;
    if (seq === src._seq) btn.classList.remove('spin');
  }
}

/* ================= 按需加载队列 ================= */
const loadQueue = [];
let activeLoads = 0;
function enqueueLoad(src, el, opts = {}){
  if (!src || !el) return Promise.resolve({ ok:false, reason:'missing-card' });
  const pending = src._state === 'queued' || src._state === 'loading';
  if (pending && !opts.supersede) return src._promise || Promise.resolve({ ok:false, superseded:true });
  if (!pending && src._state === 'loaded' && !opts.force && !opts.reload && !opts.supersede) return Promise.resolve({ ok:true, skipped:true });
  if (opts.supersede){
    src._seq = (src._seq || 0) + 1;
    src._abort?.abort();
    for (let i = loadQueue.length - 1; i >= 0; i--){
      if (loadQueue[i].src === src){
        const old = loadQueue.splice(i, 1)[0];
        old.resolve({ ok:false, superseded:true });
      }
    }
  }
  src._state = 'queued';
  let resolve;
  const promise = new Promise(r => { resolve = r; });
  const job = { src, el, opts, resolve, promise };
  src._job = job;
  src._promise = promise;
  loadQueue.push(job);
  drainLoadQueue();
  return promise;
}
async function drainLoadQueue(){
  while (activeLoads < LOAD_CONCURRENCY && loadQueue.length){
    const job = loadQueue.shift();
    activeLoads++;
    if (job.src._job === job) job.src._state = 'loading';
    let result;
    try{
      result = await loadCard(job.src, job.el, job.opts);
    }catch(e){
      result = { ok:false, shown:false, reason:e?.message || String(e) };
    }
    activeLoads--;
    if (job.src._job === job){
      job.src._state = result?.shown ? 'loaded' : 'error';
      job.src._job = null;
    }
    if (job.src._promise === job.promise) job.src._promise = null;
    job.resolve(result || { ok:false, shown:false, reason:'unknown' });
    updateSourceAlert();
    if (qInput.value.trim()) scheduleSearch();
    drainLoadQueue();
  }
}
function loadGridCards(grid){
  grid?.querySelectorAll('.card').forEach(el => enqueueLoad(el._src, el));
}
function loadAllCards(){
  SOURCES.forEach(src => {
    if (src._state !== 'error') enqueueLoad(src, cardMap.get(src.id));
  });
}
let sourceAlertDismissedAt = 0;
function updateSourceAlert(){
  const alert = $('#src-alert');
  if (!alert) return;
  const failed = SOURCES.filter(s => s._state === 'error').length;
  if (failed === 0) sourceAlertDismissedAt = 0;
  const searching = !!qInput.value.trim();
  const show = failed >= 3 || (searching && failed > 0);
  if (!show || (sourceAlertDismissedAt && failed <= sourceAlertDismissedAt)){
    alert.hidden = true;
    return;
  }
  alert.hidden = false;
  const text = $('#src-alert-text');
  if (text) text.textContent = searching
    ? `${failed} 个榜单来源失败，搜索结果可能不完整`
    : `${failed} 个榜单数据源暂时不可用，部分卡片显示缓存或错误状态`;
}
$('#src-alert-close')?.addEventListener('click', () => {
  sourceAlertDismissedAt = SOURCES.filter(s => s._state === 'error').length;
  const alert = $('#src-alert');
  if (alert) alert.hidden = true;
});
$('#src-retry')?.addEventListener('click', () => {
  SOURCES.filter(s => s._state === 'error').forEach(src => enqueueLoad(src, cardMap.get(src.id), { force:true }));
});

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
    if (!folded) loadGridCards(grid);
    if (qInput.value.trim() && searchFoldedCats){
      if (folded) searchFoldedCats.add(grid);
      else searchFoldedCats.delete(grid);
    }
    if (qInput.value.trim()) scheduleSearch();
  });
});

/* 滚动浮现 */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .06 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* 按视口加载：首屏优先，滚动接近时再请求 */
const cardLoader = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    cardLoader.unobserve(en.target);
    enqueueLoad(en.target._src, en.target);
  });
}, { rootMargin: '600px 0px', threshold: .01 });
cardMap.forEach(el => cardLoader.observe(el));

/* 后台标签页/旧浏览器下 IntersectionObserver 可能延迟回调，首屏兜底加载 */
function loadNearViewport(){
  const margin = 600;
  const vh = window.innerHeight || 900;
  cardMap.forEach(el => {
    if (!el.getClientRects().length) return;
    const r = el.getBoundingClientRect();
    if (r.top < vh + margin && r.bottom > -margin) enqueueLoad(el._src, el);
  });
}
window.addEventListener('load', loadNearViewport, { once:true });
let lazyScrollAt = 0;
window.addEventListener('scroll', () => {
  if (!SOURCES.some(src => src._state === 'idle')) return;
  const now = performance.now();
  if (now - lazyScrollAt < 150) return;
  lazyScrollAt = now;
  loadNearViewport();
}, { passive:true });

/* ================= 分类页签 ================= */
const tabsBox = $('#tabs');
function setActiveTab(cat, load){
  tabsBox.querySelectorAll('.tab').forEach(b => {
    const on = b.dataset.cat === cat;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
  });
  board.querySelectorAll('.card, .cat-label').forEach(el => el.classList.toggle('off', cat !== 'all' && el.dataset.cat !== cat));
  const activeBtn = [...tabsBox.querySelectorAll('.tab')].find(b => b.dataset.cat === cat);
  if (activeBtn) activeBtn.scrollIntoView({ inline:'center', block:'nearest' });
  if (load && cat !== 'all') loadGridCards($('#grid-' + cat));
}
function buildTabs(){
  const all = [{ id:'all', name:'全部', n: SOURCES.length }, ...CATS.map(c => ({ id:c.id, name:c.name, n: SOURCES.filter(s => s.cat === c.id).length }))];
  tabsBox.innerHTML = all.map((t,i) =>
    `<button class="tab${i===0?' on':''}" aria-pressed="${i===0}" data-cat="${t.id}">${t.name}<b>${t.n}</b></button>`).join('');
  tabsBox.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => {
    const searching = !!qInput.value.trim();
    if (searching) searchTabBefore = btn.dataset.cat;
    setActiveTab(btn.dataset.cat, !searching);
    if (searching) scheduleSearch();
  }));
}
buildTabs();

/* ================= 搜索过滤 ================= */
const qInput = $('#q'), sstat = $('#sstat'), searchEmpty = $('#search-empty');
let searchFrame = 0;
let searchTabBefore = null;
function scheduleSearch(){
  if (searchFrame) return;
  searchFrame = requestAnimationFrame(() => {
    searchFrame = 0;
    applySearch();
  });
}
function setSearchHint(el, text){
  const body = el.querySelector('.card-bd');
  if (!body) return;
  let hint = body.querySelector('.search-hint');
  if (!text){ if (hint) hint.remove(); return; }
  if (!hint){
    hint = document.createElement('p');
    hint.className = 'search-hint';
    body.prepend(hint);
  }
  hint.textContent = text;
}
function applySearch(){
  const q = qInput.value.trim().toLowerCase();
  const searching = !!q;
  if (searching){
    if (searchTabBefore === null){
      searchTabBefore = tabsBox.querySelector('.tab.on')?.dataset.cat || 'all';
      if (searchTabBefore !== 'all'){
        setActiveTab('all', false);
        toast('搜索范围已切换到全部榜单');
      }
    }
    loadAllCards();
  }else if (searchTabBefore !== null){
    const restore = searchTabBefore;
    searchTabBefore = null;
    setActiveTab(restore, false);
  }
  if (searching && !searchFoldedCats){
    searchFoldedCats = new Set(catGrids.filter(g => g.classList.contains('folded')));
    searchFoldedCats.forEach(g => setGridFolded(g, false));
  }else if (!searching && searchFoldedCats){
    searchFoldedCats.forEach(g => setGridFolded(g, true));
    searchFoldedCats = null;
    trimCollapsedLists();
  }
  document.body.classList.toggle('searching', searching);
  document.querySelector('.search').classList.toggle('has', searching);
  let total = 0;
  cardMap.forEach(el => {
    const ol = el.querySelector('.ranklist');
    if (!ol){ el.classList.remove('dim'); el.classList.toggle('search-hide', searching); return; }
    const lis = [...ol.querySelectorAll('.rk')];
    const ft = el.querySelector('.card-ft');
    const more = el.querySelector('.more');
    const hasRegion = el.classList.contains('has-region');
    const collapsed = ol.classList.contains('collapsed');
    const src = el._src;
    if (!searching){
      el.classList.remove('dim','search-hide');
      setSearchHint(el, '');
      lis.forEach(li => li.classList.remove('hide','over'));
      const cardTotal = src?._count ?? lis.length;
      if (ft && !hasRegion) ft.hidden = cardTotal <= SHOW;
      if (more) more.textContent = collapsed ? `展开全部（共 ${cardTotal} 条）` : '收起榜单';
      return;
    }
    if (el.classList.contains('off')){
      el.classList.remove('dim');
      setSearchHint(el, '');
      lis.forEach(li => li.classList.remove('hide','over'));
      return;
    }
    const items = src?._items || [];
    const totalHits = items.reduce((n, it) => n + (String(it?.title || '').toLowerCase().includes(q) ? 1 : 0), 0);
    const firstHit = items.findIndex(it => String(it?.title || '').toLowerCase().includes(q));
    let seen = 0, visible = 0;
    lis.forEach(li => {
      const text = li._search ?? li.querySelector('.rk-t').textContent.toLowerCase();
      const hit = text.includes(q);
      if (hit) seen++;
      li.classList.toggle('hide', !hit);
      const over = hit && collapsed && seen > SHOW;
      li.classList.toggle('over', over);
      if (hit && !over) visible++;
    });
    total += totalHits;
    el.classList.toggle('dim', totalHits === 0);
    el.classList.toggle('search-hide', totalHits === 0);
    if (totalHits > 0 && visible === 0){
      setSearchHint(el, firstHit >= 0 ? `匹配内容在列表第 ${firstHit + 1} 条，展开后查看` : '匹配内容在列表更下方，展开后查看');
    }else{
      setSearchHint(el, '');
    }
    if (ft && !hasRegion){
      const showMore = totalHits > SHOW || (totalHits > 0 && (seen === 0 || (collapsed && lis.length > SHOW))) || (!collapsed && items.length > SHOW);
      ft.hidden = !showMore;
      if (showMore && more) more.textContent = collapsed ? `展开全部（匹配 ${totalHits} 条）` : '收起榜单';
    }
  });
  catGrids.forEach(grid => {
    const label = grid.previousElementSibling;
    const hasMatch = searching && [...grid.querySelectorAll('.card')].some(c => !c.classList.contains('off') && !c.classList.contains('search-hide'));
    grid.classList.toggle('search-hide', searching && !hasMatch);
    if (label) label.classList.toggle('search-hide', searching && !hasMatch);
  });
  const pending = SOURCES.some(s => s._state === 'queued' || s._state === 'loading');
  const failures = SOURCES.filter(s => s._state === 'error').length;
  sstat.hidden = !searching;
  if (searching){
    const activeCat = tabsBox.querySelector('.tab.on')?.dataset.cat || 'all';
    if (pending) sstat.textContent = `搜索中 · ${total} 条`;
    else if (failures && total === 0) sstat.textContent = `搜索受限 · ${failures} 个`;
    else sstat.textContent = activeCat === 'all' ? `匹配 ${total} 条` : `当前分类 · ${total} 条`;
    sstat.title = failures ? `${failures} 个来源失败，结果可能不完整` : '';
  }
  searchEmpty.hidden = !(searching && total === 0);
  if (searching && total === 0){
    searchEmpty.textContent = pending
      ? '正在搜索全部榜单…'
      : failures
        ? `有 ${failures} 个榜单数据源暂时不可用，暂时无法确认是否匹配，可稍后重试。`
        : '没有找到匹配的内容，试试更短的关键词。';
  }
  updateSourceAlert();
}
let searchTimer = null;
qInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(scheduleSearch, 120);
});
$('#q-clr').addEventListener('click', () => {
  clearTimeout(searchTimer);
  qInput.value = '';
  applySearch();
  qInput.focus();
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== qInput){ e.preventDefault(); qInput.focus(); }
  if (e.key === 'Escape' && document.activeElement === qInput){
    clearTimeout(searchTimer);
    qInput.value='';
    applySearch();
    qInput.blur();
  }
});

/* ================= 滚动播报 ================= */
let tickerTimer = null;
let tickerIdle = 0;
let tickerIntroduced = false;
function scheduleTicker(){
  if (tickerTimer || tickerIdle) return;
  tickerTimer = setTimeout(() => {
    tickerTimer = null;
    if ('requestIdleCallback' in window){
      tickerIdle = requestIdleCallback(() => {
        tickerIdle = 0;
        buildTicker();
      }, { timeout: 1000 });
    }else{
      buildTicker();
    }
  }, 300);
}
function buildTicker(){
  const tops = SOURCES.filter(s => s._top);
  const track = $('#tk-track');
  if (!tops.length){
    track.innerHTML = '<span class="tk-empty">正在汇聚全网热点…</span>';
    track.style.removeProperty('--dur');
    return;
  }
  const html = tops.map(s => {
    const icon = iconURL(s.id);
    return `<a class="tk" href="${esc(safeURL(s._top.url))}" target="_blank" rel="noopener noreferrer"><i class="${icon ? '' : 'noicon'}" style="--pc:${s.color}">${icon ? `<img src="${esc(icon)}" alt="" loading="lazy">` : ''}<b>${esc(s._top.char)}</b></i>${esc(s._top.title)}</a>`;
  }).join('');
  track.style.setProperty('--dur', Math.max(60, tops.length * 5) + 's');
  if (!tickerIntroduced){
    tickerIntroduced = true;
    const bar = track.closest('.ticker');
    if (bar){
      bar.classList.add('tk-enter');
      setTimeout(() => bar.classList.remove('tk-enter'), 700);
    }
  }
  track.innerHTML = `<div class="tk-group">${html}</div><div class="tk-group" aria-hidden="true">${html}</div>`;
  track.querySelectorAll('.tk i img').forEach(img => img.addEventListener('error', () => img.parentElement.classList.add('noicon')));
}
const tkView = document.querySelector('.tk-view');
if (tkView){
  let tkResume = 0;
  const pauseTicker = () => {
    clearTimeout(tkResume);
    const track = $('#tk-track');
    if (track) track.style.animationPlayState = 'paused';
  };
  const resumeTicker = () => {
    clearTimeout(tkResume);
    tkResume = setTimeout(() => {
      const track = $('#tk-track');
      if (track) track.style.animationPlayState = '';
    }, 2500);
  };
  tkView.addEventListener('touchstart', pauseTicker, { passive:true });
  tkView.addEventListener('touchend', resumeTicker, { passive:true });
  tkView.addEventListener('touchcancel', resumeTicker, { passive:true });
}

/* ================= 加载与自动刷新 ================= */
let nextAt = Date.now() + REFRESH_MS;
let refreshing = false;
async function refreshAll(silent, force = true, onlyLoaded = false){
  if (refreshing) return;
  if (silent && (qInput.value.trim() || dInfo.open)){
    nextAt = Date.now() + REFRESH_MS;
    return;
  }
  refreshing = true;
  const btn = $('#btn-refresh');
  btn.classList.add('spin');
  try{
    const targets = onlyLoaded
      ? SOURCES.filter(s => s._state === 'loaded' || s._state === 'error')
      : SOURCES;
    const ordered = targets.slice().sort((a, b) => {
      const ea = cardMap.get(a.id), eb = cardMap.get(b.id);
      const ta = ea && ea.offsetParent !== null ? ea.getBoundingClientRect().top : Infinity;
      const tb = eb && eb.offsetParent !== null ? eb.getBoundingClientRect().top : Infinity;
      return ta - tb;
    });
    const results = await Promise.all(ordered.map(src => enqueueLoad(src, cardMap.get(src.id), { force })));
    const failedPairs = results.map((r, i) => ({ r, src: ordered[i] })).filter(x => x.r && !x.r.ok && !x.r.superseded);
    const okCount = results.filter(r => r?.ok).length;
    buildTicker();
    nextAt = Date.now() + REFRESH_MS;
    if (!silent){
      const time = new Date().toTimeString().slice(0,5);
      if (failedPairs.length){
        const names = failedPairs.map(x => x.src.name);
        const label = names.slice(0, 2).join('、') + (names.length > 2 ? ' 等' : '');
        toast(`已更新 ${okCount} 个，${failedPairs.length} 个失败：${label}`);
      }else{
        toast('已更新 · ' + time);
      }
    }
  }finally{
    btn.classList.remove('spin');
    refreshing = false;
  }
}
$('#btn-refresh').addEventListener('click', () => refreshAll());

setInterval(() => {
  const left = Math.max(0, nextAt - Date.now());
  $('#cd').textContent = pad(Math.floor(left/60000)) + ':' + pad(Math.floor(left%60000/1000));
  if (left <= 0 && !document.hidden) refreshAll(true, true, true);
}, 1000);

/* 切回标签页时若已过期则刷新已加载卡片 */
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && Date.now() > nextAt) refreshAll(true, true, true);
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

/* 首屏卡片由 IntersectionObserver 按视口按需加载 */
loadNearViewport();
