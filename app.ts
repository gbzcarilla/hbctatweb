import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expensesRoute } from './routes/expenses'

const app = new Hono()

// Define your routes here
app.use("*", logger())
app.get("/test", c => {
  return c.json({ "message": "tester" })
})
app.route('/api/expenses', expensesRoute)

export default app