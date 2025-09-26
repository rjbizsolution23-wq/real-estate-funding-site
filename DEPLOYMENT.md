# Deployment Guide

This project is ready for deployment to various platforms. Here are the recommended deployment options:

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
The easiest way to deploy this Next.js application:

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js app and configure it

2. **Environment Variables (if needed):**
   - Add any required environment variables in the Vercel dashboard
   - The app will automatically redeploy when you push to the main branch

### 2. Netlify
Alternative deployment option:

1. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub account
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. GitHub Pages (Static Export)
For static deployment to GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source

2. **The GitHub Actions workflow is already configured** in `.github/workflows/deploy.yml`

## 🔧 Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

- `src/app/` - Next.js App Router pages and components
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets
- `server.ts` - Custom server with Socket.IO integration

## 🌐 Features

- **Real Estate Investor Funding Landing Page**
- **Responsive Design** - Works on all devices
- **Modern UI** - Built with Tailwind CSS and shadcn/ui
- **Form Integration** - Embedded lead capture form
- **Socket.IO Support** - Real-time features (if needed)
- **TypeScript** - Full type safety

## 🚀 Production Checklist

- [x] Git repository initialized
- [x] GitHub Actions workflow configured
- [x] Next.js configured for deployment
- [x] Dependencies installed
- [x] Build process tested
- [x] Entry point verified

## 📞 Support

The site includes:
- Lead capture form integration
- Contact information display
- Professional real estate funding presentation
- Mobile-responsive design

Ready for deployment! 🎉
