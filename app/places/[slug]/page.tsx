import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import PlaceEventsCard from "@/components/place-events-card"

export default function PlaceDetail({ params }: { params: { slug: string } }) {
  const name = "Hundru Falls"
  // Map specific place slugs to a broader area slug used by the sample events dataset
  const slugToAreaMap: Record<string, string> = { "hundru-falls": "ranchi" }
  const placeSlug = slugToAreaMap[params?.slug] || params?.slug

  return (
    <div>
      <main className="bg-background">
        {/* Hero: full-bleed image with dark overlay, huge title, minimal top nav, right-side pagination */}
        <section className="relative">
          <img
            alt={`${name} hero`}
            src={`/.jpg?height=680&width=1600&query=${encodeURIComponent(name + " Jharkhand landscape aerial")}`}
            className="h-[70vh] w-full object-cover"
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

          {/* Top mini-nav inspired by reference */}
          <div className="absolute top-4 left-4 right-4 mx-auto max-w-6xl flex items-center justify-between px-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-foreground/70" aria-hidden />
              <span className="tracking-wide text-foreground/90">TRAVEL</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm text-foreground/80">
              <a className="hover:text-foreground" href="#sea">
                wide sea
              </a>
              <a className="hover:text-foreground" href="#mountains">
                mountains
              </a>
              <a className="hover:text-foreground" href="#island">
                island
              </a>
            </nav>
          </div>

          {/* Right-side pagination numerals */}
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end gap-2 text-foreground/80">
            {[3, 4, 5, 6, 7].map((n) => (
              <div key={n} className={`w-12 text-right text-sm ${n === 5 ? "font-semibold text-foreground" : ""}`}>
                {n < 10 ? `0${n}` : n}
              </div>
            ))}
            <div className="mt-1 h-px w-14 bg-foreground/40" aria-hidden />
          </div>

          {/* Hero text */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-4 pb-10">
              <h1 className="font-serif text-pretty text-5xl md:text-7xl tracking-tight text-foreground uppercase">
                {"Visit " + name}
              </h1>

              <div className="mt-6 grid gap-4 text-foreground/90 md:grid-cols-3">
                <p className="text-sm leading-relaxed">
                  {`${name}`} is a dramatic waterfall carved through ancient rock—its misty basin sets a contemplative
                  mood.
                </p>
                <p className="text-sm leading-relaxed">
                  Best explored at dawn or late afternoon for cooler air and softer light.
                </p>
                <p className="text-sm leading-relaxed">
                  Local guides share folklore of the river and the forests surrounding it.
                </p>
              </div>

              <div className="mt-4 text-sm font-semibold text-foreground/90">SWIPE &gt;&gt;</div>
            </div>
          </div>
        </section>

        {/* Thin divider */}
        <div className="mx-auto my-8 h-px max-w-6xl bg-foreground/20" aria-hidden />

        {/* Related image of the place */}
        <section className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Related image</h2>
          <p className="mt-1 text-sm text-foreground/70">
            A related view that captures the mood and terrain around {name}.
          </p>

          <div className="mt-4 overflow-hidden rounded-md">
            <img
              alt={`Related view near ${name}`}
              src={`/.jpg?key=bjpkh&height=360&width=1200&query=${encodeURIComponent(name + " related scenic view Jharkhand")}`}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </section>

        {/* Thin divider */}
        <div className="mx-auto my-10 h-px max-w-6xl bg-foreground/20" aria-hidden />

        <section className="mx-auto max-w-6xl px-4">
          <PlaceEventsCard placeSlug={placeSlug} />
        </section>

        {/* Thin divider */}
        <div className="mx-auto my-10 h-px max-w-6xl bg-foreground/20" aria-hidden />

        {/* Centered section intro */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-foreground/60">confusion? These recommendation</p>
            <h2 className="mt-1 font-serif text-2xl md:text-3xl text-foreground uppercase">
              destination recommendations
            </h2>
          </div>
        </div>

        {/* Nearby Hotels */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Forest View Resort",
                distance: "2.1 km",
                price: "₹3,200/night",
                q: "Jharkhand boutique hotel near waterfall",
              },
              {
                name: "Riverside Lodge",
                distance: "3.4 km",
                price: "₹2,650/night",
                q: "Jharkhand riverside eco lodge",
              },
              { name: "Valley Stay", distance: "5.0 km", price: "₹2,900/night", q: "Jharkhand valley stay homestay" },
            ].map((h, i) => {
              const slug = h.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
              return (
                <div key={i} className="relative">
                  <Link href={`/hotels/${slug}`} className="absolute inset-0" aria-label={`Open ${h.name}`}>
                    <span className="sr-only">{`Open ${h.name}`}</span>
                  </Link>
                  <Card className="overflow-hidden bg-background/20 ring-1 ring-foreground/10 backdrop-blur supports-[backdrop-filter]:bg-background/10">
                    <CardContent className="p-0">
                      <img
                        alt={`${h.name} photo`}
                        src={`/.jpg?key=3ajhs&height=200&width=420&query=${encodeURIComponent(h.q)}`}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-semibold text-foreground">{h.name}</h3>
                          <span className="text-xs text-foreground/70">{h.distance}</span>
                        </div>
                        <div className="mt-2 text-sm text-foreground/80">{h.price}</div>
                        <div className="mt-3">
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <Link href={`/hotels/${slug}`}>View details</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </section>

        {/* Thin divider */}
        <div className="mx-auto my-10 h-px max-w-6xl bg-foreground/20" aria-hidden />

        {/* Popular Crafts */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground uppercase">Popular crafts</h2>
            <a href="/marketplace" className="text-sm text-foreground/70 hover:text-foreground">
              See more
            </a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Dokra Brass Figurine",
                artisan: "Sita Devi",
                price: "₹1,250",
                q: "Jharkhand dokra brass craft product",
              },
              {
                title: "Sikki Grass Basket",
                artisan: "Rahul Kumar",
                price: "₹780",
                q: "Jharkhand sikki grass basket handcrafted",
              },
              {
                title: "Tassar Silk Stole",
                artisan: "Neha Kumari",
                price: "₹2,400",
                q: "Jharkhand tasar silk stole handloom",
              },
              {
                title: "Wood Carved Mask",
                artisan: "Biren Lal",
                price: "₹1,650",
                q: "Jharkhand wood carved tribal mask",
              },
            ].map((c, i) => {
              const slug = c.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
              return (
                <div key={i} className="relative">
                  <Card className="overflow-hidden bg-background/20 ring-1 ring-foreground/10 backdrop-blur supports-[backdrop-filter]:bg-background/10">
                    <CardContent className="p-0">
                      <img
                        alt={`${c.title} by ${c.artisan}`}
                        src={`/.jpg?key=rwyo3&height=220&width=360&query=${encodeURIComponent(c.q)}`}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                        <p className="mt-1 text-sm text-foreground/70">by {c.artisan}</p>
                        <div className="mt-2 text-sm text-foreground/80">{c.price}</div>
                        <div className="mt-3">
                          <Button size="sm" className="rounded-full" asChild>
                            <Link href={`/marketplace/${slug}`}>View product</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Link href={`/marketplace/${slug}`} className="absolute inset-0" aria-label={`Open ${c.title}`}>
                    <span className="sr-only">{`Open ${c.title}`}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
