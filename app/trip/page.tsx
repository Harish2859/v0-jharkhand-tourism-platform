import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TripPlannerPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="font-serif text-3xl">My Trip</h1>
        <p className="text-muted-foreground">
          Build your itinerary. Drag-and-drop coming soon. For now, add days and notes.
        </p>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardContent className="p-4">
              <h2 className="font-semibold">Timeline</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="rounded-md border p-3">Day 1 — Ranchi: Hundru Falls, local cuisine</li>
                <li className="rounded-md border p-3">Day 2 — Betla National Park safari</li>
              </ul>
              <Button className="mt-3" variant="secondary">
                Add Day
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold">Map</h2>
              <div className="mt-3 h-48 w-full rounded-md bg-muted grid place-items-center text-sm text-muted-foreground">
                Map placeholder
              </div>
              <Button asChild className="mt-3 w-full">
                <Link href="/routes">Open Route Planner</Link>
              </Button>
              <Button className="mt-3" variant="secondary">
                AI Route Optimizer
              </Button>
              <div className="mt-4 rounded-md bg-muted p-3 text-sm">Estimated Budget: ₹18,500</div>
              <Link href="/trip/download">
                <Button className="mt-3 w-full">Download Trip (offline)</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
