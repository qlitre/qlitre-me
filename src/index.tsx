import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

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
    <body>
      ${props.children}
    </body>
  </html>`

const Content = () => (
    <Layout>
        <div style={styles.container}>
            <h1 style={styles.h1}>Qlitre.Me</h1>
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
