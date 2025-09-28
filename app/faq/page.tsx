export default function FAQPage() {
  const faqs = [
    {
      q: "How do I plan a multi-day trip?",
      a: "Use the Trip Planner to add places day-by-day and export your itinerary.",
    },
    { q: "Are crafts authentic?", a: "Listings are verified in partnership with local co-ops and artisans." },
    { q: "When is the best time to visit?", a: "October to March is most pleasant; monsoon is great for waterfalls." },
  ]
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <dl className="mt-6 grid gap-6">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="font-semibold">{f.q}</dt>
            <dd className="text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </main>
  )
}
