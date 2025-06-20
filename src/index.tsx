import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();
app.use(renderer);

const Body = () => (
  <div>
    <p>Hello, It's Qlitre's site like portfolio.</p>
    <p>This site is powered by Hono.</p>
    <h2>About</h2>
    <ul>
      <li>Is sunday programmer</li>
      <li>Working in public limited company</li>
      <li>
        Love with <code>柴田聡子</code> and <code>paiko fried rice</code>
      </li>
    </ul>
    <h2>Link</h2>
    <ul>
      <li>
        <a
          href="https://qlitre-dialy.ink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          日記サイト(HonoX)
        </a>
      </li>
      <li>
        <a
          href="https://qlitre-weblog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          プログラミングブログ(Nuxt.js)
        </a>
      </li>
      <li>
        <a
          href="https://github.com/qlitre"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://atcoder.jp/users/Qlitre"
          target="_blank"
          rel="noopener noreferrer"
        >
          AtCoder
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/kuri_tter"
          target="_blank"
          rel="noopener noreferrer"
        >
          X / @kuri_tter
        </a>
      </li>
      <li>
        <a
          href="https://home-loan-calculator.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          住宅ローン簡易計算サイト
        </a>
      </li>      
      <li>
        <a
          href="https://recipes.qlitre.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          レシピ記録（HonoX mdx）
        </a>
      </li>
      <li>
        <a
          href="https://video-keeper-x.qlitre.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xライブ動画検索
        </a>
      </li>

    </ul>
  </div>
);

app.get("/", (c) => {
  return c.render(<Body></Body>);
});

export default app;
