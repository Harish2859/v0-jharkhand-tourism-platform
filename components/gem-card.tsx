import { Card, CardContent } from "@/components/ui/card"

export function GemCard({
  title,
  hook,
  imgQuery,
}: {
  title: string
  hook: string
  imgQuery: string
}) {
  return (
    <Card className="overflow-hidden">
      <img
        alt={`${title} hidden gem`}
        src={`/.jpg?height=260&width=400&query=${encodeURIComponent(imgQuery)}`}
        className="h-52 w-full object-cover"
      />
      <CardContent className="p-4">
        <h3 className="font-serif text-xl">{title}</h3>
        <p className="text-sm text-muted-foreground">{hook}</p>
        <button className="mt-3 text-primary underline underline-offset-4">Uncover the story</button>
      </CardContent>
    </Card>
  )
}
