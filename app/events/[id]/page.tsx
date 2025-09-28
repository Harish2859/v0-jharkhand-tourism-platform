import Link from "next/link"
import { getEventById } from "@/lib/data/events"

export default function EventDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <main className="container mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Event not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn&apos;t find details for this event.</p>
        <div className="mt-6">
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <p className="text-sm text-muted-foreground">
          {new Date(event.dateISO).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {event.startTime} – {event.endTime}
        </p>
        <h1 className="text-pretty text-3xl font-semibold">{event.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{event.location}</p>
      </header>

      <img
        src={event.image || "/placeholder.svg"}
        alt={`Hero for ${event.title}`}
        className="mb-6 h-64 w-full rounded-md object-cover"
      />

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <p>{event.description}</p>
      </article>

      <footer className="mt-8">
        <Link href={`/places/${event.placeSlug}`} className="text-primary hover:underline">
          Back to place
        </Link>
      </footer>
    </main>
  )
}
