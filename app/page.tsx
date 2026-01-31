"use client"

import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ModeCard } from "@/components/mode-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCity } from "@/lib/city-context"
import { Train, MapPin, Calendar, ArrowRight, Clock, Wallet, Route, Building2 } from "lucide-react"
import Link from "next/link"

function HomeContent() {
  const { selectedCity, cities } = useCity()

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-10 sm:py-16 md:py-20">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs sm:text-sm">
                <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-muted-foreground">{cities.length} Cities</span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <span className="text-primary">WELCOME</span>
                <br />
                <span className="text-accent">{selectedCity.name.toUpperCase()}</span>
              </h1>
              <p className="mx-auto mt-2 text-sm sm:text-base text-muted-foreground line-clamp-2">{selectedCity.tagline}</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row items-center justify-center sm:gap-3">
                <Button asChild size="sm" className="gap-2 w-full sm:w-auto">
                  <Link href="/transport">
                    Plan Route
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                  <Link href="/explore">Explore</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-20 top-1/2 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-accent/10 blur-3xl" />
        </section>

        {/* Features */}
        <section className="border-y border-border bg-muted/30 py-8 sm:py-12">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base">Real-time</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Compare routes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base">Cost Info</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Know fares</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Route className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base">12 Cities</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Multi-metro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mode Selection */}
        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold">Explore {selectedCity.name}</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                Commute or explore, we&apos;ve got you
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
              <ModeCard
                href="/transport"
                icon={Train}
                title="Transport"
                description="Find best routes"
                gradient="bg-gradient-to-br from-primary/20 to-primary/5"
              />
              <ModeCard
                href="/explore"
                icon={MapPin}
                title="Explore"
                description="Discover attractions"
                gradient="bg-gradient-to-br from-accent/20 to-accent/5"
              />
              <ModeCard
                href="/plan"
                icon={Calendar}
                title="Plan Trip"
                description="Create itineraries"
                gradient="bg-gradient-to-br from-muted to-muted/50"
              />
            </div>
          </div>
        </section>

        {/* City Stats */}
        <section className="border-t border-border bg-muted/30 py-8 sm:py-16">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold">{selectedCity.name} at a Glance</h2>
            </div>
            <div className="grid gap-4 text-center grid-cols-2 sm:grid-cols-4">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary">{selectedCity.metroLines}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Metro Lines</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary">{selectedCity.metroStations}+</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Stations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary">{selectedCity.population}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Population</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary">4</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Transport Modes</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Cities Grid */}
        <section className="py-8 sm:py-16">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="mb-6 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">Explore All Cities</h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">All Indian metros</p>
            </div>
            <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {cities.map((city) => (
                <Card
                  key={city.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedCity.id === city.id ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm truncate">{city.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{city.state}</p>
                      </div>
                      {city.hasMetro && (
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Train className="h-3.5 w-3.5 text-primary" />
                        </div>
                      )}
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-1">{city.tagline}</p>
                    <div className="mt-2 flex items-center gap-1 text-xs flex-wrap">
                      <span className="rounded bg-muted px-1.5 py-0.5">{city.metroStations}s</span>
                      <span className="rounded bg-muted px-1.5 py-0.5">{city.metroLines}l</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  )
}
