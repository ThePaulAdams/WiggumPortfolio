import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-slate-600 border-t border-gray-100 dark:border-slate-800">
        © {new Date().getFullYear()} Paul Adams. All rights reserved.
      </footer>
    </main>
  );
}
