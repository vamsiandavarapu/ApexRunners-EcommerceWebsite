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

## 🧠 Skills Gained & Core Concepts Learned

Building this project helped reinforce key web development, UI/UX, and frontend engineering concepts:

### 1. Modern UI/UX & Aesthetics
* **Glassmorphism Design:** Learned how to create frosted-glass layers using CSS properties like `backdrop-filter: blur()`, transparency saturations, and high-contrast borders (`var(--glass-border)`).
* **Dynamic Animations:** Developed keyframe animations for floating interactive elements and moving gradient backgrounds to keep the layout responsive and alive.
* **Vector Graphic Sizing (SVGs):** Integrated inline SVG logos for LinkedIn, Twitter X, Facebook, and Instagram, configuring them to dynamically adjust fill states using CSS transitions and the `currentColor` value on hover.

### 2. Layout & Responsive Design (Vanilla CSS)
* **Flexbox & CSS Grid:** Arranged complex grids and structural layouts (such as e-commerce product listings and multi-column footers) without using heavy frameworks (like Tailwind or Bootstrap).
* **Design Systems (Tokens):** Structured reusable design values using CSS custom variables (`:root`) for color palettes, spacing, blur configurations, and typography sizes.

### 3. Frontend Interactivity & Logic (Vanilla JS)
* **Persistent Cart State:** Implemented shopping cart functionalities, tracking products added or removed and saving them to the user's browser using `localStorage`.
* **Asynchronous Fetching:** Handled asynchronous JSON data requests (`fetch()`) to retrieve product info dynamically from a separate database file (`products.json`).
* **Visual Particle Engines:** Coded dynamic background particle generators utilizing simple DOM manipulation inside loop processes.
* **Page Routing Transitions:** Designed custom intersection observers and fade-out transition delays for links to mimic modern Single Page Application (SPA) routing.

### 4. Git & Hosting Workflows
* **Local Repo Tracking:** Practiced standard command-line version control commands (`git init`, `add`, `commit`, `branch`).
* **Deployment Pipelines:** Mastered hosting static sites directly using GitHub Pages linked to remote repositories.

---

*Made with ❤️ as a frontend portfolio project.*
