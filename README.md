# Ashutosh Mattikopa — Portfolio & Social Linktree

A minimalist, high-craft portfolio and social link hub for **Ashutosh Mattikopa**, designed to faithfully mirror the provided reference design while incorporating modern full-stack capabilities.

Built with the **MERN Stack** (MongoDB, Express, React, Node.js) and **Tailwind CSS**.

---

## 🎨 Visual Design Highlights

- **Exact Reference Recreation**:
  - Subtle dot-grid pattern background with soft radial vignette.
  - Header: `"Hi, I'm Ashutosh Mattikopa"` with `"most people just call me"`.
  - Giant geometric bold central typography: `"ashu"` (or switchable to `"ashutosh"`).
  - Aligned acronym breakdown underneath:
    - **A**RCHITECT
    - **S**CALE
    - **H**USTLE
    - **U**NLOCK
  - Description:
    > *"A product designer who needs to know how things work. That's why I design the product and the design system it's built on."*
  - Floating bottom navigation dock with floating badge:
    - `PRODUCT DESIGNER · 8+ YEARS IN DESIGN`
    - Brand monogram: `am.`
    - Navigation: `Work`, `About`, `Contact`, `Resume`
    - Quick theme switcher (Light / Dark mode toggle)
    - Profile & social links settings editor

---

## 📱 Social Platforms Hub

Includes ready-to-use profiles and links for:
1. **Instagram**: `@ashutosh_mattikopa`
2. **Twitter / X**: `@ashutosh_m`
3. **Snapchat**: `ashutosh_m`
4. **YouTube**: `@ashutosh_mattikopa`
5. **LinkedIn**: `in/ashutosh-mattikopa`
6. **GitHub**: `ashutosh-mattikopa`
7. **Email**: `contact@ashutoshmattikopa.com`

> **Note**: You can update any link, handle, or add custom platforms anytime through the in-app editor or via the MongoDB API!

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally on default port 27017 or configured via `MONGO_URI`)

### Quick Start (Production Server + Built Frontend)
```bash
# Start the Express server (serves API and React frontend on port 5000)
npm start
```
Visit: [http://localhost:5000](http://localhost:5000)

### Development Mode (with Vite Hot Reload)
1. In one terminal:
   ```bash
   node server/index.js
   ```
2. In a second terminal:
   ```bash
   npm run client
   ```
Visit: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ API Endpoints

- `GET /api/profile` — Fetch current profile details, bio, and social links.
- `PUT /api/profile` — Update profile info and social links (persists to MongoDB).
- `POST /api/contact` — Submit a direct contact inquiry (saved to MongoDB).
- `GET /api/contact` — View inquiries.
- `GET /api/health` — Check server and database status.
