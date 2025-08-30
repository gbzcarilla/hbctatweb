import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '../index.css'

const queryClient = new QueryClient()


export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4 bg-slate-200 md:bg-green-200 lg:bg-slate-200">
        <QueryClientProvider client={queryClient}>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link> {' '}
          <Link to="/dashboard" className="[&.active]:font-bold">
            Dashboard
          </Link> {' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
        <TanStackRouterDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </div>
    </>
  )
})