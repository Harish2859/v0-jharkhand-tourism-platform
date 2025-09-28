import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Visits", value: "128,453" },
    { label: "Bookings", value: "1,284" },
    { label: "Active Artisans", value: "86" },
    { label: "Products Sold", value: "2,417" },
  ]
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      <section className="grid gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardTitle>{s.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{s.value}</CardContent>
          </Card>
        ))}
      </section>
      <p className="mt-6 text-sm text-muted-foreground">Note: Wire up real analytics and access control later.</p>
    </main>
  )
}
