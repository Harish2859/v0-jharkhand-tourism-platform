import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

type Props = {
  title: string
  location: string
  category: string
  imgQuery: string
  rating?: number
  href?: string
}

export function DestinationCard({ title, location, category, imgQuery, rating = 4.7, href }: Props) {
  const content = (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <img
        alt={`${title} photo`}
        src={`/.jpg?key=5qvc7&height=240&width=400&query=${encodeURIComponent(imgQuery)}`}
        className="h-48 w-full object-cover"
      />
      <CardContent className="p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2 py-0.5">{category}</span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" /> {rating.toFixed(1)}
          </span>
        </div>
        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{location}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-md bg-muted px-2 py-1">Crowd: Low</div>
          <div className="rounded-md bg-muted px-2 py-1">Weather: 28°C</div>
        </div>
      </CardContent>
    </Card>
  )

  return href ? (
    <Link
      href={href}
      aria-label={`View details for ${title}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg"
    >
      {content}
    </Link>
  ) : (
    content
  )
}
