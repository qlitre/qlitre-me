import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();
app.use(renderer);
const links = [
  { url: "https://qlitre-dialy.ink/", desc: "日記サイト(HonoX)" },
  { url: "https://qlitre-weblog.com/", desc: "プログラミングブログ(Nuxt.js)" },
  { url: "https://atcoder.jp/users/Qlitre", desc: "AtCoder" },
  { url: "https://twitter.com/kuri_tter", desc: "X / @kuri_tter" },
  {
    url: "https://home-loan-calculator.pages.dev/",
    desc: "住宅ローン簡易計算サイト",
  },
  {
    url: "https://recipes.qlitre.workers.dev/",
    desc: " レシピ記録（HonoX mdx）",
  },
  { url: "https://meshi-log.info/", desc: "行った飯屋の記録" },
];

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
      {links.map((link) => (
        <li>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.desc}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

app.get("/", (c) => {
  return c.render(<Body></Body>);
});

export default app;
