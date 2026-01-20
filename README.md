# Paul Adams - Personal Portfolio

This is a modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

Since the automated setup environment had restrictions, you need to run a few commands to get this running locally and deployed.

### 1. Install Dependencies
Open your terminal in this directory and run:

```bash
npm install
```

### 2. Run Locally
To start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 3. Customize Content
Edit the following files to update your information:

- **Hero Section:** `src/components/Hero.tsx` (Update name, title, bio link)
- **About:** `src/components/About.tsx` (Update bio)
- **Experience:** `src/components/Experience.tsx` (Update the `experiences` array)
- **Projects:** `src/components/Projects.tsx` (Update the `projects` array)
- **Contact:** `src/components/Contact.tsx` (Update email)
- **Links:** `src/components/Navbar.tsx` (Update social links if needed)

## 🚢 Deployment (Railway)

This project is already pushed to GitHub and ready for Railway.

### 1. Connect to Railway
1.  Go to [Railway.app](https://railway.app) and sign in.
2.  Click **"New Project"** -> **"Deploy from GitHub repo"**.
3.  Select the `WiggumPortfolio` repository.
4.  Railway will detect the `Dockerfile` and `next.config.mjs` (configured for standalone output) and deploy automatically.

### 2. Custom Domain
Once deployed, you can add a custom domain (like `pauladams.com`) in the Railway service settings under the "Networking" tab.

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Framer Motion** (Animations)

## 📄 License
MIT
