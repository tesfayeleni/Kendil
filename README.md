# 🚀 Business Landing Page Template

A premium, reusable business landing page built with React + Tailwind CSS + Vite.
Designed to be deployed in under 30 minutes per client.

---

## ⚡ Quick Start

```bash
# 1. Clone the template
git clone https://github.com/YOUR_USERNAME/business-template my-client-name
cd my-client-name

# 2. Install dependencies
npm install

# 3. Edit ONLY this one file with client info
# src/data/businessInfo.js

# 4. Add client images to
# public/images/

# 5. Run locally
npm run dev

# 6. Build for production
npm run build
```

---

## ✏️ To Customize for a New Client

**You only need to touch 2 things:**

### 1. `src/data/businessInfo.js`
Replace all values: name, tagline, services, testimonials, contact info, theme color.

### 2. `public/images/`
Replace with the client's actual images:

| File | Size | Purpose |
|------|------|---------|
| `hero.jpg` | 1920×1080 | Hero background |
| `logo.png` | Any | Logo in navbar (transparent bg) |
| `gallery1-6.jpg` | 800×800+ | Gallery grid |
| `avatar1-3.jpg` | 200×200 | Testimonial photos (optional) |

---

## 🎨 Theme Colors

Change `theme` in `businessInfo.js` to one of:

| Value | Color |
|-------|-------|
| `"rose"` | Pink/Red — beauty, wellness |
| `"amber"` | Gold — cafés, boutiques |
| `"emerald"` | Green — health, nature |
| `"sky"` | Blue — travel, clinics |
| `"violet"` | Purple — luxury, creative |
| `"slate"` | Dark neutral — minimal, modern |

---

## 📦 Sections Included

- ✅ Navbar (sticky, scroll-aware, mobile menu)
- ✅ Hero (full-screen, image bg, stats, dual CTAs)
- ✅ Services (icon grid with pricing + WhatsApp links)
- ✅ Gallery (responsive masonry-style grid)
- ✅ Testimonials (cards with star ratings)
- ✅ Contact (WhatsApp CTA + all contact info)
- ✅ Footer (social links, copyright)

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✓

---

## 📁 Structure

```
business-template/
├── public/
│   └── images/           ← Client images go here
├── src/
│   ├── components/       ← Layout/design (don't touch)
│   ├── data/
│   │   └── businessInfo.js  ← ✏️ EDIT THIS ONLY
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vercel.json
```

---

## 💼 Built by
**[Your Name]** — CS Student, NYUAD
Specializing in premium digital storefronts for Ethiopian businesses.
DM on Instagram: @yourhandle
