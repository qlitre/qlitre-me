import { styles } from './styles'
import { html } from 'hono/html'

const Layout = (props: { children?: any }) => html`<!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8" />
        <title>Qlitre.Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Qlitre's Portfolio" />
        <meta name="author" content="Qlitre" />
        <meta name="theme-color" content="#136b9e" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kuri_tter" />
        <meta property="og:title" content="Qlitre.Me" />
        <meta property="og:description" content="Qlitre's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qlitre.me/" />
        <meta property="og:image" content="https://qlitre.me/static/myprof.jpeg" />
        <meta property="og:site_name" content="Qlitre.Me" />
        <meta property="og:locale" content="ja_JP" />
    </head>
    <body>
      ${props.children}
    </body>
  </html>`


const links = [
    ["日記サイト「QLITRE DIALY」", "https://www.qlitre-dialy.ink/"],
    ["プログラミングブログ「Qlitre's Blog」", "https://qlitre-weblog.com/"],
    ["GitHub", "https://github.com/qlitre"],
    ["AtCoder", "https://atcoder.jp/users/Qlitre"],
    ["@kuri_tter", "https://twitter.com/home"],
]

export const Content = () => (
    <Layout>
        <div style={styles.container}>
            <h1 style={styles.h1}>Qlitre.Me</h1>
            <div style={styles.imageArea}>
                <img style={styles.img} src="/static/myprof.jpeg" alt="Qlitre" />
            </div>
            <p style={styles.p}>どうも！パイコーチャーハンが好きです。</p>
            <ul>
                {links.map(link => (
                    <li style={styles.li}>
                        <a style={styles.a}
                            href={link[1]}
                            target="_blank" rel="noopener noreferrer">{link[0]}</a>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
)