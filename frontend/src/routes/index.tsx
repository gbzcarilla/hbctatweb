import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Welcome Home!
      </h3>
    </div>
  )
}