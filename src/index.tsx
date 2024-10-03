import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono()
app.use('/favicon.ico', serveStatic())
app.use(renderer)

const Body = () => (
  <div>
    <p>Hello, It's Qlitre's site like portfolio.</p>
    <p>This site is powered by Hono.</p>
    <h2>About</h2>
    <ul>
      <li>Is sunday programmer</li>
      <li>Working in public limited company</li>
      <li>Love with <code>柴田聡子</code> and <code>paiko fried rice</code></li>
    </ul>
    <h2>Link</h2>
    <ul>
      <li>
        <a href="https://qlitre-dialy.ink/" target="_blank" rel="noopener noreferrer">
          日記サイト(HonoX)
        </a>
      </li>
      <li>
        <a href="https://qlitre-weblog.com/" target="_blank" rel="noopener noreferrer">
          プログラミングブログ(Nuxt.js)
        </a>
      </li>
      <li>
        <a href="https://github.com/qlitre" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://atcoder.jp/users/Qlitre" target="_blank" rel="noopener noreferrer">
          AtCoder
        </a>
      </li>
      <li>
        <a href="https://twitter.com/kuri_tter" target="_blank" rel="noopener noreferrer">
          X / @kuri_tter
        </a>
      </li>
      <li>
        <a href="https://home-loan-calculator.pages.dev/" target="_blank" rel="noopener noreferrer">
          住宅ローン簡易計算サイト
        </a>
      </li>
      <li>
        <a href='https://green-diary.pages.dev/' target="_blank" rel="noopener noreferrer">
          植物成長記録サイト
        </a>
      </li>
    </ul>
  </div>
);

app.get('/', (c) => {
  return c.render(<Body></Body>)
})

export default app
