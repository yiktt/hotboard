import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn, spawnSync } from 'node:child_process';

const root = resolve('.');
const GIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
let testResult = null;
let releaseHold = () => {};
const holdGate = new Promise(resolvePromise => { releaseHold = resolvePromise; });
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

function findChrome() {
  const candidates = [
    process.env.CHROME_BIN,
    process.platform === 'win32' ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : null,
    'google-chrome',
    'google-chrome-stable',
    'chromium',
    'chromium-browser',
  ].filter(Boolean);
  for (const candidate of candidates) {
    const absolute = candidate.includes('/') || candidate.includes('\\');
    if (absolute) {
      if (existsSync(candidate)) return candidate;
      continue;
    }
    if (process.platform === 'win32') continue;
    const probe = spawnSync('which', [candidate], { timeout: 5000, stdio: 'ignore' });
    if (!probe.error && probe.status === 0) return candidate;
  }
  throw new Error('Chrome not found; set CHROME_BIN');
}

function startServer() {
  const server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
      if (pathname === '/hold') {
        await holdGate;
        response.writeHead(200, { 'Content-Type': 'image/gif', 'Cache-Control': 'no-store' });
        response.end(GIF);
        return;
      }
      if (pathname === '/done' && request.method === 'POST') {
        let body = '';
        for await (const chunk of request) body += chunk;
        if (!testResult) {
          testResult = body;
          releaseHold();
        }
        response.writeHead(204);
        response.end();
        return;
      }
      const file = resolve(join(root, pathname === '/' ? 'index.html' : pathname));
      if (!file.startsWith(root)) {
        response.writeHead(403);
        response.end();
        return;
      }
      const data = await readFile(file);
      response.writeHead(200, {
        'Content-Type': MIME[extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      response.end(data);
    } catch {
      response.writeHead(404);
      response.end('not found');
    }
  });
  return new Promise((resolvePromise, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => resolvePromise(server));
  });
}

function runChrome(chrome, url) {
  const profile = mkdtempSync(join(tmpdir(), 'hotboard-chrome-'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-sync',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-default-apps',
    '--window-size=1700,1100',
    '--virtual-time-budget=35000',
    '--run-all-compositor-stages-before-draw',
    `--user-data-dir=${profile}`,
    '--dump-dom',
    url,
  ];
  return new Promise((resolvePromise, reject) => {
    const child = spawn(chrome, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error('Chrome test timed out'));
    }, 70000);
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', code => {
      clearTimeout(timer);
      try { rmSync(profile, { recursive: true, force: true }); } catch {}
      resolvePromise({ code, stdout, stderr });
    });
  });
}

let server;
try {
  server = await startServer();
  const port = server.address().port;
  const chrome = findChrome();
  const result = await runChrome(chrome, `http://127.0.0.1:${port}/tests/runtime.html`);
  const match = result.stdout.match(/<title>RESULT:([A-Za-z0-9+/=]+)<\/title>/);
  const encoded = testResult || match?.[1];
  if (!encoded) {
    console.error('No runnable result from browser tests.');
    console.error(result.stderr.slice(0, 2000));
    console.error(result.stdout.slice(0, 1000));
    process.exitCode = 1;
  } else {
    const summary = JSON.parse(Buffer.from(encoded, 'base64').toString('utf8'));
    for (const item of summary.results) {
      const detail = item.ok ? (item.info && Object.keys(item.info).length ? ' ' + JSON.stringify(item.info) : '') : ' ' + item.error;
      console.log(`${item.ok ? 'PASS' : 'FAIL'} ${item.name}${detail}`);
    }
    console.log(`runtime: ${summary.results.filter(item => item.ok).length} passed, ${summary.results.filter(item => !item.ok).length} failed`);
    if (!summary.ok || result.code !== 0) process.exitCode = 1;
  }
} catch (error) {
  console.error(error.stack || String(error));
  process.exitCode = 1;
} finally {
  server?.close();
}
