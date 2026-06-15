import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/storymaker-service')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/services/storymaker-service"!</div>
}
