import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type RoomType = {
  name: string
  bed: string
  guests: string
  perks: string[]
  price: string
  imageUrl?: string
}

type HotelDetail = {
  slug: string
  name: string
  location: string
  rating: number
  priceFrom: string
  heroUrl?: string
  gallery?: string[]
  about: string
  facilities: string[]
  attractions: string[]
  rooms: RoomType[]
}

function getMockHotel(slug: string): HotelDetail | null {
  // Mock data for preview; replace with real fetch later
  const base: HotelDetail = {
    slug,
    name: "Ohio Boutique Hotel",
    location: "Ranchi, Jharkhand",
    rating: 4.6,
    priceFrom: "₹3,400",
    heroUrl: "/warm-sunlit-boutique-hotel-bedroom.jpg",
    gallery: [
      "/hotel-thumbnail-1.jpg",
      "/hotel-thumbnail-2.jpg",
      "/hotel-thumbnail-3.jpg",
      "/hotel-thumbnail-4.jpg",
    ],
    about:
      "Welcome to the Ohio Boutique Hotel, an intimate retreat offering a harmonious blend of luxury and local charm. Thoughtfully designed rooms, warm hospitality, and convenient access to city highlights make this a perfect base for your Jharkhand journey.",
    facilities: ["Wi‑Fi", "Breakfast", "Parking", "Air Conditioning", "24×7 Front Desk", "Laundry"],
    attractions: ["Rock Garden", "Tagore Hill", "Pahari Mandir", "Patratu Valley"],
    rooms: [
      {
        name: "Superior",
        bed: "Queen",
        guests: "2 Guests",
        perks: ["Breakfast", "Wi‑Fi"],
        price: "₹4,200",
        imageUrl: "/superior-room.jpg",
      },
      {
        name: "Standard",
        bed: "Queen",
        guests: "2 Guests",
        perks: ["Wi‑Fi"],
        price: "₹3,800",
        imageUrl: "/standard-room.jpg",
      },
      {
        name: "Deluxe",
        bed: "King",
        guests: "3 Guests",
        perks: ["Breakfast", "Wi‑Fi"],
        price: "₹5,100",
        imageUrl: "/deluxe-room.jpg",
      },
    ],
  }
  return base
}

export default function HotelDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const hotel = getMockHotel(params.slug)
  if (!hotel) return notFound()

  return (
    <main className="space-y-6 pb-10">
      {/* HERO */}
      <section className="relative rounded-2xl overflow-hidden">
        <Image
          src={hotel.heroUrl! || "/placeholder.svg"}
          alt={`${hotel.name} hero image`}
          width={1600}
          height={900}
          className="w-full h-[38rem] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-sm">{hotel.name}</h1>
              <p className="text-white/90">{hotel.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium">{hotel.rating.toFixed(1)}★</div>
              <div className="rounded-full bg-white/90 px-3 py-1 text-sm text-foreground">
                From <span className="font-semibold">{hotel.priceFrom}</span>
              </div>
              <Button size="lg" className="rounded-full shadow">
                Book Now
              </Button>
            </div>
          </div>

          {/* Thumbnail rail */}
          <div className="mt-4 flex gap-3 overflow-x-auto">
            {hotel.gallery?.map((src, i) => (
              <div key={i} className="relative h-16 w-16 shrink-0 rounded-md overflow-hidden">
                <Image src={src || "/placeholder.svg"} alt={`Gallery ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 rounded-2xl">
          <CardContent className="p-0">
            <Tabs defaultValue="about" className="w-full">
              <div className="p-4 md:p-6">
                <TabsList className="rounded-full bg-muted p-1">
                  <TabsTrigger value="about" className="rounded-full px-4">
                    About
                  </TabsTrigger>
                  <TabsTrigger value="facilities" className="rounded-full px-4">
                    Facilities
                  </TabsTrigger>
                  <TabsTrigger value="attractions" className="rounded-full px-4">
                    Attraction
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="rounded-full px-4">
                    Testimonial
                  </TabsTrigger>
                </TabsList>
              </div>

              <Separator />

              <TabsContent value="about" className="p-4 md:p-6 space-y-4">
                <p className="text-pretty leading-relaxed text-muted-foreground">{hotel.about}</p>
                <Card className="rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-base">View on Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-56 w-full rounded-lg overflow-hidden">
                      <Image src="/map-of-ranchi.jpg" alt="Map preview" fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facilities" className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2">
                  {hotel.facilities.map((f) => (
                    <Badge key={f} variant="secondary" className="rounded-full">
                      {f}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="attractions" className="p-4 md:p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-6">
                  {hotel.attractions.map((a) => (
                    <li key={a} className="text-muted-foreground">
                      {a}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="reviews" className="p-4 md:p-6">
                <p className="text-muted-foreground">Guest testimonials coming soon.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Room Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {hotel.rooms.map((room) => (
                <div
                  key={room.name}
                  className="grid grid-cols-[120px_1fr_auto] gap-3 items-center rounded-xl border p-2"
                >
                  <div className="relative h-20 w-[120px] rounded-lg overflow-hidden">
                    <Image
                      src={room.imageUrl || "/placeholder.svg?height=120&width=200&query=room"}
                      alt={`${room.name} room`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{room.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {room.bed} • {room.guests}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {room.perks.map((p) => (
                        <Badge key={p} variant="outline" className="rounded-full">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="font-semibold">{room.price}</p>
                    </div>
                    <Button size="sm" className="rounded-full">
                      Select
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
