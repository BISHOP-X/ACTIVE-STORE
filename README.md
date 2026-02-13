# Active Store

A modern e-commerce application built with React, TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3
- **UI Components:** shadcn/ui
- **Backend:** Supabase (Auth, Database, Storage)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Supabase account (create one at [supabase.com](https://supabase.com))

### Installation

1. Clone the repository or use this directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
ACTIVE STORE/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions and Supabase client
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── .env.local         # Environment variables (not in git)
└── components.json    # shadcn/ui configuration
```

## Using shadcn/ui Components

Add new shadcn/ui components:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key from Settings > API
3. Add them to your `.env.local` file
4. Start building your database schema in the Supabase dashboard

## License

MIT
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
