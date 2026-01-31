"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Ticket, Train, MapPin } from "lucide-react"
import type { Place, PlaceCategory } from "@/lib/types"

const categoryColors: Record<PlaceCategory, string> = {
  historical: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  cultural: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  religious: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "food-markets": "bg-green-500/10 text-green-600 dark:text-green-400",
  nature: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
}

const categoryLabels: Record<PlaceCategory, string> = {
  historical: "Historical",
  cultural: "Cultural",
  religious: "Religious",
  "food-markets": "Food & Markets",
  nature: "Nature",
}

interface PlaceCardProps {
  place: Place
  onViewDetails: () => void
}

export function PlaceCard({ place, onViewDetails }: PlaceCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="relative h-32 sm:h-48 overflow-hidden">
        <Image
          src={
            place.image ||
            `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(place.name + " Kolkata landmark") || "/placeholder.svg"}`
          }
          alt={place.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className={`absolute left-2 top-2 text-xs sm:text-sm ${categoryColors[place.category]}`}>
          {categoryLabels[place.category]}
        </Badge>
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg line-clamp-1">{place.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs sm:text-sm text-muted-foreground">{place.description}</p>

        <div className="mt-3 sm:mt-4 space-y-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground truncate">{place.bestTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground truncate">{place.entryFee}</span>
          </div>
          <div className="flex items-center gap-2">
            <Train className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground truncate">Near {place.nearbyStation}</span>
          </div>
        </div>

        <Button className="mt-3 sm:mt-4 w-full gap-2 bg-transparent h-8 sm:h-9 text-xs sm:text-sm" variant="outline" onClick={onViewDetails}>
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
          Details
        </Button>
      </CardContent>
    </Card>
  )
}
