import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl">Stay in the loop</h3>
          <p className="text-sm text-muted-foreground">Get updates on new trails, festivals and artisan stories.</p>
          <form className="mt-3 flex gap-2">
            <Input type="email" placeholder="Enter email" aria-label="Email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/explore">Destinations</Link>
            </li>
            <li>
              <Link href="/gems">Hidden Gems</Link>
            </li>
            <li>
              <Link href="/marketplace">Artisans</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Unbox Jharkhand. All rights reserved.
      </div>
    </footer>
  )
}
