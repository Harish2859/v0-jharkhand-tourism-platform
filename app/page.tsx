import { HeroVideoMosaic } from "@/components/hero-video-mosaic"
import { DestinationCard } from "@/components/destination-card"
import { ArtisanCard } from "@/components/artisan-card"

export default function HomePage() {
  return (
    <main>
      <HeroVideoMosaic />

      {/* Icons of Jharkhand carousel */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-serif text-2xl md:text-3xl">Icons of Jharkhand</h2>
        <div className="mt-4 flex gap-4 overflow-x-auto snap-x">
          {[
            ["Hundru Falls", "Ranchi", "waterfall"],
            ["Betla National Park", "Palamu", "forest park"],
            ["Patratu Valley", "Ramgarh", "mountain road"],
            ["Jagannath Temple", "Ranchi", "temple"],
            ["Netarhat", "Latehar", "sunset hills"],
          ].map(([title, location, q]) => (
            <div className="min-w-[260px] snap-start" key={title}>
              <DestinationCard title={title} location={location} category="Icon" imgQuery={`${q} nature Jharkhand`} />
            </div>
          ))}
        </div>
      </section>

      {/* Off the Beaten Path */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-serif text-2xl md:text-3xl">Off the Beaten Path</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Lodh Falls Trail", "Where the roar meets the forest.", "lodh falls trail"],
              ["Sisai Murals", "What stories do the walls whisper?", "sohrai mural village"],
              ["Udhwa Bird Sanctuary", "A quiet chorus at sunrise.", "bird sanctuary lake"],
            ].map(([title, hook, q]) => (
              <ArtisanCard
                // Re-using visual style; in Hidden Gems we use GemCard
                key={title}
                name={title}
                quote={hook}
                imgQuery={q as string}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Connect with the Creators */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Master artisan at work"
              className="w-full rounded-lg object-cover"
              src="/artisan-working-jharkhand.jpg"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Connect with the Creators</h2>
            <p className="mt-2 text-muted-foreground">
              Meet Jharkhand’s master crafters and shop directly from their collections.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Sohrai Painter", "Tradition in every stroke.", "sohrai artisan portrait"],
                ["Dokra Sculptor", "Metal that sings.", "dokra artisan"],
              ].map(([name, quote, q]) => (
                <ArtisanCard key={name} name={name} quote={quote} imgQuery={q as string} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
