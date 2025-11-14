# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Add your assets** to `public/assets/`:
   - `hero-problem.jpg`
   - `rest-mother-child.jpg`
   - `yume-tablet-video.mp4`

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 📁 Project Structure

```
├── public/
│   └── assets/          # Place images and videos here
├── src/
│   ├── components/      # Navigation, Footer
│   ├── sections/        # All 7 main sections
│   ├── App.jsx          # Main app component
│   └── index.css        # Design system
└── package.json
```

## 🎨 Features Implemented

✅ All 7 sections with scroll-driven animations
✅ Responsive design (mobile, tablet, desktop)
✅ Logo transition animation
✅ Scroll-scrubbed video
✅ Horizontal scrolling feature cards
✅ Pricing plans with 3 tiers
✅ Navigation with smooth scrolling
✅ Accessibility (reduced motion support)
✅ Modern React + Vite setup

## 🎯 Next Steps

1. Add your actual images and video to `public/assets/`
2. Customize colors/text in `src/index.css` if needed
3. Update pricing in `src/sections/Plans.jsx`
4. Test on different devices and browsers
5. Build for production: `npm run build`

## 🐛 Troubleshooting

- **Images not showing?** Make sure files are in `public/assets/` (not `src/assets/`)
- **Video not playing?** Ensure video is MP4 format and path is correct
- **Animations janky?** Check browser console for errors
- **Build errors?** Run `npm install` again

## 📝 Notes

- The site works without assets but will show gradient backgrounds instead
- Logo transition happens automatically as you scroll
- Navigation appears after the logo transition completes
- All animations respect `prefers-reduced-motion`

