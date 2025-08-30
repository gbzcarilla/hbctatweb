import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import App from '../App.tsx'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card.tsx'

import { api } from '@/lib/api'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

type Expense = {
  id: number
  title: string
  amount: number
  // Add other fields if needed
}

async function fetchAllExpenses() {
  const response = await fetch('/api/expenses')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
// async function fetchTotalSpent2() {
//   const response = await fetch('/api/expenses/total-spent')
//   if (!response.ok) {
//     throw new Error('Network response was not ok')
//   }
//   return response.json()
// }
async function fetchTotalSpent() { 
  const response = await api.expenses['total-spent'].$get()
  const data = await response.json()
  if (!data) {
    throw new Error('Network response was not ok')
  }
  return data
}

function RouteComponent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchAllExpenses,
  })

  const { isPending: isTotalSpentPending, data: dataTotalSpent, isError: isTotalSpentError, error: totalSpentError } = useQuery({
    queryKey: ['expenses', 'total'],
    queryFn: fetchTotalSpent,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (isTotalSpentPending) {
    return <span>Loading totalSpent...</span>
  }

  if (isTotalSpentError) {
    return <span>Error: {totalSpentError.message}</span>
  }

  // const formattedTotalSpent = new Intl.NumberFormat('en-PH', {
  //   style: 'currency',
  //   currency: 'PHP',
  // }).format(dataTotalSpent?.totalSpent || 0);

  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  })

  console.log(data)
  console.log(dataTotalSpent)

  return (
    <div className="p-2">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Dashboard
      </h3>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center md:text-left">
        This text changes size and alignment based on screen width.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <button className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg mb-4 md:mb-0">
          Button 1
        </button>
        <button className="w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-lg">
          Button 2
        </button>
      </div>
      <hr />
      now
      <ul>
        {data?.expenses && Array.isArray(data?.expenses) && data?.expenses.map((expense: Expense) => (
          <li key={expense.id}>{expense.title} - {formatter.format(expense.amount || 0.00)}</li>
        ))}
      </ul>
      <hr />
        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
            {/* <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Total Amount:</h2>
                <p id="moneyAmount" className="text-4xl font-extrabold text-indigo-600"></p>
              </div>
            </div> */}
            <CardDescription>...</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total amount spent: {formatter.format(dataTotalSpent?.totalSpent || 0)}</p>
          </CardContent>
          <CardFooter>
            <p>card footer ...</p>
          </CardFooter>
        </Card>
      <hr />
      <App />
    </div>
  )
}
