"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Sparkles } from "lucide-react"
import { generateCityPlaces } from "@/lib/actions/generate-places"
import type { Place } from "@/lib/types"

interface GeneratePlacesButtonProps {
  cityId: string
  cityName: string
  onGenerate: (places: Place[], isFallback?: boolean) => void
}

export function GeneratePlacesButton({ cityId, cityName, onGenerate }: GeneratePlacesButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setError(null)
    setIsGenerating(true)
    try {
      const result = await generateCityPlaces(cityId)

      if (result.error) {
        setError(result.error)
      }
      
      if (result.places.length > 0) {
        onGenerate(result.places, result.isFallback)
      }
    } catch (err) {
      setError("Failed to generate attractions. Check your OpenAI API key.")
      console.error("Error generating places:", err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Button
        onClick={handleClick}
        disabled={isGenerating}
        size="sm"
        className="gap-2 w-full sm:w-auto"
        variant="default"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="hidden sm:inline">Generating attractions...</span>
            <span className="sm:hidden">Generating...</span>
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">Discover {cityName} Attractions</span>
            <span className="sm:hidden">Discover</span>
          </>
        )}
      </Button>
      {error && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-2 sm:p-3">
          <p className="text-xs sm:text-sm text-blue-900 font-medium mb-1">ℹ️ {error}</p>
          <p className="text-xs text-blue-800 mb-2">Showing carefully curated attractions for {cityName}.</p>
          <div className="text-xs text-blue-700 space-y-1">
            {error.includes("quota") && (
              <>
                <p className="font-medium mt-2">To enable AI generation:</p>
                <p>1. Visit https://platform.openai.com/account/billing/overview</p>
                <p>2. Add a payment method to your account</p>
                <p>3. Try again after billing is activated</p>
              </>
            )}
            {error.includes("not configured") && (
              <>
                <p className="font-medium mt-2">To enable AI generation:</p>
                <p>1. Get an API key from https://platform.openai.com/api-keys</p>
                <p>2. Add it to .env.local: OPENAI_API_KEY=sk-...</p>
                <p>3. Restart the development server</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
