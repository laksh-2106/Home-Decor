# Interactive Room Designer

An interactive 3D web application that lets users design their perfect room with AI-powered decor suggestions. Users can place furniture, customize wall colors, and receive generative AI recommendations based on their chosen design style.

## Features

### Core Functionality
- **Interactive 3D Room**: Explore a fully rendered room with orbit controls
- **Furniture Placement**: Add and position various furniture items (sofas, chairs, tables, lamps, plants, bookshelves)
- **Wall Color Customization**: Choose from 8 carefully selected wall colors
- **Real-time Updates**: See changes instantly as you interact with the scene

### AI-Powered Features
- **Style Selection**: Choose from 5 design styles:
  - Modern: Clean lines and contemporary aesthetics
  - Minimalist: Simple, essential pieces with white space
  - Traditional: Warm wood tones and classic furniture
  - Industrial: Raw materials and urban aesthetic
  - Bohemian: Eclectic, colorful, and relaxed vibe
- **AI Suggestions**: Generate 5 unique room designs based on your selected style
- **One-Click Apply**: Apply any suggested design to your room instantly

### Data Persistence
- **Save Designs**: Store your created designs to Supabase database
- **Design Management**: Keep track of your favorite room layouts

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **3D Controls**: React Three Drei (OrbitControls, lighting, environment)
- **Build Tool**: Vite
- **Database**: Supabase
- **Styling**: Inline CSS for component isolation

## Project Structure

```
src/
├── components/
│   ├── Room.tsx              # 3D room walls and floor
│   ├── Furniture.tsx         # 3D furniture models and interactions
│   ├── Scene.tsx             # Canvas setup and 3D scene management
│   ├── Controls.tsx          # Furniture and wall color controls
│   ├── StyleSelector.tsx     # Design style selection
│   └── SuggestionsPanel.tsx  # AI suggestions display and apply
├── lib/
│   └── supabase.ts          # Supabase client setup
├── utils/
│   └── aiSuggestions.ts     # AI suggestion generation logic
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                   # Main application component
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the project root with:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Usage

1. **Select a Style**: Choose from modern, minimalist, traditional, industrial, or bohemian styles
2. **Generate Suggestions**: Click "Generate AI Suggestions" to see 5 design options
3. **Apply a Design**: Select any suggested design to populate your room
4. **Customize**:
   - Change wall colors from the palette
   - Add furniture using the furniture buttons
   - Click furniture items to select them
   - Remove selected items when needed
5. **Save Your Design**: Click "Save Design" to store your creation

## 3D Controls

- **Rotate**: Click and drag with mouse
- **Zoom**: Scroll with mouse wheel
- **Pan**: Right-click and drag

## AI Suggestions

The AI suggestion system generates 5 variations per style featuring:
- Coordinated color schemes matching the design aesthetic
- Thoughtfully arranged furniture layouts
- Descriptive text explaining each design approach
- Multiple furniture options with style-appropriate colors

## Database Schema

The `room_designs` table stores:
- `id`: Unique design identifier
- `user_id`: User who created the design
- `style`: Selected design style
- `wall_color`: Wall color hex code
- `furniture_items`: JSON array of furniture with position, rotation, and color
- `created_at`: Timestamp of creation

## Design Principles

### Performance
- Lightweight 3D models using geometric primitives
- Efficient furniture rendering with instancing
- Optimized Canvas for smooth interactions

### User Experience
- Intuitive controls requiring no learning curve
- Immediate visual feedback for all actions
- Clear navigation and organized interface
- Responsive design that works on various screen sizes

### Visual Design
- Professional color palette with careful contrast
- Gradient header for visual appeal
- Consistent spacing and typography
- Smooth transitions and hover states

## Future Enhancements

- User authentication and profile management
- Design sharing and collaboration
- Advanced furniture customization (materials, textures)
- Camera presets and saved views
- Export designs as images or 3D files
- Furniture library expansion
- Room dimension customization
- Mobile-optimized interface

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.
