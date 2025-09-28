import Link from "next/link"
import { getEventsForPlace } from "@/lib/data/events"
import { cn } from "@/lib/utils"

type Props = {
  placeSlug?: string
  limit?: number
  className?: string
}

function formatDateParts(dateISO: string) {
  const d = new Date(dateISO)
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase()
  const day = d.getDate().toString().padStart(2, "0")
  return { month, day }
}

export function PlaceEventsCard({ placeSlug, limit = 3, className }: Props) {
  const events = getEventsForPlace(placeSlug).slice(0, limit)
  if (!events.length) return null

  return (
    <section className={cn("w-full", className)}>
      <header className="mb-4">
        <h2 className="text-pretty text-2xl font-semibold">Live Events & Festivals</h2>
        <p className="text-sm text-muted-foreground">
          A dynamic list of cultural events, festivals, and local melas in this area.
        </p>
      </header>

      <div className="flex flex-col divide-y divide-border">
        {events.map((e) => {
          const { month, day } = formatDateParts(e.dateISO)
          return (
            <article key={e.id} className="py-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
                {/* Date block */}
                <div className="flex w-full items-center md:w-20">
                  <div className="mx-auto flex flex-col items-center justify-center rounded-md border border-border px-3 py-2">
                    <span className="text-xs tracking-wide text-muted-foreground">{month}</span>
                    <span className="text-2xl font-semibold">{day}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-[420px]">
                  <img
                    src={e.image || "/placeholder.svg"}
                    alt={`Image for ${e.title}`}
                    className="h-40 w-full rounded-md object-cover md:h-full"
                  />
                </div>

                {/* Details */}
                <div className="flex w-full flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      <p className="leading-6">{e.location}</p>
                      <p className="leading-6">
                        {e.startTime} — {e.endTime}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-foreground/80">{e.excerpt}</p>
                  </div>

                  <div className="mt-3">
                    <Link
                      href={`/events/${e.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      aria-label={`View details for ${e.title}`}
                    >
                      View Event Details
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PlaceEventsCard
