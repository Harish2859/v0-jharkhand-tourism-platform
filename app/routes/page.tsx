import { RoutePlanner } from "@/components/route-planner"

export default function RoutesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6">
        <h1 className="font-serif text-2xl md:text-3xl text-balance">Routes</h1>
        <p className="text-sm text-muted-foreground">
          Plot driving routes between popular Jharkhand destinations. Uses OpenStreetMap and OSRM.
        </p>
      </header>
      <RoutePlanner />
    </main>
  )
}
