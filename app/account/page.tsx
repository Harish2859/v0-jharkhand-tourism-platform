import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function AccountPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Account</h1>
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Traveler" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="you@example.com" />
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-factor authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
              </div>
              <Switch />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">New password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button>Update password</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
