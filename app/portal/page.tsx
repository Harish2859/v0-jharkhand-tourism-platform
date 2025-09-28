import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProviderPortalPage() {
  const blocks = [
    { title: "My Profile", desc: "Update your public profile and services." },
    { title: "Products", desc: "Manage craft listings and inventory." },
    { title: "Bookings", desc: "View and manage guide/homestay requests." },
  ]
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Service Provider Portal</h1>
        <p className="text-muted-foreground">For artisans, guides, and homestay owners.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {blocks.map((b) => (
          <Card key={b.title}>
            <CardHeader>
              <CardTitle>{b.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
              <Button className="mt-4" variant="secondary">
                Open
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
