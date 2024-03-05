import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import manifest from '__STATIC_CONTENT_MANIFEST'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './', manifest }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico', manifest }))
app.get('/', renderer({}))
export default app
