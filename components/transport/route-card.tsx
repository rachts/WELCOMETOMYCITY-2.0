"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, Bus, Car, Footprints, Clock, Wallet, ArrowRight, GitBranch } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RouteOption } from "@/lib/types"

const transportIcons = {
  metro: Train,
  bus: Bus,
  taxi: Car,
  walk: Footprints,
}

const transportColors = {
  metro: "text-blue-500 bg-blue-500/10",
  bus: "text-green-500 bg-green-500/10",
  taxi: "text-yellow-500 bg-yellow-500/10",
  walk: "text-purple-500 bg-purple-500/10",
}

interface RouteCardProps {
  route: RouteOption
  isSelected: boolean
  onSelect: () => void
  isFastest?: boolean
  isCheapest?: boolean
}

export function RouteCard({ route, isSelected, onSelect, isFastest, isCheapest }: RouteCardProps) {
  const Icon = transportIcons[route.type]
  const colorClass = transportColors[route.type]

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-md",
        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border/50",
      )}
      onClick={onSelect}
    >
      <CardHeader className="pb-1.5 sm:pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className={cn("flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg flex-shrink-0", colorClass)}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <CardTitle className="text-sm sm:text-lg capitalize truncate">{route.type}</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground">{route.distance} km</p>
            </div>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            {isFastest && (
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                Fast
              </Badge>
            )}
            {isCheapest && (
              <Badge variant="secondary" className="bg-green-500/10 text-green-500 text-xs">
                Cheap
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-3">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            <span className="text-base sm:text-lg font-semibold">{route.duration}</span>
            <span className="text-xs text-muted-foreground">min</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <Wallet className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            <span className="text-base sm:text-lg font-semibold">₹{route.cost}</span>
            <span className="text-xs text-muted-foreground">fare</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 sm:gap-1">
            <GitBranch className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            <span className="text-base sm:text-lg font-semibold">{route.interchanges}</span>
            <span className="text-xs text-muted-foreground">chg</span>
          </div>
        </div>

        {/* Route Steps */}
        <div className="mt-2 sm:mt-4 space-y-1 sm:space-y-2">
          {route.steps.slice(0, 2).map((step, index) => {
            const StepIcon = transportIcons[step.type]
            return (
              <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                <StepIcon className={cn("h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0", transportColors[step.type].split(" ")[0])} />
                <span className="text-muted-foreground truncate">{step.instruction}</span>
              </div>
            )
          })}
          {route.steps.length > 2 && (
            <p className="text-xs text-muted-foreground px-2">+{route.steps.length - 2} more step(s)</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
