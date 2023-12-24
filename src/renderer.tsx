import { html } from 'hono/html'
import { MiddlewareHandler } from 'hono'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

export type SiteData = {}

export const body = () => {
    return (
        <div><p>Hello, It's Qlitre's site like portfolio.</p>
            <h2>About</h2>
            <ul>
                <li>Is sunday programmer</li>
                <li>Working in public limited company</li>
                <li>Love with <code>柴田聡子</code> and <code>paiko fried rice</code></li>
            </ul>
            <h2>Link</h2>
            <ul>
                <li><a href="https://qlitre-dialy.ink/">日記サイト(Hono)</a></li>
                <li><a href="https://qlitre-weblog.com/">プログラミングブログ(Nuxt.js)</a></li>
                <li><a href="https://github.com/qlitre">GitHub</a></li>
                <li><a href="https://atcoder.jp/users/Qlitre">AtCoder</a></li>
                <li><a href="https://twitter.com/kuri_tter">X / @kuri_tter</a></li>
            </ul>
        </div>
    )
}

export const renderer = (data: SiteData): MiddlewareHandler => {
    return async (c) => {
        const html = Layout(body(), data)
        return c.html(html)
    }
}

export const Layout = (body: JSX.Element, data: SiteData) => {
    const App = () => {
        return (
            <div class="container">
                <Header />
                <div>
                    {body}
                </div>
                <Footer />
            </div>
        )
    }

    return html`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Qlitre.Me</title>
            <link rel="stylesheet" href="/static/css/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Qlitre's Portfolio" />
            <meta name="author" content="Qlitre" />
            <meta property="og:title" content="Qlitre.Me" />
            <meta property="og:description" content="Qlitre's site,Like Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://qlitre.me/" />
            <meta property="og:image" content="https://qlitre.me/static/image/myprof.jpeg" />
            <meta property="og:site_name" content="Qlitre.Me" />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@kuri_tter" />
            <meta name="twitter:creator" content="@kuri_tter" />
        </head>
        <body>
        ${(<App />)}
        </body>
    </html>`
}