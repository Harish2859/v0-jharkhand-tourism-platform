"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

function Star({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`h-4 w-4 ${filled ? "fill-foreground" : "fill-foreground/20"}`}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [size, setSize] = useState<string>("M")

  const catalog = [
    {
      slug: "dokra-brass-figurine",
      title: "Dokra Brass Figurine",
      price: 1250,
      q: "Jharkhand dokra brass craft product",
      tag: "Handcrafted • Metalwork",
    },
    {
      slug: "sikki-grass-basket",
      title: "Sikki Grass Basket",
      price: 780,
      q: "Jharkhand sikki grass basket handcrafted",
      tag: "Handcrafted • Grasswork",
    },
    {
      slug: "tassar-silk-stole",
      title: "Tassar Silk Stole",
      price: 2400,
      q: "Jharkhand tasar silk stole handloom",
      tag: "Handloom • Silk",
    },
    {
      slug: "wood-carved-mask",
      title: "Wood Carved Mask",
      price: 1650,
      q: "Jharkhand wood carved tribal mask",
      tag: "Handcrafted • Woodwork",
    },
  ] as const

  const product = catalog.find((p) => p.slug === params.slug) ?? catalog[0]

  const images = [
    `/.jpg?height=520&width=820&query=${encodeURIComponent(product.q + " studio")}`,
    `/.jpg?height=160&width=160&query=${encodeURIComponent(product.q + " detail texture")}`,
    `/.jpg?height=160&width=160&query=${encodeURIComponent(product.q + " closeup")}`,
    `/.jpg?height=160&width=160&query=${encodeURIComponent(product.q + " artisan workshop")}`,
  ]

  const sizes = ["S", "M", "L", "XL"]

  return (
    <main className="bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-8 lg:py-10">
        <nav className="mb-4 text-sm text-foreground/60">
          <Link href="/marketplace" className="hover:text-foreground">
            Marketplace
          </Link>
          <span className="mx-2">/</span>
          <span>Product details</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-lg border">
              <img
                alt={product.title}
                src={images[0] || "/placeholder.svg?height=520&width=820&query=product image"}
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {images.slice(1).map((src, i) => (
                <button
                  key={i}
                  aria-label={`View image ${i + 2}`}
                  className="overflow-hidden rounded-md border focus:outline-none focus:ring-2 focus:ring-foreground/40"
                >
                  <img
                    alt={`Product ${i + 2}`}
                    src={src || "/placeholder.svg?height=160&width=160&query=product thumb"}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <aside className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-foreground/60">{product.tag}</p>
              <h1 className="font-serif text-3xl text-foreground">{product.title}</h1>
              <div className="text-xl font-semibold text-foreground">₹{product.price.toLocaleString("en-IN")}</div>
              <div className="text-sm text-foreground/70">Order in 02:30:25 to get next-day shipping</div>
            </div>

            {/* Size selector */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-foreground">Select Size</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`h-10 min-w-10 rounded-full border px-4 text-sm transition ${
                      size === s
                        ? "bg-foreground text-background"
                        : "bg-background text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="h-11 px-6">Add to Cart</Button>
              <Button variant="secondary" className="h-11 px-6">
                Buy Now
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="desc">
                <AccordionTrigger>Description & Fit</AccordionTrigger>
                <AccordionContent>
                  This handcrafted Dokra bowl uses traditional lost-wax casting, finished with a soft brushed tone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping</AccordionTrigger>
                <AccordionContent>Standard delivery in 3–5 working days. Free returns within 30 days.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>
        </div>

        {/* Ratings & reviews */}
        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="text-5xl font-semibold text-foreground">4.5</div>
              <div className="mt-1 text-sm text-foreground/60">50 New Reviews</div>
              <div className="mt-4 space-y-1">
                {[5, 4, 3, 2, 1].map((stars, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} filled={idx < stars} />
                      ))}
                    </div>
                    <div className="relative h-2 w-40 rounded bg-foreground/10">
                      <div className="absolute inset-y-0 left-0 w-1/2 rounded bg-foreground/70" />
                    </div>
                    <span className="text-foreground/60">{stars}★</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < 5} />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/60">Alex Mathio • 13 Oct 2024</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    “Delightfully crafted and sturdy. The texture feels authentic, and it looks great on our table.”
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* You might also like */}
        <section className="mt-12">
          <h3 className="mb-4 font-serif text-2xl text-foreground">You might also like</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalog
              .filter((p) => p.slug !== product.slug)
              .map((p, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      alt={p.title}
                      src={`/.jpg?height=220&width=320&query=${encodeURIComponent(p.q + " studio")}`}
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="font-medium text-foreground">{p.title}</div>
                      <div className="text-sm text-foreground/70">₹{p.price.toLocaleString("en-IN")}</div>
                      <div className="mt-3">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={`/marketplace/${p.slug}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}
