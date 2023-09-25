import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

const styles = {
    container: {
        margin: '30px auto',
        maxWidth: '600px',
        textAlign: 'center',
    },
    li: {
        listStyleType: 'none',
    }
};

const Layout = (props: { children?: any }) => html`<!DOCTYPE html>
  <html>
    <body>
      ${props.children}
    </body>
  </html>`

const Content = () => (
    <Layout>
        <div style={styles.container}>
            <h1>Qlitre.Me</h1>
            <p>どうも！パイコーチャーハンが好きです。</p>
            <ul>
                <li style={styles.li}>
                    <a href="https://www.qlitre-dialy.ink/">日記サイト「QLITRE DIALY」</a>
                </li>
                <li style={styles.li}>
                    <a href="https://qlitre-weblog.com/">プログラミングブログ「Qlitre's Blog」</a>
                </li>
                <li style={styles.li}>
                    <a href="https://github.com/qlitre">GitHub</a>
                </li>
                <li style={styles.li}>
                    <a href="https://atcoder.jp/users/Qlitre">AtCoder</a>
                </li>
                <li style={styles.li}>
                    <a href="https://twitter.com/home">@kuri_tter</a>
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
