import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CartPage() {
  const items = [
    { id: "dhokra-bowl", name: "Dhokra Bowl", price: 1200, qty: 1 },
    { id: "sohrai-paint", name: "Sohrai Painting (A4)", price: 2400, qty: 1 },
  ]
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <section className="grid gap-4">
          {items.map((i) => (
            <Card key={i.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{i.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 rounded-md bg-muted" aria-hidden />
                  <div className="text-sm text-muted-foreground">₹{i.price.toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor={`qty-${i.id}`} className="sr-only">
                    Quantity
                  </Label>
                  <Input id={`qty-${i.id}`} defaultValue={i.qty} className="w-16" />
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
        <aside>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/checkout">Checkout</Link>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <Link href="/marketplace">Continue shopping</Link>
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </main>
  )
}
