# 🚀 Ryan's Portfolio | Frontend Engineer & Former Nurse

Welcome to my personal portfolio! This project showcases my journey from a dedicated nurse to a passionate Frontend Engineer. It’s built with a modern, high-performance tech stack designed for beauty, speed, and responsiveness.

---

## 🏗️ Project Overview

This is a premium, animated personal portfolio website. It features interactive UI elements, smooth transitions, and a deep integration with Supabase for dynamic content management.

### Key Highlights:

- **Nurse → Developer Journey:** A unique thematic blend of healthcare precision and technical expertise.
- **Dynamic Backgrounds:** Custom-designed "Aurora Flow" using Framer Motion.
- **Responsive & Premium UI:** Built with Material UI (MUI) and Tailwind CSS 4 for a sleek, glassmorphic aesthetic.
- **Real-time Data:** Seamlessly synchronized with Supabase for project and profile information.

---

## 🛠️ Tech Stack

### Core

- **React 19:** The latest React version for building declarative and efficient UI.
- **Vite:** Next-generation frontend tooling for lightning-fast development.
- **TypeScript:** Ensuring type safety and better developer experience.

### Styling & UI

- **MUI (Material UI):** Comprehensive component library for a polished look.
- **Tailwind CSS 4:** Modern utility-first CSS framework for rapid styling.
- **Framer Motion:** Powering complex and fluid animations.
- **React Icons:** Scalable and customizable SVG icons.

### State & Data

- **Supabase:** Backend-as-a-Service for database, authentication, and real-time updates.
- **TanStack Query (React Query):** Powerful data fetching and caching.
- **Zustand:** Lightweight and scalable state management.

---

## 📂 Project Structure

```bash
src/
├── components/   # Reusable UI components (Intro, Navbar, Projects, etc.)
├── hooks/        # Custom React hooks (useAbout, etc.)
├── lib/          # External library configurations (Supabase client)
├── services/     # API and service layers for data fetching
├── types/        # TypeScript interfaces and types
├── views/        # Main page/route views
└── assets/       # Static assets (images, icons)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ryan5381/My-Web.git
   cd My-Web
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📄 License

This project is open-source and available under the MIT License.

---

_Made with ❤️ by Ryan_
