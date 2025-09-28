import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ARTISANS = [
  { slug: "sohrai-sanjukta", name: "Sanjukta (Sohrai Art)", craft: "Sohrai & Khovar Painting" },
  { slug: "dok-artist-raj", name: "Raj (Dhokra)", craft: "Dhokra Metal Casting" },
  { slug: "tasar-weavers", name: "Tasar Weavers", craft: "Tasar Silk Weaving" },
]

export default function ArtisanDirectoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-balance">Master Crafters</h1>
        <p className="text-muted-foreground">Discover Jharkhand’s verified artisans and their stories.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {ARTISANS.map((a) => (
          <Card key={a.slug}>
            <CardHeader>
              <CardTitle>{a.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="aspect-video w-full rounded-md bg-muted" />
              <p className="mt-3 text-muted-foreground">{a.craft}</p>
              <div className="mt-4">
                <Button asChild size="sm">
                  <Link href={`/artisans/${a.slug}`}>View profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
