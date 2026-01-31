"use server"

import { generateText, Output } from "ai"
import { openai } from "@ai-sdk/openai"
import { cityPlacesSchema } from "@/lib/places-schema"
import { getCityById } from "@/lib/data/cities"
import { cityAttractionsMap } from "@/lib/data/city-attractions"
import type { Place } from "@/lib/types"

export async function generateCityPlaces(cityId: string): Promise<{ places: Place[]; error?: string; setupRequired?: boolean; isFallback?: boolean }> {
  try {
    const city = getCityById(cityId)
    if (!city) {
      return { places: [], error: "City not found" }
    }

    const { object } = await generateText({
      model: openai("gpt-4o-mini"),
      output: Output.object({ schema: cityPlacesSchema }),
      prompt: `Generate a list of 12-15 famous tourist and sightseeing places in ${city.name}, ${city.state}, India.

Include a diverse mix of:
- Historical monuments and heritage sites
- Cultural attractions (museums, theaters, art galleries)
- Religious places (temples, mosques, churches, gurudwaras)
- Food markets and famous food streets
- Nature spots (parks, gardens, lakes, beaches if applicable)

For each place, provide:
- Accurate GPS coordinates (lat/lng)
- Engaging 2-3 sentence description highlighting what makes it special
- Practical visiting information (best time, entry fees)
- Nearest metro station name (if ${city.name} has metro, otherwise use 'N/A')
- A short image query (3-5 words) that captures the essence of the place for image generation

Focus on places that are:
1. Actually famous and worth visiting
2. Have accurate, real-world coordinates
3. Include both iconic landmarks and local favorites
4. Cover different parts of the city

Make the descriptions engaging and informative for tourists.`,
    })

    // Transform the places to include proper image URLs
    const placesWithImages: Place[] = object?.places?.map((place) => ({
      ...place,
      image: `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(place.imageQuery + " " + city.name + " India landmark")}`,
    })) || []

    return { places: placesWithImages }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    
    // Try to use fallback curated data for the city
    const fallbackPlaces = cityAttractionsMap[cityId.toLowerCase()]
    
    if (fallbackPlaces && fallbackPlaces.length > 0) {
      console.log(`[v0] Using fallback data for ${cityId}`)
      
      // Add image URLs to fallback places
      const placesWithImages: Place[] = fallbackPlaces.map((place) => ({
        ...place,
        image: `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(place.imageQuery)}`,
      }))
      
      return { 
        places: placesWithImages,
        isFallback: true,
      }
    }
    
    // If no fallback data and API failed, show specific error
    if (errorMessage.includes("insufficient_quota") || errorMessage.includes("429")) {
      return {
        places: [],
        error: "OpenAI quota exceeded. Showing curated attractions instead.",
        setupRequired: true,
      }
    }
    
    if (errorMessage.includes("invalid_api_key") || errorMessage.includes("401")) {
      return {
        places: [],
        error: "Invalid OpenAI API key. Showing curated attractions instead.",
        setupRequired: true,
      }
    }

    if (!process.env.OPENAI_API_KEY) {
      return {
        places: [],
        error: "OpenAI not configured. Showing curated attractions instead.",
        setupRequired: true,
      }
    }

    console.error("Error generating places:", error)
    return { 
      places: [], 
      error: "Failed to load attractions. Please try again.",
      setupRequired: false,
    }
  }
}
