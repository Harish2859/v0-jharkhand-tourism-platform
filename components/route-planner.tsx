"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Place = { id: string; name: string; lat: number; lon: number }

// Sample Jharkhand places (approximate)
const places: Place[] = [
  { id: "ranchi", name: "Ranchi", lat: 23.3441, lon: 85.3096 },
  { id: "jamshedpur", name: "Jamshedpur", lat: 22.8046, lon: 86.2029 },
  { id: "dhanbad", name: "Dhanbad", lat: 23.7957, lon: 86.4304 },
  { id: "deoghar", name: "Deoghar", lat: 24.4828, lon: 86.6946 },
  { id: "hazaribagh", name: "Hazaribagh", lat: 23.9966, lon: 85.3691 },
]

export function RoutePlanner() {
  const [fromId, setFromId] = useState<string>(places[0].id)
  const [toId, setToId] = useState<string>(places[1].id)
  const [distanceKm, setDistanceKm] = useState<number | null>(null)
  const [durationMin, setDurationMin] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const mapRef = useRef<L.Map | null>(null)
  const routeLayerRef = useRef<L.GeoJSON | null>(null)
  const from = useMemo(() => places.find((p) => p.id === fromId)!, [fromId])
  const to = useMemo(() => places.find((p) => p.id === toId)!, [toId])

  useEffect(() => {
    if (mapRef.current) return
    const map = L.map("route-map", { zoomControl: true })
    mapRef.current = map
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })
    tiles.addTo(map)
    map.setView([from.lat, from.lon], 7)
  }, [])

  async function getRoute() {
    if (!mapRef.current) return
    setLoading(true)
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}?overview=full&geometries=geojson`
      const res = await fetch(url)
      const data = await res.json()
      if (!data.routes?.[0]) throw new Error("No route")
      const route = data.routes[0]
      const geojson = route.geometry

      // Remove old layer
      if (routeLayerRef.current) {
        mapRef.current.removeLayer(routeLayerRef.current)
        routeLayerRef.current = null
      }

      routeLayerRef.current = L.geoJSON(geojson as any, {
        style: { color: "#0ea5e9", weight: 5, opacity: 0.8 }, // uses accent but map layer is external; acceptable
      }).addTo(mapRef.current)

      const group = new L.FeatureGroup([
        L.marker([from.lat, from.lon]),
        L.marker([to.lat, to.lon]),
        routeLayerRef.current,
      ])
      mapRef.current.fitBounds(group.getBounds(), { padding: [24, 24] })

      setDistanceKm(route.distance / 1000)
      setDurationMin(route.duration / 60)
    } catch (e) {
      console.warn("Route error", e)
      setDistanceKm(null)
      setDurationMin(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Auto fetch on load and when endpoints change
    getRoute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromId, toId])

  return (
    <section className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle className="text-base">Plan a route</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label>From</Label>
            <Select value={fromId} onValueChange={setFromId}>
              <SelectTrigger>
                <SelectValue placeholder="Select origin" />
              </SelectTrigger>
              <SelectContent>
                {places.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>To</Label>
            <Select value={toId} onValueChange={setToId}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {places.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={getRoute} disabled={loading}>
            {loading ? "Finding route..." : "Get Route"}
          </Button>

          <div className="grid grid-cols-2 gap-3 rounded-md border p-3">
            <div>
              <div className="text-xs text-muted-foreground">Distance</div>
              <div className="text-sm">{distanceKm != null ? `${distanceKm.toFixed(1)} km` : "—"}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Duration</div>
              <div className="text-sm">{durationMin != null ? `${Math.round(durationMin)} min` : "—"}</div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Tip: This demo uses public OSRM routing and OpenStreetMap tiles. For production, add your own map provider
            key.
          </p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base">Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="route-map" className="h-[420px] w-full rounded-md border" />
        </CardContent>
      </Card>
    </section>
  )
}
