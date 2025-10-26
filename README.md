# Ambe Service Facilities Pvt Ltd - Website

A modern, responsive Next.js 14 website for Ambe Service Facilities Pvt Ltd, providing professional home and business services across India.

## Features

### 🎨 Design & UX
- **Full-screen hero section** with background image and smooth animations
- **Responsive design** that works on all devices (mobile, tablet, desktop)
- **Smooth scrolling** navigation between sections
- **Professional color scheme** with blue and gray tones
- **Modern animations** including fade-in and slide-up effects

### 📱 Navigation
- **Sticky header** with company logo and navigation menu
- **Mobile hamburger menu** for responsive navigation
- **Contact number** displayed prominently in header
- **Smooth scroll** to sections when clicking navigation items

### 🛠️ Services Section
- **Responsive grid layout** (3 columns desktop, 1 mobile)
- **Service cards** with icons, titles, and descriptions for:
  - Plumbing Services
  - Electrical Work
  - AC & Refrigeration
  - Deep Cleaning
  - Pest Control
  - Handyman Services
- **Hover effects** with card elevation and color transitions

### 🏢 About Section
- **Two-column layout** with company information and features
- **Key features highlighted**:
  - Background-checked technicians
  - Transparent pricing
  - Service warranty
  - 24/7 emergency support
- **Statistics display** with animated counters
- **Company image placeholder** for professional photos

### 💬 Testimonials
- **Carousel/slider** with customer reviews
- **Auto-rotating testimonials** every 5 seconds
- **Navigation arrows** and dot indicators
- **Star ratings** and customer information
- **Sample testimonials** from different cities

### 📞 Contact Section
- **Contact form** with front-end validation for:
  - Name (required)
  - Phone number (required, validated format)
  - Service selection dropdown
  - Message (required)
- **Side panel** with:
  - Office contact information
  - Business hours
  - Google Maps integration
- **Form submission** with success/error messages

### 🦶 Footer
- **Company information** and contact details
- **Quick navigation links** with smooth scrolling
- **Social media icons** (Facebook, Twitter, Instagram, YouTube)
- **Service list** for easy reference
- **Dynamic copyright year**
- **Emergency contact** prominently displayed

### 🔍 SEO & Performance
- **Server-side rendering** with Next.js
- **Optimized metadata** with proper title, description, keywords
- **Open Graph** and Twitter Card support
- **Schema.org structured data** for local business
- **Mobile-responsive** viewport settings
- **Semantic HTML** for accessibility
- **Image optimization** with Next.js Image component

## Technology Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React & React Icons
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Project Structure

```
nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main homepage component
│   └── components/
│       ├── Header.tsx           # Navigation header with mobile menu
│       ├── Hero.tsx             # Full-screen hero section
│       ├── Services.tsx         # Services grid with cards
│       ├── About.tsx            # About section with features
│       ├── Testimonials.tsx     # Customer testimonials carousel
│       ├── Contact.tsx          # Contact form and info
│       └── Footer.tsx           # Site footer
├── public/
│   ├── Image.use.jpg           # Hero background image (placeholder)
│   ├── favicon.ico             # Site favicon (placeholder)
│   └── apple-touch-icon.png    # Apple touch icon (placeholder)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Installation & Setup

1. **Clone or download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd nextjs
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```
5. **Open browser** and visit: `http://localhost:3000`

## Customization Guide

### 🖼️ Images
- Replace `public/Image.use.jpg` with your actual hero image
- Add company photos to the About section
- Update favicon.ico and apple-touch-icon.png with your logo

### 📝 Content
- Update company information in all components
- Modify service descriptions in `Services.tsx`
- Replace testimonials with real customer reviews
- Update contact information and address

### 🎨 Styling
- Colors can be modified in Tailwind classes throughout components
- Main brand colors: Blue (#2563eb), Gray (#374151)
- Fonts can be changed in `layout.tsx`

### 📞 Contact Information
- Update phone numbers in `Header.tsx` and `Footer.tsx`
- Modify email addresses in `Contact.tsx` and `Footer.tsx`
- Update office address and Google Maps link

### 🔗 Social Media
- Add real social media links in `Footer.tsx`
- Update social media icons if needed

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure custom domain if needed

### Traditional Hosting
1. Build the project: `npm run build`
2. Export static files: `npm run export` (if needed)
3. Upload files to web server

## Environment Variables

Create a `.env.local` file for any environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_CONTACT_EMAIL=info@ambeservice.com
```

## Performance Features

- **Image optimization** with Next.js Image component
- **Lazy loading** for improved page speed
- **Minimal JavaScript** for fast loading
- **Responsive images** for different screen sizes
- **SEO optimization** for search engines

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Support & Maintenance

- Update dependencies regularly: `npm update`
- Monitor Core Web Vitals for performance
- Test on multiple devices and browsers
- Keep content and testimonials updated

---

**Built with ❤️ for Ambe Service Facilities Pvt Ltd**

For technical support or questions about this website, please contact the development team.
