"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Hotel = {
  name: string
  location?: string
  priceFrom?: string
  rating?: number
  imageAlt?: string
  imageUrl?: string
}

export function HotelCard({
  hotel,
  href,
  className,
}: {
  hotel: Hotel
  href?: string
  className?: string
}) {
  const content = (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="relative aspect-[4/3]">
        <Image
          src={
            hotel.imageUrl ||
            "/placeholder.svg?height=300&width=400&query=hotel%20room%20with%20warm%20lighting" ||
            "/placeholder.svg"
          }
          alt={hotel.imageAlt || `${hotel.name} photo`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium text-foreground text-pretty">{hotel.name}</h3>
            {hotel.location ? <p className="text-muted-foreground text-sm">{hotel.location}</p> : null}
          </div>
          {hotel.rating ? (
            <div className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">{hotel.rating.toFixed(1)}★</div>
          ) : null}
        </div>
        {hotel.priceFrom ? (
          <p className="mt-2 text-sm text-muted-foreground">
            From <span className="font-semibold text-foreground">{hotel.priceFrom}</span> /night
          </p>
        ) : null}
      </CardContent>
    </Card>
  )

  return href ? (
    <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
      {content}
    </Link>
  ) : (
    content
  )
}
