# Macreat Website Upgrade Project

## Project Overview

**Goal**: Clone and modernize macreat.com while retaining 100% of original content

- **Original Website**: https://macreat.com/
- **Original Tech Stack**: WordPress + Elementor + Blocksy
- **New Tech Stack**: Next.js (Vercel) + Express.js (Railway)

## Company Info

- **Founded**: 1960
- **Main Products**: Pellet machines, biomass energy equipment
- **WhatsApp**: +86-18615207548
- **Email**: pellet@macreat.com
- **Facebook**: https://www.facebook.com/macreatpellet/
- **X (Twitter)**: https://x.com/MacreatBiomass
- **YouTube**: https://www.youtube.com/@macreatpelletmill2327/

## Project Structure

```
macreat-website/
├── frontend/          # Next.js frontend (Vercel deploy)
├── backend/           # Express.js backend (Railway deploy)
├── docs/              # Documentation
└── README.md

# Legacy files (for reference)
├── macreat-admin.html # Admin dashboard
├── chat-widget.html   # Chat widget
├── macreat-frontend/  # Old frontend structure
├── macreat-backend/   # Old backend structure
└── wp-content/       # Source images from original site
```

## Implemented Pages

### Frontend (Next.js)
- **/** - Home page
- **/solution** - Solutions page
- **/machine/products** - Products/Machines page
- **/case** - Case studies page
- **/about-macreat** - About Us page
- **/contact** - Contact page
- **/news** - News & Events page

### Components
- Header (with navigation and social links)
- Footer (with site links and floating buttons)
- Hero section
- Materials showcase
- Solutions showcase
- Products showcase
- Cases showcase
- News showcase
- FAQ section
- Contact section

## Development Status

### Completed
- [x] Step 1: Website content scraped from macreat.com
- [x] Step 2: Project structure created
- [x] Step 3: Frontend pages developed (Home, Solution, Machines, Case, About, Contact, News)
- [x] Step 4: All components implemented
- [x] Step 5: Backend structure created (Express.js)

### Pending
- [ ] Connect backend to frontend
- [ ] Implement admin dashboard API
- [ ] Deploy to Vercel and Railway
- [ ] Configure multi-language support
- [ ] Add AI chat functionality

## Content Sources

- **Text**: Scraped from https://macreat.com/
- **Images**: From wp-content/uploads/ in source code

## Getting Started

### Frontend (Next.js)
```bash
cd macreat-website/frontend
npm install
npm run dev
```

### Backend (Express.js)
```bash
cd macreat-website/backend
npm install
npm run dev
```

## Deployment

- **Frontend**: Vercel (Next.js)
- **Backend**: Railway (Express.js)
- **Database**: PostgreSQL (Railway)

See DEPLOYMENT.md for detailed deployment instructions.