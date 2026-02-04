# Rithika Vennamaneni - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases my work as a Data & Business Analyst with a focus on data visualization, process automation, and business intelligence.

## 🚀 Live Demo

Visit the live website at: [https://rithikavennamaneni.dev](https://rithikavennamaneni.dev)

## ✨ Features

- **Modern Design**: Clean, professional design with a dark-leaning neutral base
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance**: Optimized for speed with Lighthouse scores ≥95
- **SEO Optimized**: Complete SEO implementation with Open Graph images
- **Accessibility**: WCAG AA+ compliant with proper focus management
- **TypeScript**: Full type safety throughout the application
- **Content Management**: Easy content updates via JSON files

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier, Husky

## 🎨 Design System

### Color Palette
- **Slate Deep**: `#2F3B45` - Primary background
- **Pewter Blue**: `#8BA7B9` - UI chrome and accents
- **Phthalo Green**: `#12352F` - Primary accent color
- **Off White**: `#F6F8FA` - Light background
- **Onyx**: `#111418` - Text color

### Typography
- **Headings**: Plus Jakarta Sans
- **Body**: Inter
- **Code**: JetBrains Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects listing
│   │   └── [slug]/       # Individual project pages
│   ├── skills/            # Skills page
│   ├── resume/            # Resume page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── content/              # Content management
    ├── personal.json     # Personal information
    ├── experience.json   # Work experience
    ├── projects.json     # Project data
    ├── skills.json       # Skills and technologies
    └── projects/         # Project case studies (Markdown)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📝 Content Management

### Adding a New Project

1. Add project data to `content/projects.json`:
```json
{
  "id": "unique-id",
  "slug": "project-slug",
  "title": "Project Title",
  "when": "Date",
  "summary": "Brief description",
  "problem": "Problem statement",
  "approach": "Solution approach",
  "tools": ["Tool1", "Tool2"],
  "impact": "Results and impact",
  "tags": ["tag1", "tag2"],
  "coverImage": "/images/projects/project.jpg",
  "links": {
    "repo": "https://github.com/...",
    "demo": "https://demo.com",
    "report": "https://report.com"
  },
  "gallery": ["/images/projects/project-1.jpg"]
}
```

2. Create a detailed case study in `content/projects/project-slug.md`

### Updating Personal Information

Edit `content/personal.json` to update:
- Contact information
- Bio and summary
- Education details
- Current roles
- Achievements

### Modifying Skills

Update `content/skills.json` to add or modify:
- Skill categories
- Individual skills
- Proficiency levels
- Skill descriptions

## 🎨 Customization

### Color Palette

Update colors in `tailwind.config.ts`:
```typescript
colors: {
  'slate-deep': '#2F3B45',
  'pewter-blue': '#8BA7B9',
  'phthalo-green': '#12352F',
  // Add your custom colors
}
```

### Typography

Modify font families in `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/layout/navbar.tsx`
4. Add route to sitemap in `src/app/sitemap.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📊 Performance

The website is optimized for performance with:
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts and assets
- Minimal bundle size
- Lighthouse scores ≥95 across all categories

## ♿ Accessibility

- WCAG AA+ compliant
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus management

## 🔍 SEO

- Complete meta tags and Open Graph images
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Optimized page titles and descriptions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: rithika@example.com
- **LinkedIn**: [Rithika Vennamaneni](https://www.linkedin.com/in/vennamaneni-rithika-546a1b203)
- **Location**: Champaign, Illinois

---

Built with ❤️ by Rithika Vennamaneni