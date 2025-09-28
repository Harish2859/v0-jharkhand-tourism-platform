"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"

export function StickyPowerBar() {
  const [view, setView] = useState<"grid" | "map">("grid")
  return (
    <div className="sticky top-[60px] z-30 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center gap-3">
        <Input className="flex-1 min-w-40" placeholder="Search destinations..." aria-label="Search destinations" />
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            Waterfalls
          </Button>
          <Button variant="secondary" size="sm">
            Temples
          </Button>
          <Button variant="secondary" size="sm">
            Parks
          </Button>
          <Button variant="secondary" size="sm">
            Museums
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Toggle aria-label="Toggle Grid View" pressed={view === "grid"} onPressedChange={() => setView("grid")}>
            Grid
          </Toggle>
          <Toggle aria-label="Toggle Map View" pressed={view === "map"} onPressedChange={() => setView("map")}>
            Map
          </Toggle>
        </div>
      </div>
    </div>
  )
}
