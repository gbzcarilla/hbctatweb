import { Hono } from 'hono'
import { z } from 'zod'

type Expense = {
  id: number,
  title: string,
  amount: number
}

const fakeExpenses: Expense[] = [
  { id: 1, title: 'Groceries', amount: 50 },
  { id: 2, title: 'Utilities', amount: 250 },
  { id: 3, title: 'Rent', amount: 1260 },
  { id: 4, title: 'Internet', amount: 60 },
  { id: 5, title: 'Transportation', amount: 80 },
  { id: 6, title: 'Dining Out', amount: 120 },
  { id: 7, title: 'Gym Membership', amount: 45 },
  { id: 8, title: 'Insurance', amount: 200 },
  { id: 9, title: 'Streaming Services', amount: 30 },
  { id: 10, title: 'Medical', amount: 95 },
]

const createExpenseSchema = z.object({
  title: z.string().min(2).max(100),
  amount: z.number().int().positive().min(0)
})

export const expensesRoute = new Hono()
  .get("/", c => {
    return c.json({ "expenses": fakeExpenses })
  })
  .post("/", async (c) => {
    const data = await c.req.json()
    const expense = createExpenseSchema.parse(data)
    console.log(expense.amount)
    console.log({expense})

    return c.json(expense)
  })