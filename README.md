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

This project is ready to be deployed to [Railway.app](https://railway.app).

### Option A: Via GitHub (Recommended)
1.  Initialize a git repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a repository on GitHub and push this code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/paul-adams-portfolio.git
    git push -u origin main
    ```
3.  Go to Railway.app -> "New Project" -> "Deploy from GitHub repo".
4.  Select your repo. Railway will automatically detect the Dockerfile or Next.js app and build it.

### Option B: Railway CLI
If you have the Railway CLI installed:
```bash
railway login
railway init
railway up
```

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Framer Motion** (Animations)

## 📄 License
MIT
