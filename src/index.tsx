import { Hono } from 'hono'
import { html } from 'hono/html'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))

const styles = {
    container: {
        margin: '30px auto',
        maxWidth: '600px',
        textAlign: 'center',
        lineHeight: "1.5",
        fontFamily: "Noto Sans JP",
    },
    h1: {
        fontSize: '2.5rem',
    },
    imageArea: {
        marginTop: "20px",
        textAlign: "center",
    },
    img: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "50%",
        textAlign: "center"
    },
    p: {
        fontSize: '1.5rem',
    },
    li: {
        listStyleType: 'none',
        margin: '10px 0',
    },
    a: {
        color: '#136b9e',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

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

const Content = () => (
    <Layout>
        <div style={styles.container}>
            <h1 style={styles.h1}>Qlitre.Me</h1>
            <div style={styles.imageArea}>
                <img style={styles.img} src="/static/myprof.jpeg" alt="Qlitre" />
            </div>
            <p style={styles.p}>どうも！パイコーチャーハンが好きです。</p>
            <ul>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="https://www.qlitre-dialy.ink/"
                        target="_blank" rel="noopener noreferrer">日記サイト「QLITRE DIALY」</a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="https://qlitre-weblog.com/"
                        target="_blank" rel="noopener noreferrer">プログラミングブログ「Qlitre's Blog」</a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="https://github.com/qlitre"
                        target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="https://atcoder.jp/users/Qlitre"
                        target="_blank" rel="noopener noreferrer">AtCoder</a>
                </li>
                <li style={styles.li}>
                    <a style={styles.a}
                        href="https://twitter.com/home"
                        target="_blank" rel="noopener noreferrer">@kuri_tter</a>
                </li>
            </ul>
        </div>
    </Layout>
)

app.get('/', (c) => {
    return c.html(
        <Content />
    )
})

export default app
