import { StickyPowerBar } from "@/components/sticky-power-bar"
import { DestinationCard } from "@/components/destination-card"

export default function ExplorePage() {
  const data = [
    ["Hundru Falls", "Ranchi", "Waterfall"],
    ["Dassam Falls", "Ranchi", "Waterfall"],
    ["Betla National Park", "Palamu", "Park"],
    ["Patratu Valley", "Ramgarh", "Scenic Drive"],
    ["Netarhat", "Latehar", "Hill Station"],
    ["Jagannath Temple", "Ranchi", "Temple"],
  ]

  const toSlug = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")

  return (
    <main>
      <div className="h-48 md:h-64 w-full bg-muted grid place-items-center">
        <h1 className="font-serif text-3xl">Explore Jharkhand</h1>
      </div>
      <StickyPowerBar />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(([title, loc, cat]) => {
            const slug = toSlug(title as string)
            return (
              <DestinationCard
                key={title as string}
                title={title as string}
                location={loc as string}
                category={cat as string}
                imgQuery={`${title} Jharkhand`}
                href={`/places/${slug}`}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
