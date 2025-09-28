import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MOCK = {
  "sohrai-sanjukta": { name: "Sanjukta", craft: "Sohrai & Khovar Painting" },
  "dok-artist-raj": { name: "Raj", craft: "Dhokra Metal Casting" },
  "tasar-weavers": { name: "Tasar Weavers", craft: "Tasar Silk Weaving" },
}

export default function ArtisanProfilePage({ params }: { params: { slug: string } }) {
  const data = MOCK[params.slug as keyof typeof MOCK]
  if (!data) return notFound()

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm">
        <Link href="/artisans" className="text-muted-foreground hover:text-foreground">
          ← All artisans
        </Link>
      </nav>

      <header className="mb-8 grid gap-4 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-muted-foreground">{data.craft}</p>
          <div className="mt-4 flex gap-2">
            <Button variant="default">Contact</Button>
            <Button asChild variant="secondary">
              <Link href="/marketplace">View crafts</Link>
            </Button>
          </div>
        </div>
        <div className="aspect-video rounded-md bg-muted" />
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Work #{i + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square rounded-md bg-muted" />
              <p className="mt-2 text-sm text-muted-foreground">Handmade piece with local materials.</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
