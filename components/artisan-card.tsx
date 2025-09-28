import { Card, CardContent } from "@/components/ui/card"

export function ArtisanCard({
  name,
  quote,
  imgQuery,
}: {
  name: string
  quote: string
  imgQuery: string
}) {
  return (
    <Card className="overflow-hidden">
      <img
        alt={`${name} portrait`}
        src={`/.jpg?height=260&width=400&query=${encodeURIComponent(imgQuery)}`}
        className="h-52 w-full object-cover"
      />
      <CardContent className="p-4">
        <h3 className="font-serif text-xl">{name}</h3>
        <p className="text-sm text-muted-foreground">“{quote}”</p>
        <div className="mt-3 text-xs text-muted-foreground">Blockchain verification: Pending</div>
      </CardContent>
    </Card>
  )
}
