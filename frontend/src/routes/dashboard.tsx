import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import App from '../App.tsx'

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

function RouteComponent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchAllExpenses,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log(data)

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
          <li key={expense.id}>{expense.title} - {expense.amount}</li>
        ))}
      </ul>
      <hr />
      <App />
    </div>
  )
}
