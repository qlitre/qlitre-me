import { html, raw } from 'hono/html'
import { getContentFromKVAsset } from 'hono/utils/cloudflare'
import { getFilePath } from 'hono/utils/filepath'
import { bufferToString } from 'hono/utils/buffer'
import { marked } from 'marked'
import { MiddlewareHandler } from 'hono'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

export type SiteData = {}
// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'

export const renderer = (filename: string, data: SiteData): MiddlewareHandler => {
    return async (c, next) => {
        const path = getFilePath({
            filename: filename,
            root: './contents',
        })
        const content = await getContentFromKVAsset(path!, {
            namespace: c.env.__STATIC_CONTENT,
            manifest: manifest,
        })
        if (content) {
            const text = bufferToString(content)
            const body = marked(text)
            const html = Layout(body, data)
            return c.html(html)
        }

        await next()
    }
}

export const Layout = (body: string, data: SiteData) => {
    const App = () => {
        return (
            <div class="container">
                <Header />
                <div>
                    {raw(body)}
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
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@kuri_tter" />
            <meta name="twitter:creator" content="@kuri_tter" />
        </head>
        <body>
        ${(<App />)}
        </body>
    </html>`
}