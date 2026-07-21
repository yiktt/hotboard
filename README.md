# 今日热榜 · HotBoard

> 全网热点 · 实时聚合 —— 一个纯静态、零后端、零构建的多平台热搜榜单聚合页。

![榜单数量](https://img.shields.io/badge/榜单平台-28-e8442e)
![分类](https://img.shields.io/badge/分类-5-f59e0b)
![构建](https://img.shields.io/badge/build-none-lightgrey)
![主题](https://img.shields.io/badge/主题-亮色%20%7C%20暗色-blueviolet)
![协议](https://img.shields.io/badge/license-MIT-green)

实时聚合 **微博、知乎、百度、B 站、GitHub、Hacker News、Product Hunt** 等 **28 个平台**的热搜榜单，按「综合热搜 / 科技开发 / 海外视野 / 新闻资讯 / 影音娱乐」五大分类展示，每 5 分钟自动刷新。全部数据抓取自第三方公开接口，页面为纯前端静态文件，打开即用。

---

## ✨ 功能特性

- **28 个榜单 · 5 大分类**：覆盖综合、科技、海外、新闻、娱乐，页签一键筛选。
- **海外视野**：收录 Product Hunt、App Store、Hacker News、dev.to 等**中国大陆网络环境可直连访问**的境外平台榜单。
- **实时滚动播报**：顶部跑马灯汇聚各榜头条，悬停暂停。
- **每 5 分钟自动刷新**：倒计时可视化，切回标签页自动补刷，支持手动一键刷新与单榜刷新。
- **全局搜索**：跨全部榜单实时过滤关键词，按 <kbd>/</kbd> 快速聚焦搜索框。
- **深浅双主题**：跟随系统 + 手动切换，偏好本地记忆，切换无闪烁。
- **移动端适配**：三断点响应式布局，安全区适配，触屏体验优化。
- **一键到顶 / 到底**：智能显隐的悬浮按钮，平滑滚动。
- **站点状态**：页脚实时显示「网站运行时长」与「本次页面加载耗时」。
- **榜单直达**：点击任意榜单名称即可跳转对应平台官方热榜页。
- **纯静态零依赖**：原生 HTML / CSS / JavaScript，无框架、无构建步骤、无后端。

---

## 🚀 在线预览

将本仓库部署到 GitHub Pages 或任意静态托管即可访问（见下方部署说明）。

> 部署后在此处替换为你的在线地址与页面截图。

---

## 📦 项目结构

```
hotboard/
├── index.html   # 页面结构（建议由 hot.html 重命名，便于 GitHub Pages 识别）
├── hot.css      # 全部样式（主题变量 / 布局 / 响应式）
├── hot.js       # 全部逻辑（数据抓取 / 渲染 / 交互 / 统计）
└── README.md    # 项目说明
```

> 三个文件通过**相对路径**关联，部署时请务必保持在**同一目录**下。

---

## 🗂 榜单来源

| 分类 | 收录平台 |
| :--- | :--- |
| 综合热搜 | 微博热搜、知乎热榜、百度热点、头条热榜、微信热文、什么值得买、百度贴吧 |
| 科技开发 | GitHub 趋势、掘金、少数派、IT之家、36氪、CSDN、站酷 |
| 海外视野 | Product Hunt、App Store、Hacker News、dev.to |
| 新闻资讯 | 腾讯新闻·热问、新浪财经、第一财经、雪球 |
| 影音娱乐 | 哔哩哔哩、抖音热点、豆瓣电影、虎扑步行街、微信读书、懂球帝 |

**数据接口说明**

| 接口 | 角色 | 说明 |
| :--- | :--- | :--- |
| [Codelife 开放接口](https://api.codelife.cc) | 主源 | 提供绝大多数境内榜单，含热度值，CORS 开放 |
| [orz.ai DailyNews](https://orz.ai) | 备源 | 主源失败时自动降级（无热度值） |
| [HN Algolia API](https://hn.algolia.com) | 海外源 | Hacker News 首页榜单，CORS 开放 |
| [dev.to API](https://dev.to) | 海外源 | dev.to 本周热门文章，CORS 开放 |

---

## ⚡ 快速开始

**方式一：本地直接打开**

将三个文件放在同一目录，双击 `hot.html` 即可在浏览器中运行。

**方式二：本地静态服务器**

```bash
# 在项目目录下执行
python -m http.server 8080
# 访问 http://localhost:8080/hot.html
```

**方式三：部署到 GitHub Pages**

1. 将本仓库推送到 GitHub。
2. 进入仓库 **Settings → Pages**。
3. Source 选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 若入口文件名为 `hot.html`，访问地址为 `https://<用户名>.github.io/<仓库名>/hot.html`；也可将其重命名为 `index.html` 后直接访问根路径。

> 同样可部署到 Vercel、Netlify、Cloudflare Pages 等任意静态托管服务。

---

## 🛠 技术栈

- **原生三件套**：HTML5 / CSS3 / JavaScript（ES2020+），无框架、无构建。
- **数据请求**：`fetch` + `AbortController` 超时控制，主备源自动降级。
- **渲染优化**：`IntersectionObserver` 滚动浮现、骨架屏占位、错误重试。
- **性能统计**：Performance Navigation Timing API 实测页面加载耗时。
- **主题系统**：CSS 自定义属性 + `data-theme`，`<head>` 内联脚本预渲染防闪烁。
- **字体**：ZCOOL QingKe HuangYou / Noto Sans SC / JetBrains Mono（fontsource · jsDelivr CDN）。

---

## ⚙️ 自定义配置

所有配置集中在 `hot.js` 顶部，按需修改即可。

**新增 / 调整榜单**：编辑 `SOURCES` 数组，每个榜单字段含义如下：

| 字段 | 必填 | 说明 |
| :--- | :---: | :--- |
| `id` | ✔ | 唯一标识 |
| `cat` | ✔ | 所属分类（需在 `CATS` 中存在） |
| `name` / `char` / `color` | ✔ | 榜单名称 / 徽标字符 / 主题色 |
| `sub` | ✔ | 副标题描述 |
| `cid` | △ | Codelife 榜单 ID（走主源时填写） |
| `orz` | △ | orz.ai 平台名（需要备源降级时填写） |
| `api` | △ | 自定义官方接口标识（如 `hn` / `devto`） |
| `nohot` | △ | 为 `true` 时不显示热度值 |
| `home` | ✔ | 官方热榜页地址 |

**新增分类**：在 `CATS` 数组追加 `{ id, name, en }` 即可，页签与板块自动生成。

**其它常用项**：

- `REFRESH_MS`：自动刷新间隔（默认 `5 * 60 * 1000`，即 5 分钟）。
- `SHOW`：每张卡片默认展示的条数（默认 10，超出可展开）。
- `SITE_BIRTH`：站点起始时间，用于计算页脚运行时长。

---

## ⚖️ 免责声明

本项目为**个人学习交流**用途。所有榜单内容均实时抓取自第三方公开接口，本站**不存储、不修改、不转载**任何榜单内容，其著作权及相关权益归原平台所有；页面中出现的各平台名称、商标及标识归各自权利人所有。榜单数据可能存在延迟或误差，本站不作任何保证，亦不对因使用本页面信息产生的任何后果承担责任。如相关内容侵犯了您的合法权益，请联系本站删除。

---

## 📄 许可证

本项目基于 [MIT License](https://opensource.org/licenses/MIT) 开源。

---

<p align="center">今日热榜 · 风从远方来 · 本页面由 AI 辅助生成</p>
