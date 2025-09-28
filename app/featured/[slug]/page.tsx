import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedPlacePage({ params }: { params: { slug: string } }) {
  const title = decodeURIComponent(params.slug).replace(/-/g, " ")
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm">
        <Link href="/explore" className="text-muted-foreground hover:text-foreground">
          ← Back to Explore
        </Link>
      </nav>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-balance">Featured: {title}</h1>
        <p className="text-muted-foreground">A signature destination from Jharkhand, highlighted for travelers.</p>
      </header>
      <div className="aspect-video w-full rounded-md bg-muted" />
      <div className="mt-6 flex gap-2">
        <Button asChild>
          <Link href="/trip">Add to itinerary</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/routes">View route</Link>
        </Button>
      </div>
    </main>
  )
}
