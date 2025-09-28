import { ArtisanCard } from "@/components/artisan-card"

export default function MarketplacePage() {
  const artisans = [
    ["Kanchan Devi", "Patterns taught by the earth.", "sohrai artisan portrait"],
    ["Raghunath Ji", "Bronze that remembers fire.", "dokra artisan workshop"],
    ["Sita Ram", "Weave of the monsoon.", "tribal textile artisan"],
  ]
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-serif text-3xl">Master Crafters</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artisans.map(([name, quote, q]) => (
            <ArtisanCard key={name} name={name} quote={quote} imgQuery={q as string} />
          ))}
        </div>
      </section>
    </main>
  )
}
