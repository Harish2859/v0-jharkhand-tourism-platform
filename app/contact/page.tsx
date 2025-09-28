import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-muted-foreground">Questions, feedback, or partnership inquiries—drop us a note.</p>
      <form className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={6} required />
        </div>
        <Button type="submit">Send message</Button>
      </form>
    </main>
  )
}
