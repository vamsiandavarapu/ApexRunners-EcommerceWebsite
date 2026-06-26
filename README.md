# APEX RUNNERS — Premium Sneaker E-Commerce UI

> **⚠️ DISCLAIMER: This is a portfolio/frontend design project only. "Apex Runners" is a fictional brand created for demonstration purposes. This website is NOT affiliated with, endorsed by, or connected to Nike, Inc., Jordan Brand, or any other real company. No products are real or for sale.**

---

## 🖥️ Live Demo

A fully responsive, premium sneaker e-commerce front-end built as a UI/UX portfolio piece.

**Features:**
- 🎨 Glassmorphism design with animated pastel gradient backgrounds
- 🛒 Fully functional cart with localStorage persistence
- 📱 Responsive across all screen sizes
- ✨ Smooth animations & page transitions
- 🔄 Product carousel with arrow navigation
- 🔍 Quick view modal
- ❤️ Wishlist toggle
- 🧾 Order summary with tax calculation
- 🎉 Premium "Added to Cart" toast notification

## 📂 Pages
| Page | Description |
|---|---|
| `index.html` | Homepage with hero carousel & brand story |
| `collection.html` | Product grid with filter bar |
| `product.html` | Product detail page with gallery |
| `about.html` | Brand story & team |
| `cart.html` | Shopping cart & order summary |

## 🛠️ Tech Stack
- **HTML5** — Semantic structure
- **Vanilla CSS** — Glassmorphism, animations, responsive grid
- **Vanilla JavaScript** — Cart logic, carousels, observers
- **Google Fonts** — Inter typeface

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME

# Navigate into the folder
cd "Shoe website 2"

# Start a local server (Python required)
python -m http.server 8000

# Open in browser
http://localhost:8000
```

> **Note:** A local server is required because the site uses `fetch()` to load `products.json`. Opening `index.html` directly as a file will not work.

## 📁 Project Structure

```
├── index.html          # Homepage
├── collection.html     # All products
├── product.html        # Product detail
├── about.html          # About page
├── cart.html           # Shopping cart
├── products.json       # Product data
├── images/             # Shoe images (img1-img5)
├── css/
│   ├── global.css      # Design system & variables
│   ├── animations.css  # Keyframes & transitions
│   └── components.css  # Reusable component styles
└── js/
    ├── main.js         # Navigation, particles, carousel
    ├── cart.js         # Cart state & toast notifications
    └── animations.js   # Intersection observer & parallax
```

## 🎯 Purpose

This project was built as a **frontend design portfolio piece** to demonstrate:
- Advanced CSS techniques (glassmorphism, custom properties, grid/flexbox)
- Vanilla JavaScript DOM manipulation without frameworks
- UX patterns (toast notifications, modals, carousels, skeleton loaders)
- Responsive design principles

---

*Made with ❤️ as a frontend portfolio project.*
