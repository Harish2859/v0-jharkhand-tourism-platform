"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight">Unbox Jharkhand</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link className="text-sm hover:text-primary" href="/">
            Home
          </Link>
          <Link className="text-sm hover:text-primary" href="/explore">
            Explore
          </Link>
          <Link className="text-sm hover:text-primary" href="/gems">
            Hidden Gems
          </Link>
          <Link className="text-sm hover:text-primary" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm hover:text-primary" href="/trip">
            My Trip
          </Link>
          <Link className="text-sm hover:text-primary" href="/routes">
            Routes
          </Link>
          {/* add Events and Artisans to primary nav */}
          <Link className="text-sm hover:text-primary" href="/events">
            Events
          </Link>
          <Link className="text-sm hover:text-primary" href="/artisans">
            Artisans
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="rounded-full hidden md:inline-flex">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <Link href="/trip">Start planning</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full bg-transparent">
            <Link href="/routes">Routes</Link>
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
          >
            <span className="sr-only">Menu</span>
            <div className={cn("h-4 w-4 border-b-2 border-foreground", open && "rotate-45")} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/explore" onClick={() => setOpen(false)}>
              Explore
            </Link>
            <Link href="/gems" onClick={() => setOpen(false)}>
              Hidden Gems
            </Link>
            <Link href="/marketplace" onClick={() => setOpen(false)}>
              Marketplace
            </Link>
            <Link href="/trip" onClick={() => setOpen(false)}>
              My Trip
            </Link>
            <Link href="/routes" onClick={() => setOpen(false)}>
              Routes
            </Link>
            <Link href="/events" onClick={() => setOpen(false)}>
              Events
            </Link>
            <Link href="/artisans" onClick={() => setOpen(false)}>
              Artisans
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
