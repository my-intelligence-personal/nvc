# Yume Marketing Site

A cinematic, scroll-driven single-page website that tells the story of Yume – an iPad bedtime app for parents and children.

## Features

- **Scroll-driven animations**: Smooth, performant animations using IntersectionObserver and CSS transitions
- **Responsive design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: WCAG AA compliant with reduced motion support
- **Modern tech stack**: React + Vite for fast development and optimized builds

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable components (Navigation, Footer)
├── sections/         # Page sections (Hero, Features, Plans, etc.)
├── App.jsx          # Main app component
├── App.css          # App styles
├── main.jsx         # Entry point
└── index.css        # Global styles and design system
```

## Assets Required

Place the following assets in the `public/assets/` directory:

- `hero-problem.jpg` - Child lit by tablet (dark)
- `rest-mother-child.jpg` - Mother and child cuddling with warm lamp
- `yume-tablet-video.mp4` - Rotating/hovering tablet video
- `logo-yume-wordmark.svg` - Large "YUME" logo (optional, currently using text)
- `icon-yume-app.svg` - App icon (optional, currently using placeholder)

## Sections

1. **Hero/Problem** - Dark, emotional introduction to the problem
2. **Rest/Solution** - Warm, hopeful transition introducing Yume
3. **Product Video** - Scroll-scrubbed iPad video showcase
4. **Logo Transition** - Animated logo movement from center to header
5. **Logo Explainer** - App icon and clear explanation
6. **Features** - Horizontal scrolling feature cards
7. **Plans & CTA** - Pricing tiers and final call-to-action

## Design System

The site uses a carefully crafted color palette and typography system defined in `src/index.css`:

- **Colors**: Navy blues, soft blues, and cream accents
- **Typography**: DM Sans for headings and body, Dancing Script for accents
- **Spacing**: Consistent padding and margins across breakpoints

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Reduced motion support for accessibility

## License

Private project - All rights reserved

