(() => {
  const items = Array.from({ length: 12 }, (_, i) => ({
    title: `Fixture ${i + 1}`,
    url: i === 0 ? 'https://user:pass@example.com/fixture-1' : `https://example.com/fixture-${i + 1}`,
    hot: String((i + 1) * 1000),
  }));

  try { sessionStorage.clear(); } catch (e) {}
  window.__fetches = [];
  window.__errors = [];
  window.addEventListener('error', e => window.__errors.push(String(e.message || e.error || 'error')));
  window.addEventListener('unhandledrejection', e => window.__errors.push('rejection:' + String(e.reason)));

  const headers = type => ({ 'Content-Type': type });
  const json = obj => new Response(JSON.stringify(obj), { status: 200, headers: headers('application/json') });
  const html = text => new Response(text, { status: 200, headers: headers('text/html') });
  const xml = text => new Response(text, { status: 200, headers: headers('application/rss+xml') });
  const text = value => new Response(value, { status: 200, headers: headers('text/plain') });

  function codelife() {
    return { code: 200, data: items.map(it => ({ title: it.title, hotValue: it.hot, link: it.url })) };
  }

  function rss() {
    const entries = items.map(it => `<item><title>${it.title}</title><link>${it.url}</link></item>`).join('');
    return `<?xml version="1.0"?><rss><channel>${entries}</channel></rss>`;
  }

  window.fetch = input => {
    const url = typeof input === 'string' ? input : String(input?.url || '');
    window.__fetches.push(url);

    if (url.includes('cors.redoc.ly')) {
      if (url.includes('movie.douban.com/chart')) {
        const rows = items.map(it => `<div class="item"><a class="nbg" href="${it.url}" title="${it.title}"></a><span class="rating_nums">8.0</span></div>`).join('');
        return Promise.resolve(html(`<div class="article"><h2>豆瓣新片榜</h2>${rows}</div>`));
      }
      if (url.includes('getdaytrends.com')) {
        const rows = items.map((it, i) => `<tr><th class="pos">${i + 1}</th><td class="main"><a>${it.title}</a></td></tr>`).join('');
        return Promise.resolve(html(`<table id="trends">${rows}</table>`));
      }
      if (url.includes('top.news.sina.com.cn')) {
        return Promise.resolve(text(`var all_1_data = ${JSON.stringify({ data: items.map(it => ({ title: it.title, top_num: it.hot, url: it.url })) })};`));
      }
      if (url.includes('m.163.com')) {
        return Promise.resolve(json({ data: { list: items } }));
      }
      if (url.includes('cache.thepaper.cn')) {
        return Promise.resolve(json({ data: { hotNews: items.map((it, i) => ({ name: it.title, link: it.url, contId: i })) } }));
      }
      if (url.includes('itunes.apple.com')) {
        return Promise.resolve(json({ feed: { entry: items.map(it => ({ 'im:name': { label: it.title }, id: { label: it.url } })) } }));
      }
      return Promise.resolve(xml(rss()));
    }

    if (url.includes('api.codelife.cc')) return Promise.resolve(json(codelife()));
    if (url.includes('hn.algolia.com')) {
      return Promise.resolve(json({ hits: items.map((it, i) => ({ title: it.title, points: i, url: it.url, objectID: i })) }));
    }
    if (url.includes('dev.to/api')) {
      return Promise.resolve(json(items.map((it, i) => ({ title: it.title, positive_reactions_count: i, url: it.url, path: '/fixture' }))));
    }
    return Promise.resolve(json(codelife()));
  };
})();
