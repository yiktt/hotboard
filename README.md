<div align="center">

# 今日热榜 · HotBoard

**一个页面，看尽 46 个平台的热点。**

聚合微博、知乎、百度、B 站、X、GitHub、Hacker News、BBC、纽约时报、澎湃新闻等 46 个平台的公开热榜与新闻头条，按 5 大分类展示，每 5 分钟刷新。纯静态、零后端、零构建，打开即用。

[![在线体验](https://img.shields.io/badge/%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C-yiktt.github.io%2Fhotboard-e8442e?style=flat-square)](https://yiktt.github.io/hotboard/)
![榜单平台](https://img.shields.io/badge/%E6%A6%9C%E5%8D%95%E5%B9%B3%E5%8F%B0-46-6e7681?style=flat-square)
![分类](https://img.shields.io/badge/%E5%88%86%E7%B1%BB-5-6e7681?style=flat-square)
![构建](https://img.shields.io/badge/%E6%9E%84%E5%BB%BA-none-6e7681?style=flat-square)
![协议](https://img.shields.io/badge/license-MIT-2ea043?style=flat-square)

<p align="center">
  <a href="#user-content-demo">在线体验</a> ·
  <a href="#user-content-features">功能</a> ·
  <a href="#user-content-sources">数据源</a> ·
  <a href="#user-content-quickstart">快速开始</a> ·
  <a href="#user-content-config">自定义</a> ·
  <a href="#user-content-tech">技术说明</a> ·
  <a href="#user-content-limits">限制</a>
</p>

</div>

---

<a id="demo"></a>
## 在线体验

[**打开今日热榜 →**](https://yiktt.github.io/hotboard/)

无需登录、安装或构建。首屏优先加载视口附近的榜单，滚动、切换分类或搜索时按需补齐其余内容。

<a id="features"></a>
## 功能

### 浏览与发现

- **46 个榜单 · 5 大分类** — 综合热搜、科技开发、海外视野、新闻资讯、影音娱乐，页签一键筛选。
- **全局搜索** — 跨榜单匹配标题；按 <kbd>/</kbd> 聚焦、<kbd>Esc</kbd> 清空；命中在首屏之外时会提示展开位置。
- **分类与列表折叠** — 点击分类标题收起整组；卡片默认展示 10 条，展开后保留列表状态和焦点。
- **地区切换** — X 趋势支持 62 个国家/地区，App Store 支持 34 个；切换后只刷新当前榜单。
- **官方入口** — 点击榜单名称可跳转到对应平台的官方热榜页。
- **滚动播报** — 顶部聚合已加载榜单的头条；桌面悬停、触屏轻触可暂停。

### 数据与刷新

- **按需加载** — 首屏附近优先，滚动、切换分类或搜索时补载；隐藏的分类不会被提前请求；最多 6 路并发。
- **刷新与缓存** — 每 5 分钟自动刷新并显示倒计时；支持全量刷新和单卡刷新；会话缓存先展示、后台更新，失败时保留旧数据并汇总失败来源。
- **失败可恢复** — 加载失败显示重试；搜索或浏览时多个来源失败会出现可关闭的提示条，可一键重试；离线与恢复联网时会显示提示。
- **数据标注** — Codelife 数据标注「第三方」和「抓取于」时间，避免把第三方快照误认为官方实时榜。

### 体验与可访问性

- **响应式布局** — 桌面、平板、手机适配；移动端主要触控目标 44px，悬浮按钮不压缩信息流。
- **主题与动效** — 跟随系统深浅色，手动切换会记忆；支持 View Transition 交叉淡化，并尊重 `prefers-reduced-motion`。
- **本地资源** — 字体和 46 个平台图标本地托管，不请求字体 CDN；图标失败时回退为品牌字符徽标。
- **可访问性** — 语义化标签、键盘焦点、ARIA 状态、原生对话框焦点回收；浅色主题小字对比度达到 4.5:1。
- **站点状态** — 页脚显示站点运行时长与本次页面加载耗时。
- **纯静态** — 原生 HTML / CSS / JavaScript，无框架、无后端、无构建步骤。

> 数据来自各平台公开接口或公开页面，可能因接口调整、限流或平台自身原因出现延迟、缺漏或错误。

<a id="sources"></a>
## 数据源

### 收录榜单

| 分类 | 数量 | 平台 |
| :--- | :---: | :--- |
| 综合热搜 | 9 | 微博热搜、知乎热榜、百度热点、头条热榜、微信热文、什么值得买、百度贴吧、新浪热榜、网易新闻 |
| 科技开发 | 10 | GitHub 趋势、掘金、少数派、IT之家、36氪、CSDN、站酷、虎嗅、开源中国、人人都是产品经理 |
| 海外视野 | 11 | Product Hunt、App Store、Hacker News、dev.to、X（Twitter）趋势、BBC 新闻、纽约时报、卫报、半岛电视台、NPR、德国之声 |
| 新闻资讯 | 7 | 腾讯新闻·热问、新浪财经、第一财经、雪球、澎湃新闻、中国新闻网、华尔街见闻 |
| 影音娱乐 | 9 | 哔哩哔哩、抖音热点、豆瓣电影、虎扑步行街、微信读书、懂球帝、快手、猫眼电影、IMDb |
| **合计** | **46** | 按视口和交互按需加载，单榜失败不影响其它榜单 |

<details>
<summary>查看数据接口、代理与来源说明</summary>

### 数据接口

| 来源 | 用途 | 说明 |
| :--- | :--- | :--- |
| [Codelife 开放接口](https://api.codelife.cc) | 主源 | 提供绝大多数境内榜单，含热度值，CORS 开放；请求带时间戳绕过 CDN 缓存，数据仍可能滞后官方 |
| [豆瓣电影](https://movie.douban.com/chart) | 豆瓣源 | 经 [Redocly CORS 代理](https://cors.redoc.ly) 读取豆瓣官方「新片榜」，失败时回退到官方「热门」JSON 接口 |
| [HN Algolia API](https://hn.algolia.com) | 海外源 | Hacker News 首页榜单，热度取 points |
| [dev.to API](https://dev.to) | 海外源 | dev.to 近 7 天热门文章，热度取 reactions |
| [getdaytrends](https://getdaytrends.com) | X 源 | 经 Redocly 代理读取全球或所选国家/地区的 X 趋势页，条目跳转至 X 搜索结果 |
| [iTunes RSS](https://itunes.apple.com) | App Store 源 | 经 Redocly 代理读取所选国家/地区的免费 App 榜 Top 10 |
| [新浪热榜](https://news.sina.com.cn) | 综合源 | 经 Redocly 代理读取新浪每日热点榜，热度取 `top_num` |
| [网易新闻](https://news.163.com) | 综合源 | 经 Redocly 代理读取网易热点新闻榜 |
| [澎湃新闻](https://www.thepaper.cn) | 新闻源 | 经 Redocly 代理读取澎湃右侧栏热榜 |
| [中国新闻网 RSS](https://www.chinanews.com.cn) | 新闻源 | 经 Redocly 代理读取即时新闻 RSS |
| 海外媒体 RSS | 海外媒体源 | 经 Redocly 代理读取 BBC、纽约时报、卫报、半岛电视台、NPR、德国之声的官方 RSS，按来源发布时间展示 |

### 数据说明

- 所有请求均由浏览器直接发起，项目没有服务端存储、转发或商业使用榜单内容；榜单仅在当前标签页会话缓存。
- 豆瓣官方页面未开放 CORS，因此通过 Redocly 公共代理读取；豆瓣榜单展示评分，不展示热度值。
- X 趋势读取 getdaytrends 的全球或所选国家/地区趋势页，默认展示美国趋势；X 未提供浏览器可直接调用的官方趋势接口，因此不展示热度值。
- App Store 榜单读取 iTunes RSS 的分区免费榜，默认展示美国区，固定展示 Top 10，不展示热度值。
- BBC、纽约时报、卫报、半岛电视台、NPR、德国之声通过官方 RSS 展示最新报道，顺序由来源 feed 决定，并非平台全站热度排行。
- Codelife 是第三方聚合，榜单快照和更新频率由服务方决定，可能滞后于平台官方榜；使用 Codelife 的卡片会在时间旁显示「第三方」标签，时间文案为「抓取于」，表示客户端抓取时间而非来源更新时间。
- 第三方接口与公共 CORS 代理可能限流、改版或短时不可用，属于外部依赖限制；重新加载通常可以恢复。

</details>

<a id="quickstart"></a>
## 快速开始

### 前置要求

现代 Chrome、Edge、Safari 或 Firefox；需要能访问数据源。站点本身不需要 Node.js、包管理器或构建服务，Node.js 仅用于静态检查和字体构建。

### 运行

```bash
git clone https://github.com/yiktt/hotboard.git
cd hotboard
python -m http.server 8080
```

浏览器打开 `http://localhost:8080/`，应看到「今日热榜」标题、搜索框和榜单卡片；首屏之外的卡片会在滚动时加载。也可以用 `npx serve .` 启动本地服务器。

### 部署

推送到 GitHub 后，在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`。页面无需构建，发布目录就是项目根目录。

也可直接部署到 Vercel、Netlify、Cloudflare Pages 等静态托管平台。

### 项目检查

```bash
node scripts/check.mjs
```

检查 CSP 内联脚本哈希、所有 API 主机覆盖、字体文件与子集文本一致性、字体预载、`SHOW` 与折叠 CSS 一致性、榜单数量与唯一 id、分类、默认地区、图标映射与 `hot.js` 语法。GitHub Actions 在 push / PR 时自动运行。

<a id="structure"></a>
## 项目结构

```text
hotboard/
├── index.html   # 页面结构、CSP、主题预渲染脚本、免责声明弹窗
├── hot.css      # 主题变量、布局、卡片、弹窗与响应式样式
├── hot.js       # 数据抓取、缓存、渲染、搜索、刷新与页面交互
├── icons/       # 46 个平台的官方图标（PNG / SVG / JPG / ICO）
├── fonts/       # 自托管字体子集、字符清单与 OFL 许可证
├── scripts/
│   ├── check.mjs      # 零依赖：CSP、字体子集、榜单配置、图标与语法检查
│   ├── build-fonts.mjs # 重新生成 ZCOOL 子集并下载 JetBrains Mono
│   └── font-text.mjs  # 从配置提取使用展示字体的文案字符
├── .github/
│   └── workflows/check.yml # push / PR 自动运行静态检查
├── .gitignore   # 忽略依赖、环境文件、日志和系统临时文件
└── README.md    # 项目说明
```

> `index.html` 通过相对路径引用 `hot.css`、`hot.js`、`icons/` 与 `fonts/`，部署时请保持目录结构不变。

<a id="config"></a>
## 自定义配置

主要配置集中在 `hot.js` 顶部。

### 榜单

编辑 `SOURCES` 数组添加或调整榜单：

```js
{
  id: 'weibo',
  cat: 'hot',
  name: '微博热搜',
  char: '微',
  color: '#e6162d',
  sub: '随时随地发现新鲜事',
  cid: 'KqndgxeLl9',
  home: 'https://s.weibo.com/top/summary'
}
```

| 字段 | 必填 | 说明 |
| :--- | :---: | :--- |
| `id` | 是 | 唯一标识，同时对应 `ICONS` 中的图标键 |
| `cat` | 是 | 所属分类 ID，需在 `CATS` 中定义 |
| `name` | 是 | 榜单名称 |
| `char` | 是 | 图标加载失败时显示的字符徽标 |
| `color` | 是 | 品牌色，用于徽标边框、字符与阴影 |
| `sub` | 是 | 卡片副标题 |
| `cid` | 二选一 | Codelife 榜单 ID，走主源时填写 |
| `api` | 二选一 | 自定义数据源标识，当前支持 `hn`、`devto`、`douban`、`x`、`appstore`、`rss`、`sina-hot`、`netease`、`thepaper` |
| `feed` | 否 | `api: 'rss'` 时必填，媒体官方 RSS 地址 |
| `regions` | 否 | 可选地区列表；配置后卡片底部显示地区选择器，X 与 App Store 使用该字段 |
| `region` | 否 | 默认地区 ID，需存在于 `regions` 中 |
| `nohot` | 否 | 为 `true` 时不展示热度值 |
| `home` | 是 | 平台官方热榜地址，点击卡片标题时跳转 |

每个榜单需要提供 `cid` 或 `api` 之一。新增自定义数据源时，还需在 `loadSource()` 中补充对应分支。

### 图标、分类与刷新

将图标放入 `icons/` 并在 `ICONS` 映射中登记；图标加载失败会自动回退为字符徽标。

```js
const ICONS = {
  weibo: 'weibo.svg',
  // ...
};
```

- **分类**：在 `CATS` 中追加 `{ id, name, en }`，页签、分类标题和数量会自动生成。
- **自动刷新**：修改 `REFRESH_MS`，默认 `5 * 60 * 1000`，同时作为会话缓存的刷新阈值。
- **默认展示条数**：修改 `SHOW`，默认 `10`；同时作为 X 趋势与 App Store 的抓取条数。
- **地区列表**：X 趋势维护在 `X_REGIONS`，App Store 维护在 `APP_REGIONS`。
- **接口地址**：`API_CODELIFE`、`API_HN`、`API_DEVTO`、`API_DOUBAN`、`API_X`、`API_ITUNES`、`API_SINA_HOT`、`API_NETEASE`、`API_THEPAPER` 等常量集中在 `hot.js` 顶部。

<a id="interactions"></a>
## 交互细节

<details>
<summary>查看搜索、列表、分类、刷新与地区切换的完整规则</summary>

- **搜索**：仅匹配已加载榜单的标题文本；进入搜索会补载未加载榜单、补全已加载卡片的条目并过滤不匹配项。无命中的卡片和分类会隐藏，命中在首屏 10 条之外时提示具体位置。输入带 120ms 防抖，结果更新按帧合并，加载期间显示「搜索中」。
- **搜索与列表折叠**：折叠卡片在搜索状态下最多展示前 10 条命中，按钮显示「展开全部（匹配 N 条）」；展开后展示该卡片的全部命中。清除搜索后，标题命中状态和分类折叠状态恢复，未主动展开的卡片回收额外 DOM。
- **展开列表**：普通卡片初始只生成前 10 条 DOM，内容超过 10 条时显示「展开全部（共 N 条）」，展开时补全并切换为「收起榜单」；收起时立即回收额外 DOM。刷新会保留展开状态和列表焦点。
- **收起分类**：点击分类大标题可收起或展开该分类的整组榜单；收起后标题仍保留，箭头旋转指示状态，展开时补载该分类。
- **切换地区**：X 趋势与 App Store 卡片底部有地区选择器，切换后优先读取该地区缓存，缺失或过期时再请求；卡片副标题同步更新，App Store 官方入口随地区切换。
- **刷新**：顶部刷新按钮加载并刷新全部榜单；每张卡片右上角按钮仅刷新当前榜单，并沿用该卡片当前选择的地区；自动刷新只刷新已加载卡片，刷新使用并发队列且不会重复启动，失败时如有缓存则继续展示缓存数据。
- **主题与免责声明**：右上角按钮切换深浅主题；页脚按钮打开原生对话框，支持 Esc、点击遮罩、关闭按钮和「我知道了」关闭。

</details>

<a id="tech"></a>
## 技术说明

- **技术栈**：HTML5 / CSS3 / JavaScript（ES2020+），无第三方运行时依赖。
- **数据请求**：`fetch` + `AbortController` 超时控制，新的地区切换会取消旧请求；首屏附近的卡片在视口加载，滚动、分类、搜索或手动刷新时补载；隐藏分类卡片不会被提前请求，最多 6 路并发。
- **缓存与渲染**：按 `id + region` 使用 `sessionStorage` 缓存；先渲染缓存再后台刷新。列表默认只生成前 10 条 DOM，展开时补全，收起或清空搜索后回收。卡片使用 `content-visibility: auto` 跳过视口外渲染。
- **安全策略**：`index.html` 通过 meta CSP 限制脚本、样式、字体与 fetch 目标；字体仅允许本站；并设置 `strict-origin-when-cross-origin`。远程文本统一 HTML 转义，外部链接仅允许 http/https，并拒绝带用户名或密码的 URL。
- **主题系统**：CSS 自定义属性 + `data-theme`，内联脚本在样式加载前确定主题；支持 View Transition 交叉淡化，不支持时降级为瞬时切换。
- **分类与地区**：分类标题按钮使用 `aria-expanded` / `aria-controls`；分类筛选使用 `role="group"` + `aria-pressed`；地区选择器会同步卡片副标题和官方入口。
- **本地字体**：ZCOOL QingKe HuangYou 与 JetBrains Mono 均为本地自托管。ZCOOL 仅包含当前展示文案所需的字符子集（约 41KB），JetBrains Mono 使用 latin 400/700（各约 21KB）；新增展示文案后运行 `node scripts/build-fonts.mjs`。
- **可访问性**：语义化标签、键盘焦点样式、移动端主要触控目标 44px、浅色小字对比度达到 4.5:1，并在 `prefers-reduced-motion` 下关闭动效和平滑滚动。

**浏览器兼容性**：建议使用较新的 Chrome、Edge、Safari 或 Firefox。页面使用了 `color-mix()`、`content-visibility`、`:has()`、View Transitions、`dvh`、`backdrop-filter`、`@starting-style` 等现代特性，旧版浏览器可能缺少部分视觉效果，但核心功能不受影响。

<a id="limits"></a>
## 已知限制

- 主题切换的交叉淡化动画依赖 View Transitions API；不支持的浏览器会直接切换颜色。
- 搜索为客户端过滤，只覆盖已加载的榜单标题；进入搜索会补载未加载榜单，结果会随加载逐步出现。搜索会跳过处于错误状态的榜单，可在错误卡片内手动重试。
- 展示字体使用按当前静态文案生成的字符子集；新增平台名称、分类名或展示文案后需运行 `node scripts/build-fonts.mjs`，否则新字符会回退到系统字体。
- 首屏只加载视口附近的卡片，其余卡片在滚动、切换分类、展开分类、搜索或手动全部刷新时加载；顶部滚动条只包含已加载榜单的头条。
- 自动刷新只刷新已加载卡片；未加载卡片会在首次进入视口时获取最新数据。
- 视口外卡片的高度由 `contain-intrinsic-size` 估值，首次滚动到尚未渲染的区域时可能出现轻微的高度校正。
- 榜单更新依赖第三方接口，无法保证实时性或长期可用性。Codelife 是第三方聚合，实测其微博热榜快照可能滞后官方；微博官方接口需要特殊请求头和 CORS 代理，纯静态页面无法直接接入。
- 会话缓存仅在当前标签页有效；数据超过 5 分钟后会在后台刷新，刷新失败时保留旧数据并标注日期。
- GitHub Pages 会缓存 CSS / JS；更新静态资源后请同步修改 `index.html` 中的 `?v=` 版本参数。
- 豆瓣、X 趋势、App Store、海外媒体 RSS、新浪热榜、澎湃新闻与中国新闻网依赖公共 CORS 代理；代理或上游不可用时，对应卡片会显示加载失败。
- X 趋势来自 getdaytrends 的全球及国家/地区页面，不展示热度值；getdaytrends 未收录中国大陆等部分地区。
- App Store 榜单来自 Apple iTunes RSS，地区名称与条目内容由 Apple 返回。
- 海外媒体卡片来自各媒体官方 RSS，内容多为英文，更新频率与排序由来源决定。
- 站点运行时长基于固定起始时间计算，不代表服务器监控数据。

## 反馈

欢迎通过 [GitHub Issue](https://github.com/yiktt/hotboard/issues) 反馈问题或建议；提交前请附上复现步骤、浏览器信息和必要的截图。

## 免责声明

本项目为**非商业性的个人学习与技术交流项目**。榜单数据来自各平台公开接口或公开页面，仅作聚合与展示，不设榜单数据库，也不将原始内容用于商业用途。

榜单排序、热度值及内容均由来源平台提供，可能因接口调整、网络波动或平台自身原因出现延迟、缺漏或错误，请以各平台官方发布为准。本站不对数据的完整性、准确性和及时性作出保证，榜单内容也不代表本站观点。

页面中出现的平台名称、商标、标识及相关内容的版权均归各自权利人所有，本站与各平台无隶属或合作关系。如果权利人认为本站展示方式侵犯其合法权益，请通过[项目仓库 Issue](https://github.com/yiktt/hotboard/issues) 联系维护者，核实后将及时删除相关内容或停止展示。

在法律允许的范围内，本站不对因使用或依赖本页面信息而产生的任何直接或间接损失承担责任。页面中的外部链接指向第三方网站，其内容、服务与安全性由该网站负责。

## 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源。
