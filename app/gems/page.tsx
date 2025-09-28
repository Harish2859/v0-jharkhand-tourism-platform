import { GemCard } from "@/components/gem-card"

export default function GemsPage() {
  const gems = [
    ["Kakolat Whisper", "A quiet ledge where water hums like a tanpura.", "hidden waterfall"],
    ["Sisai Stories", "Sohrai murals that map a living memory.", "sohrai murals wall"],
    ["Koel Curve", "A bend in the river where fog braids with dawn.", "river bend fog"],
  ]
  return (
    <main>
      <section className="relative">
        <img alt="Hidden gems header" src="/moody-forest-jharkhand.jpg" className="h-60 md:h-80 w-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 grid place-items-center">
          <h1 className="font-serif text-3xl text-background bg-foreground/80 px-3 py-1 rounded">Hidden Gems</h1>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-sm text-muted-foreground">Explore with care. Leave no trace. Respect local culture.</p>
          <div className="mt-4 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {gems.map(([title, hook, q]) => (
              <div key={title} className="break-inside-avoid">
                <GemCard title={title} hook={hook} imgQuery={q as string} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
