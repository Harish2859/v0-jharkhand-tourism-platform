import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const events = [
    {
      id: "sarhul",
      title: "Sarhul Festival",
      date: "April 10",
      location: "Ranchi",
      blurb: "Spring festival celebrating nature and Sal trees.",
    },
    {
      id: "karma",
      title: "Karma Puja",
      date: "September 21",
      location: "Across Jharkhand",
      blurb: "Harvest and community celebration with dance and music.",
    },
    {
      id: "tusu",
      title: "Tusu Parab",
      date: "January 14",
      location: "Chotanagpur Plateau",
      blurb: "Folk festival during Makar Sankranti.",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Live Events & Festivals</h1>
          <p className="text-muted-foreground">Explore upcoming cultural events across Jharkhand.</p>
        </div>
        <Button asChild>
          <Link href="/trip">Plan a trip</Link>
        </Button>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {events.map((e) => (
          <Card key={e.id} className="bg-card">
            <CardHeader>
              <CardTitle className="text-pretty">{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="font-medium">
                {e.date} — {e.location}
              </p>
              <p className="mt-2 text-muted-foreground">{e.blurb}</p>
              <div className="mt-4">
                <Button asChild size="sm" variant="secondary">
                  <Link href={`/events/${e.id}`}>View details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
