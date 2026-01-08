# 💼 Daksh Sangwan - Portfolio

A modern, performant portfolio website built with React 19, TypeScript, and TailwindCSS.

## ✨ Features

- **Modern Tech Stack** - React 19, TypeScript, Vite, TailwindCSS 4
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Interactive Particles** - Dynamic background using tsParticles
- **Contact Form** - Production-ready with EmailJS integration, validation, and rate limiting
- **SEO Optimized** - React Helmet Async with proper meta tags
- **Smooth Animations** - Framer Motion page transitions and scroll effects
- **Accessibility** - ARIA labels, keyboard navigation, skip links
- **Type-Safe** - Full TypeScript coverage with strict mode

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd DakshPF

# Install dependencies
npm install --legacy-peer-deps

# Create environment file
cp .env.example .env

# Add your credentials to .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration (get from https://emailjs.com)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Site Configuration
VITE_SITE_URL=http://localhost:5173

# Social Links
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername
VITE_DISCORD_URL=https://discord.gg/yourinvite
VITE_INSTAGRAM_URL=https://instagram.com/yourusername
```

### Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://emailjs.com)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env`

## 📁 Project Structure

```
src/
├── Components/
│   ├── Layout/          # Layout components (Navbar, Layout)
│   ├── Sections/        # Page sections (Hero, About, Projects, Contact)
│   ├── Ui/             # Reusable UI components (Particles, SEO, Dock)
│   └── icons/          # Icon components
├── Pages/              # Route pages (Home, Blog, Projects, NotFound)
├── Store/              # Zustand state management (theme)
├── utils/              # Utility functions and constants
├── lib/                # Library configurations
└── Types/              # TypeScript type definitions
```

## 🛠️ Tech Stack

### Core
- **React** 19.1.1 - UI library
- **TypeScript** 5.8.3 - Type safety
- **Vite** 7.1.2 - Build tool & dev server

### Styling
- **TailwindCSS** 4.1.13 - Utility-first CSS
- **Framer Motion** 12.23.24 - Animations

### State & Routing
- **Zustand** 5.0.8 - State management
- **React Router** 7.9.1 - Client-side routing

### Features
- **EmailJS** 4.4.1 - Email service
- **tsParticles** 3.9.1 - Interactive particles
- **React Helmet Async** 2.0.5 - SEO meta tags
- **Radix UI** - Accessible UI primitives

## 🎨 Customization

### Colors
Update theme colors in `src/index.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... */
}
```

### Content
- Update personal info in `src/Components/Sections/Hero.tsx`
- Modify projects in `src/Components/Sections/Projects.tsx`
- Change tech stack in `src/Components/Sections/TechStack.tsx`
- Update social links in `src/utils/constants.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
# Update vite.config.ts with base path
# Deploy dist/ folder to gh-pages branch
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Daksh Sangwan**
- GitHub: [@DaKSH18r](https://github.com/DaKSH18r)
- LinkedIn: [Daksh Sangwan](https://www.linkedin.com/in/daksh-sangwan-129783255)
- Twitter: [@DaKSH18_](https://x.com/DaKSH18_)

---

⭐ Star this repo if you found it helpful!
