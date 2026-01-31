# WELCOMETOMYCITY - Project Structure

## Overview
WELCOMETOMYCITY is a comprehensive civic-tech platform for navigating India's metro cities. It provides transport planning, tourist exploration, and itinerary generation features for seamless city navigation and tourism.

**Created by: Rachit**

## Directory Structure

```
├── app/
│   ├── layout.tsx                 # Root layout with CityProvider
│   ├── page.tsx                   # Homepage with city selection
│   ├── globals.css                # Tailwind + design tokens (teal/terracotta theme)
│   │
│   ├── transport/
│   │   ├── page.tsx              # Main transport planner
│   │   ├── loading.tsx           # Loading state
│   │   └── bus/
│   │       ├── page.tsx          # Dedicated bus route finder
│   │       └── loading.tsx       # Loading state
│   │
│   ├── explore/
│   │   ├── page.tsx              # Tourist sightseeing explorer
│   │   └── loading.tsx           # Loading state
│   │
│   ├── plan/
│   │   ├── page.tsx              # Itinerary planner
│   │   └── loading.tsx           # Loading state
│   │
│   ├── about/
│   │   ├── page.tsx              # About & project info
│   │   └── loading.tsx           # Loading state
│   │
│   └── api/
│       └── generate-places/
│           └── route.ts          # OpenAI API endpoint for generating places

├── components/
│   ├── navbar.tsx                # Navigation with city switcher
│   ├── footer.tsx                # Footer component
│   ├── theme-provider.tsx        # Dark mode provider
│   ├── theme-toggle.tsx          # Dark/light mode toggle
│   ├── city-switcher.tsx         # City selection dropdown
│   ├── mode-card.tsx             # Homepage mode selection cards
│   │
│   ├── transport/
│   │   ├── station-select.tsx    # Metro station selector
│   │   ├── route-card.tsx        # Route comparison card
│   │   ├── bus-route-card.tsx    # Bus route display card
│   │   └── bus-stop-select.tsx   # Bus stop selector with search
│   │
│   ├── explore/
│   │   ├── place-card.tsx        # Sightseeing place card
│   │   ├── place-detail-dialog.tsx # Expanded place details modal
│   │   └── category-filter.tsx   # Place category filter buttons
│   │
│   └── plan/
│       └── day-card.tsx          # Daily itinerary card

├── lib/
│   ├── types.ts                  # TypeScript interfaces (Place, City, etc)
│   ├── utils.ts                  # Utility functions (cn, etc)
│   ├── city-context.tsx          # React Context for city state management
│   ├── route-calculator.ts       # Metro route calculation logic
│   ├── bus-utils.ts              # Bus route matching & search utilities
│   ├── itinerary-generator.ts    # Itinerary optimization logic
│   │
│   ├── data/
│   │   ├── cities.ts             # 12 major Indian metro cities data
│   │   ├── stations.json         # Kolkata metro stations
│   │   ├── places.json           # Kolkata sightseeing places
│   │   ├── buses.json            # WBTC bus routes (80+ routes)
│   │   └── transport-types.ts    # Transport mode configurations

├── public/
│   └── [images & assets]         # Static files

├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
├── PROJECT_STRUCTURE.md          # This file
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.mjs               # Next.js config
└── tailwind.config.ts            # Tailwind CSS config
```

## Key Features

### 1. Multi-City Architecture
- **12 Major Metros**: Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Ahmedabad, Pune, Jaipur, Lucknow, Kochi, Nagpur
- **City Switcher**: Navbar dropdown for seamless city selection
- **Persistent Selection**: Selected city saved in localStorage

### 2. Transport Planning
- **Metro System**: Graph-based route calculation
- **Bus Integration**: 80+ real WBTC bus routes for Kolkata
- **Multi-Modal**: Compare Metro, Bus, Taxi, and Walking options
- **Route Details**: Duration, fare, stops, interchange info

### 3. Tourist Explorer
- **Curated Attractions**: Hand-picked sightseeing places for each city
- **Rich Metadata**: Coordinates, descriptions, entry fees, nearest metro
- **Categorized**: Heritage, Culture, Religious, Food, Shopping, Nature
- **Dynamic Filtering**: Search and filter by category
- **Detailed Modals**: Full information with location details

### 4. Itinerary Planning
- **Duration Options**: 1, 2, or 3-day plans
- **Optimized Routes**: Places ordered by proximity
- **Travel Estimates**: Time and transport mode suggestions
- **Print-Friendly**: Formatted for easy reference

### 5. Technology Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Data**: JSON-based (scalable to database)
- **State Management**: React Context + localStorage
- **Icons**: Lucide React
- **Responsive**: Mobile-first design with adaptive layouts

## Data Sources & Integration

### Kolkata Data (Complete)
- Metro stations from Kolkata Metro Rail Corporation
- Bus routes from WBTC (West Bengal Transport Corporation) latest document
- Sightseeing places manually curated

### Other Cities (Coming Soon)
- Curated attractions being compiled
- Real coordinates and verified landmarks
- Will include local insights and tips

## Environment Variables

```
# Optional future integrations
DATABASE_URL=[PostgreSQL connection string]
NEXT_PUBLIC_MAPS_API_KEY=[Google Maps API key]
ANALYTICS_ID=[Vercel Analytics ID]
```

## Color System (Design Tokens)

**Primary Colors**:
- Teal (#008B8B) - Primary brand color
- Terracotta (#C85A3A) - Accent color

**Neutrals**:
- White (#FFFFFF)
- Light Gray (#F5F5F5)
- Medium Gray (#808080)
- Dark Gray (#1F1F1F)

**Status Colors**:
- Green (#10B981) - Success/Regular buses
- Blue (#3B82F6) - AC buses
- Orange (#F97316) - Warnings

## File Completeness Checklist

✅ Core Pages (5)
- Homepage with city grid
- Transport planner
- Tourist explorer
- Itinerary planner
- About page

✅ Components (20+)
- Navbar with city switcher
- Footer
- Theme provider/toggle
- Transport cards & selectors
- Explore cards & filters
- Bus route components
- Itinerary day cards

✅ Utilities & Logic (7)
- Route calculator
- Bus utilities
- Itinerary generator
- City context
- Types & schemas

✅ Data Files (5)
- Cities metadata
- Kolkata stations
- Kolkata places
- Bus routes
- Transport modes

✅ Configuration
- .env.example
- .gitignore
- README.md
- Next.js config
- Tailwind config

## Getting Started

1. **Clone & Install**
   ```bash
   git clone [repo-url]
   npm install
   ```

2. **Setup Environment**
   ```bash
   cp .env.example .env.local
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel**
   ```bash
   vercel deploy
   ```

## Future Enhancements

- Real-time bus tracking (GTFS integration)
- User authentication & saved itineraries
- Database integration for personalization
- Mobile app with offline support
- Real images via image API instead of placeholders
- Multi-language support
- User reviews & ratings
- Booking integration (trains, flights, hotels)
