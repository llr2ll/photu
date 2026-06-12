import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/image-editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products/image-editor"!</div>
}
