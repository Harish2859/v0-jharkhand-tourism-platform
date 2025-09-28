import { Button } from "@/components/ui/button"

export function HeroVideoMosaic() {
  return (
    <section aria-label="Cinematic hero" className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img alt="Sohrai pattern" className="h-full w-full object-cover" src="/sohrai-art-pattern.jpg" />
        <img alt="Patratu valley" className="h-full w-full object-cover" src="/patratu-valley-road.jpg" />
        <img
          alt="Local artisan"
          className="hidden md:block h-full w-full object-cover"
          src="/artisan-portrait.png"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-primary">Unbox Jharkhand</h1>
          <p className="mt-2 text-sm md:text-base text-background px-3 inline-block rounded-full bg-foreground/80">
            Your AI-powered guide to forests, waterfalls, and vibrant culture.
          </p>
          <div className="mt-5">
            <Button size="lg" className="rounded-full" asChild>
              <a href="/trip" aria-label="Start the AI Persona Planner">
                What kind of traveler are you?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
