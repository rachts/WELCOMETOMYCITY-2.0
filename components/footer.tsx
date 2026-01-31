"use client"

import Link from "next/link"
import { Train } from "lucide-react"
import { useCity } from "@/lib/city-context"

export function Footer() {
  const { selectedCity } = useCity()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row md:gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Train className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="hidden font-semibold text-sm sm:inline-block">WELCOMETOMYCITY</span>
          </div>
          
          {/* Tagline */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground line-clamp-2">
            Navigate {selectedCity.name} with ease
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground sm:gap-4 md:justify-end">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/transport" className="hover:text-foreground transition-colors">
              Transport
            </Link>
            <Link href="/explore" className="hover:text-foreground transition-colors">
              Explore
            </Link>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border/50 mt-4 sm:mt-6 pt-4 sm:pt-6 flex flex-col items-center justify-between gap-1 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} WELCOMETOMYCITY.</p>
          <p>By <span className="font-semibold">Rachit</span></p>
        </div>
      </div>
    </footer>
  )
}
