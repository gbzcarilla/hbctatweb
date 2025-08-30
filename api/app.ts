import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'
import { expensesRoute } from './routes/expenses'
// import { cors } from 'hono/cors'

const app = new Hono()

// Define your routes here
app.use("*", logger())
// app.use(
//   cors({
//     origin: ['http://localhost:5173', 'https://your-frontend.com'], // Allowed origins
//     allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
//     credentials: true, // Allow sending credentials (cookies, auth headers)
//   })
// )

// app.get("/", c => {
//   return c.json({ "message": "Welcome to the API!" })
// })
// app.get("/test", c => {
//   return c.json({ "message": "tester" })
// })

const apiRoutes = app.basePath("/api").route('/expenses', expensesRoute)

app.use('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes