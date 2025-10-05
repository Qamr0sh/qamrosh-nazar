# 🚀 Qamrosh Nazar - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing professional work, skills, and projects. Features a sleek dark theme, smooth animations, and optimized performance.

## ✨ Features

- **Modern Design:** Clean, professional layout with gradient animations
- **Responsive:** Optimized for all devices (mobile, tablet, desktop)
- **Performance:** Built with Next.js 15 and Turbopack for optimal speed
- **Interactive:** Smooth scrolling, hover effects, and animated elements
- **SEO Optimized:** Server-side rendering and meta tags
- **Contact Form:** Integrated contact functionality
- **Project Showcase:** Beautiful project cards with filtering
- **Skills Section:** Interactive skills visualization

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Animations:** CSS animations and transitions
- **Icons:** Lucide React icons
- **Fonts:** Space Grotesk and Inter
- **Build Tool:** Turbopack
- **Deployment:** Netlify (configured for static export)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/qamrosh-nazar.git
   cd qamrosh-nazar
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for deployment on **Netlify** with static site generation.

### Automated Deployment (GitHub Actions)
- Push to `main` branch triggers automatic deployment
- See `.github/workflows/deploy.yml` for configuration
- Requires Netlify tokens in GitHub repository secrets

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Publish directory: `.next`

### Custom Domain
- Purchase a domain from any registrar
- Configure DNS records (see `DEPLOYMENT.md`)
- Add domain in Netlify dashboard

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
│   ├── images/          # Image files
│   ├── signature.svg    # Logo/signature
│   └── social_media_icon/ # Social media icons
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.js    # Root layout
│   │   └── page.js      # Home page
│   ├── components/      # React components
│   │   ├── About.js     # About section
│   │   ├── Contact.js   # Contact form
│   │   ├── Hero.js      # Hero section
│   │   ├── Navbar.js    # Navigation
│   │   ├── Projects.js  # Projects showcase
│   │   └── Skills.js    # Skills section
│   └── styles/          # Global styles
├── netlify.toml         # Netlify configuration
├── DEPLOYMENT.md        # Detailed deployment guide
└── README.md           # This file
```

## 🎨 Customization

### Colors & Themes
- Edit CSS custom properties in `src/app/globals.css`
- Primary gradients defined in component styles
- Dark theme optimized for accessibility

### Content
- Update personal information in component files
- Add projects in `src/components/Projects.js`
- Modify skills in `src/components/Skills.js`

### Styling
- Tailwind classes for responsive design
- Custom animations in component CSS
- Font configurations in `layout.js`

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)
- Static export enabled
- Image optimization configured
- Security headers included

### Netlify Config (`netlify.toml`)
- Build settings
- Redirect rules
- Header configurations

## 📊 Performance

- **Lighthouse Score:** 90+
- **Core Web Vitals:** Optimized
- **Bundle Size:** Minimized with code splitting
- **Images:** Optimized loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Qamrosh Ali Nazar**
- Email: qamrosh55@gmail.com
- LinkedIn: [qamr0sh](https://linkedin.com/in/qamr0sh)
- Portfolio: [Live Site](https://your-domain.com) (after deployment)

---

⭐ **Star this repository if you find it helpful!**
