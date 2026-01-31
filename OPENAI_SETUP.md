# OpenAI Integration Setup - WELCOMETOMYCITY

## Overview
WELCOMETOMYCITY now features AI-powered tourist attraction discovery for all 12 major Indian metro cities. Users can instantly generate curated lists of the best places to visit in any city using OpenAI's GPT-4o-mini model.

## Quick Start

### 1. Get Your OpenAI API Key
- Visit [OpenAI Platform](https://platform.openai.com/api-keys)
- Sign up or log in to your account
- Click "Create new secret key"
- Copy your API key (it starts with `sk-`)

### 2. Set Up Environment Variable
Create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Never commit `.env.local` to version control!**

### 3. Install Dependencies
The project already includes the necessary packages:
- `ai` - Vercel AI SDK for structured output
- `@ai-sdk/openai` - OpenAI provider for AI SDK

If not installed, run:
```bash
npm install ai @ai-sdk/openai
```

### 4. Start the Application
```bash
npm run dev
```

Visit [http://localhost:3000/explore](http://localhost:3000/explore) and select any city other than Kolkata to test the feature.

## How It Works

### User Flow
1. User navigates to the **Explore** page (`/explore`)
2. Selects any city from the city switcher dropdown
3. Sees a prompt to "Discover [City] Attractions"
4. Clicks the "Discover" button
5. OpenAI generates 12-15 authentic tourist places for that city
6. Results appear as cards with images, descriptions, entry fees, and nearby metro stations
7. User can filter by category, search, and view detailed information

### Technical Flow
1. User clicks "Discover Attractions" button → Calls `generateCityPlaces(cityId)` server action
2. Server action uses `generateText()` with `Output.object()` to get structured data from OpenAI
3. OpenAI returns 12-15 places matching the schema with:
   - Accurate GPS coordinates
   - 2-3 sentence descriptions
   - Best visiting times and entry fees
   - Nearest metro station
   - Image query for placeholder generation
4. Places are cached in component state
5. Frontend displays results with search and filter capabilities

## Features

### Generated Content Includes
- **Accurate Locations**: Real GPS coordinates for each place
- **Diverse Categories**: Historical, Cultural, Religious, Food Markets, Nature
- **Practical Information**: Best times to visit, entry fees, languages spoken
- **Metro Integration**: Nearest metro station (if applicable) for easy navigation
- **Visual Descriptions**: Image queries for generating representative images

### Supported Cities
1. Kolkata (static data + can generate)
2. Delhi
3. Mumbai
4. Chennai
5. Bangalore
6. Hyderabad
7. Ahmedabad
8. Pune
9. Jaipur
10. Lucknow
11. Kochi
12. Nagpur

## Schema & Validation

### Place Object Schema
```typescript
{
  id: string                    // URL-friendly kebab-case identifier
  name: string                  // Official place name
  category: string              // historical | cultural | religious | food-markets | nature
  lat: number                   // Latitude coordinate
  lng: number                   // Longitude coordinate
  description: string           // 2-3 sentence engaging description
  bestTime: string              // Best hours to visit with specifics
  entryFee: string              // Fee with Indian/foreigner breakdown
  nearbyStation: string         // Nearest metro or N/A
  imageQuery: string            // 3-5 word image generation query
}
```

## Troubleshooting

### "Failed to generate attractions. Check your OpenAI API key."
**Solution**: 
- Verify `OPENAI_API_KEY` is set in `.env.local`
- Check the API key starts with `sk-`
- Ensure you have API credits remaining

### "City not found"
**Solution**: 
- Ensure you're using a valid city ID (lowercase)
- Check the city switcher to see available cities

### Empty/Incomplete Results
**Solution**: 
- OpenAI is rate-limited or had an error
- Retry after a few seconds
- Check OpenAI status page for outages

### API Rate Limit (429 Error)
**Solution**: 
- Wait 30-60 seconds before retrying
- Upgrade your OpenAI plan for higher limits
- Consider implementing caching for frequently requested cities

## Pricing

OpenAI charges per token used. Approximate costs:
- **Per city generation**: ~$0.0001-0.0003 (gpt-4o-mini is very affordable)
- **Monthly (100 cities/month)**: ~$0.01-0.03

For detailed pricing, visit [OpenAI Pricing](https://openai.com/api/pricing/).

## API Reference

### generateCityPlaces(cityId: string)
Server action that generates tourist attractions for a given city.

```typescript
// Usage
const result = await generateCityPlaces("delhi")

// Returns
{
  places: Place[],
  error?: string
}
```

### POST /api/generate-places
Alternative API endpoint for generating places.

**Request:**
```json
{
  "cityId": "mumbai"
}
```

**Response:**
```json
{
  "places": [...],
  "city": "Mumbai"
}
```

## Security

- **API Key Safety**: Never share your OpenAI API key
- **Environment Variables**: Keep `.env.local` out of version control (.gitignore handles this)
- **Rate Limiting**: Implement per-user limits if deploying publicly
- **Input Validation**: All city IDs are validated against known cities

## Performance Optimization

### Caching
Generated places are cached in component state to avoid regenerating for the same city during a session. For production:

```typescript
// Consider adding Redis caching
const cachedPlaces = await redis.get(`places:${cityId}`)
if (cachedPlaces) return JSON.parse(cachedPlaces)
```

### Streaming
The current implementation uses `generateText()` with structured output. For better UX with streaming:

```typescript
// Future enhancement
const { textStream } = streamText({...})
for await (const chunk of textStream) {
  // Stream results to user in real-time
}
```

## Deployment

### Vercel
1. Set `OPENAI_API_KEY` in Vercel project settings
2. Deploy normally - no additional configuration needed

### Self-Hosted
1. Set `OPENAI_API_KEY` environment variable on server
2. Ensure Node.js runtime supports async/await
3. No edge runtime restrictions

## Future Enhancements

- [ ] Caching layer with Redis/Upstash
- [ ] User favorites system (database required)
- [ ] Real image integration (replace placeholders)
- [ ] Multi-language support
- [ ] Custom itinerary generation using generated places
- [ ] User reviews and ratings for places

## Support

For issues with:
- **OpenAI API**: Visit [OpenAI Help](https://help.openai.com)
- **WELCOMETOMYCITY**: Check GitHub issues or contact via email

---

**Version**: 1.0  
**Last Updated**: 2026-01-31  
**Created by**: Rachit
