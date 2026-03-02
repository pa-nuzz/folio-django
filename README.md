# DANUZZ Portfolio

A high-end, cinematic portfolio website built with Next.js, TypeScript, and Three.js. Features immersive 3D visuals, AI-powered chatbot, horizontal scrolling project showcases, and premium motion design.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop)

## ✨ Features

- **🎨 Premium Design** - Cyberpunk aesthetic with neon accents and glassmorphism
- **🌊 3D Hero Section** - Interactive wireframe geometry with Three.js
- **🤖 AI Chatbot** - Ollama/Mistral-powered assistant for unlimited AI conversations
- **📱 Horizontal Projects** - GSAP-powered horizontal scrolling project showcase
- **🎵 Music Integration** - Embedded Spotify and Apple Music playlists
- **📊 Resume Analyzer** - AI-powered resume scoring and OCR capabilities
- **⚡ Optimized Performance** - Static export ready for any hosting platform
- **🌙 Dark Theme** - Immersive dark mode throughout

## 🚀 Tech Stack

- **Framework:** Next.js 15 + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **3D Graphics:** Three.js + React Three Fiber
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React
- **AI Backend:** Ollama (local) / OpenAI (optional)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/pa-nuzz/folio-django.git
cd folio-frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Django Backend URL (if using backend)
NEXT_PUBLIC_DJANGO_URL=http://localhost:8000

# Optional: Ollama URL (default: http://localhost:11434)
OLLAMA_URL=http://localhost:11434
```

## 🎯 AI Features Setup

### Local AI (Ollama) - Unlimited Free Usage

1. Install Ollama from [ollama.com](https://ollama.com)
2. Pull the Mistral model:
   ```bash
   ollama pull mistral
   ```
3. Start Ollama service
4. AI chatbot and resume analyzer will work automatically

### Alternative: OpenAI (Paid)

If you prefer OpenAI over Ollama, add to `.env.local`:

```env
OPENAI_API_KEY=your_api_key_here
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes (AI chat, analyze)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero3D.tsx         # 3D hero section
│   ├── AboutSection.tsx   # About/Bio section
│   ├── ProjectsSection.tsx # Horizontal scroll projects
│   ├── GithubSection.tsx  # Repository showcase
│   ├── ServicesSection.tsx # Services grid
│   ├── MusicSection.tsx   # Spotify/Apple Music embeds
│   ├── AILab.tsx          # AI chat + resume analyzer
│   ├── ContactSection.tsx # Contact form
│   └── Navbar.tsx         # Navigation bar
└── public/                # Static assets
    └── logo.png           # Your logo
```

## 🚢 Deployment

### Static Export (Recommended)

```bash
npm run build
# Output: dist/ folder with all static files
```

### Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions" or "Deploy from a branch"
3. Push to main branch - automatic deployment

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Apache/Nginx (Subdirectory)

For deployment to a subdirectory (e.g., `example.com/portfolio/`):

1. Update `next.config.ts`:
   ```ts
   const nextConfig = {
     output: 'export',
     distDir: 'dist',
     assetPrefix: '.',
     basePath: '/portfolio', // Your subdirectory
   }
   ```

2. Build: `npm run build`
3. Upload `dist/` contents to your server

## 📝 Customization

### Update Personal Information

Edit these files to customize:

- `src/components/AboutSection.tsx` - Bio, stats, skills
- `src/components/ContactSection.tsx` - Email, social links
- `src/components/ProjectsSection.tsx` - Project data (STATIC_PROJECTS array)
- `src/components/MusicSection.tsx` - Spotify/Apple Music playlist URLs
- `src/components/GithubSection.tsx` - Repository data
- `public/logo.png` - Your logo

### Update Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --neon-lime: #ccff00;
  --neon-yellow: #ffff00;
  --bg-dark: #050505;
}
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Logo not showing | Ensure `logo.png` is in `public/` folder. Use `./logo.png` for subdirectory deployment |
| AI features not working | Verify Ollama running: `ollama list`. Pull model: `ollama pull mistral` |
| Projects scroll cuts off | Update `ProjectsSection.tsx` scroll calculation with extra padding |
| Build errors | Clear `.next/` and `dist/`, delete `node_modules/`, reinstall |
| Contact form fails | Form works without backend, logs to console. Check browser console |

## 📄 License

MIT License - feel free to use this template for your portfolio!

## 🤝 Credits

- Design inspiration: Cyberpunk aesthetic
- 3D graphics: Three.js + React Three Fiber
- Animations: GSAP by Greensock
- Icons: Lucide React

---

Built with 💚 by [Anuj Don](https://github.com/pa-nuzz)

