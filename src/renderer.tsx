import { jsxRenderer } from 'hono/jsx-renderer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href="/static/css/style.css" rel="stylesheet" />
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
        <div class="container">
          <Header />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
})
