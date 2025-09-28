export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About Jharkhand Tourism Platform</h1>
      <p className="mt-4 text-muted-foreground text-pretty">
        Our mission is to showcase Jharkhand’s natural beauty, diverse cultures, and living crafts—while creating
        sustainable livelihoods.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-semibold">Culture</h2>
          <p className="text-muted-foreground">Festivals, dance forms, and local cuisines.</p>
        </div>
        <div>
          <h2 className="font-semibold">Nature</h2>
          <p className="text-muted-foreground">Waterfalls, forests, and wildlife sanctuaries.</p>
        </div>
        <div>
          <h2 className="font-semibold">Craft</h2>
          <p className="text-muted-foreground">World-renowned Sohrai, Dhokra, and Tasar silk.</p>
        </div>
      </div>
    </main>
  )
}
