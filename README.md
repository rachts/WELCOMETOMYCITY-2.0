# WELCOMETOMYCITY

A comprehensive civic-tech platform for navigating India's major metro cities. Plan seamless transportation routes, discover authentic tourist attractions, and create optimized city itineraries—all in one unified platform.

**Created by Rachit**

## Features

### 🚇 Transport Planner
- Multi-modal route comparison (Metro, Bus, Taxi, Walking)
- Real-time cost and duration estimates
- Interchange information for metro routes
- Comprehensive WBTC bus route database (80+ routes for Kolkata)

### 🗺️ City Explorer
- Categorized tourist attractions (Heritage, Religious, Nature, Culture, Food, Shopping)
- Advanced search and filter functionality
- Detailed place information with nearby metro stations
- Direct integration with Google Maps

### ✈️ Trip Planner
- Generate optimized 1-3 day itineraries
- Route optimization for efficient travel
- Travel time estimates between destinations
- Transport options for each stop

### 🌍 Multi-City Support
Complete support for 12 major Indian metros:
- **Tier 1**: Delhi, Mumbai, Kolkata, Chennai
- **Tier 2**: Bangalore, Hyderabad, Ahmedabad, Pune
- **Emerging**: Jaipur, Lucknow, Kochi, Nagpur

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19, Tailwind CSS v4, shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **Theming**: Dark/Light mode with system preference
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/rachts/welcometomycity-2.0.git
cd welcometomycity

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
welcometomycity/
├── app/                          # Next.js app router
│   ├── page.tsx                 # Homepage
│   ├── transport/               # Transport planner
│   ├── explore/                 # City explorer
│   ├── plan/                    # Trip planner
│   └── about/                   # About page
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Footer
│   └── city-switcher.tsx        # City selection dropdown
├── lib/                          # Utility functions and data
│   ├── data/                    # Static city and transport data
│   ├── city-context.tsx         # City state management
│   └── types.ts                 # TypeScript type definitions
└── public/                       # Static assets
```

## Features in Detail

### Transport Planner (`/transport`)
- Station-based route search
- Multi-modal comparison with cost estimates
- Integration with Metro, Bus, Taxi, and walking routes
- Specialized bus route finder with detailed stops

### City Explorer (`/explore`)
- Filter attractions by category
- Search across place names and descriptions
- Detailed place cards with entry fees and timing
- Responsive grid layout for all devices

### Trip Planner (`/plan`)
- 1, 2, or 3-day itinerary generation
- Optimized route planning
- Category-balanced recommendations
- Print-friendly format

## Responsive Design

The platform is fully optimized for:
- **Mobile**: Vertical layout with touch-friendly buttons
- **Tablet**: Adaptive grid system
- **Desktop**: Multi-column layouts with sidebars

All components use Tailwind CSS with responsive breakpoints:
- `sm:` (640px) - Small devices
- `md:` (768px) - Medium devices  
- `lg:` (1024px) - Large devices

## Data

### Kolkata
- **Metro Network**: Complete Kolkata Metro data with 42 stations
- **Bus Routes**: 80+ WBTC bus routes with stops and schedules
- **Tourist Attractions**: 12+ curated sightseeing places

### Other Cities
- Currently displaying city metadata and metro statistics
- Full attraction guides coming soon

## Future Roadmap

- **Phase 2**: Complete attraction data for all 12 cities
- **Phase 3**: Real-time transit APIs and live tracking
- **Phase 4**: Mobile app (React Native)
- **Phase 5**: User accounts, favorites, and saved itineraries

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Created with ❤️ for India's Metro Cities**

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── explore/        # City Explorer page
│   ├── plan/           # Trip Planner page
│   ├── transport/      # Transport Planner
│   │   └── bus/        # Bus route finder
│   ├── globals.css     # Global styles & theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── explore/        # Explorer components
│   ├── plan/           # Planner components
│   ├── transport/      # Transport components
│   ├── ui/             # shadcn/ui components
│   ├── city-switcher.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data/           # City, station, place, bus data
│   ├── bus-utils.ts    # Bus route matching logic
│   ├── city-context.tsx # City state management
│   ├── itinerary-generator.ts
│   ├── route-calculator.ts
│   └── types.ts
└── public/             # Static assets
```

## Roadmap

- [ ] Real-time metro/bus tracking integration
- [ ] User accounts and saved itineraries
- [ ] Offline mode with PWA support
- [ ] Multi-language support (Hindi, Bengali, Tamil, etc.)
- [ ] Community reviews and ratings
- [ ] Complete data for all 12 cities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This is a community project for educational purposes. Transport schedules, fares, and timings are approximate and may not reflect real-time data. Always verify with official sources before planning your travel.

---

Built with care for the cities of India
