import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(2).max(100),
  amount: z.number().int().positive().min(0)
})

type Expense = z.infer<typeof expenseSchema>

const createExpenseSchema = expenseSchema.omit({id: true})

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



export const expensesRoute = new Hono()
  .get("/", c => {
    return c.json({ "expenses": fakeExpenses })
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    const expense = fakeExpenses.find(exp => exp.id === id)
    if (!expense) {
      return c.json({ message: "Expense not found", ok: false }, 404)
    }
    return c.json(expense)
  })
  .post("/", zValidator("json", createExpenseSchema), async (c) => {
    const data = c.req.valid("json")
    const expense = createExpenseSchema.parse(data)
    console.log(`expense.title: ${expense.title}`)
    console.log(`expense.amount: ${expense.amount}`)
    fakeExpenses.push({...expense, id: fakeExpenses.length + 1})
    c.status(201)
    return c.json(expense)
  })
  .put("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"))
    const expense = fakeExpenses.find(exp => exp.id === id)
    if (!expense) {
      return c.json({ message: "Expense not found", ok: false }, 404)
    }
    const data = await c.req.json()
    const updatedExpense = createExpenseSchema.parse(data)
    fakeExpenses[id - 1] = { id, ...updatedExpense }
    console.log(`Expenses - Update: ${JSON.stringify(fakeExpenses[id])}`)
    return c.json(fakeExpenses[id - 1])
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    const expenseIndex = fakeExpenses.findIndex(exp => exp.id === id)
    if (expenseIndex === -1) {
      console.log(`Expenses - Delete: Expense with ID: ${id} not Found!`)
      return c.json({ message: "Expense not found", ok: false }, 404)
    }
    const deletedExpense = fakeExpenses.splice(expenseIndex, 1)[0]
    console.log(`Expenses - Delete: Expense with ID: ${id} DELETED!`)
    return c.json({ data: deletedExpense, message: "Expense deleted", ok: true })
  })