import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { Content } from './content'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', (c) => {
    return c.html(
        <Content />
    )
})

export default app
