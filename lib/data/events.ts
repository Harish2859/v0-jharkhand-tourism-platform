export type EventItem = {
  id: string
  placeSlug: string
  title: string
  dateISO: string // e.g. 2025-10-20
  startTime: string // e.g. "19:00"
  endTime: string // e.g. "21:00"
  location: string // short address/location
  image: string
  excerpt: string
  description: string
}

export const eventsData: EventItem[] = [
  {
    id: "ranchi-food-fest-2025",
    placeSlug: "ranchi",
    title: "Ranchi Food & Culture Festival",
    dateISO: "2025-10-23",
    startTime: "10:00",
    endTime: "20:00",
    location: "Morabadi Ground, Ranchi",
    image: "/ranchi-food-and-culture-festival-crowd.jpg",
    excerpt: "Taste regional delicacies, enjoy live folk performances, and shop local artisan crafts.",
    description:
      "Celebrate the culinary and cultural diversity of Jharkhand at the Ranchi Food & Culture Festival. Experience traditional dance forms like Chhau, savor dishes like Thekua and Dhuska, and explore stalls by local artisans. Family-friendly with dedicated kids’ zones and an evening musical showcase.",
  },
  {
    id: "jam-sharad-mela-2025",
    placeSlug: "jamshedpur",
    title: "Sharad Utsav Mela",
    dateISO: "2025-11-04",
    startTime: "17:00",
    endTime: "22:00",
    location: "Gandhi Maidan, Jamshedpur",
    image: "/jamshedpur-sharad-utsav-evening-lights.jpg",
    excerpt: "A vibrant evening mela with artisanal stalls, local snacks, and folk music under the stars.",
    description:
      "Sharad Utsav Mela brings together the region’s artisans and food vendors for a festive evening market. Expect handcrafted textiles, bamboo work, terracotta, and a curated stage featuring local bands and folk musicians. Perfect for festive shopping and street-food lovers.",
  },
  {
    id: "deoghar-kartik-fair-2025",
    placeSlug: "deoghar",
    title: "Kartik Purnima Fair",
    dateISO: "2025-11-10",
    startTime: "06:00",
    endTime: "21:00",
    location: "Near Baidyanath Temple, Deoghar",
    image: "/deoghar-kartik-purnima-fair-pilgrims.jpg",
    excerpt: "Spiritual gatherings, local crafts, and devotional music around the sacred precincts.",
    description:
      "Join thousands of devotees celebrating Kartik Purnima with ritual baths, temple visits, and devotional performances. Explore pop-up bazaars featuring local crafts and snacks. Expect early-morning aarti, serene ambiance, and cultural programs throughout the day.",
  },
]

export function getEventsForPlace(placeSlug?: string) {
  if (!placeSlug) return []
  return eventsData.filter((e) => e.placeSlug === placeSlug).sort((a, b) => a.dateISO.localeCompare(b.dateISO))
}

export function getEventById(id: string) {
  return eventsData.find((e) => e.id === id)
}
