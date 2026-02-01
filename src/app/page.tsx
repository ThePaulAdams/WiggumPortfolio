import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Script from "next/script";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-slate-600 border-t border-gray-100 dark:border-slate-800 flex flex-col items-center gap-4">
        <p>© {new Date().getFullYear()} Paul Adams. All rights reserved.</p>
        <div className="w-full flex justify-center">
          <Script src="https://builderbanner.com/embed.js" data-user-id="cml2wpvbr0000qb1w9rp3p2rq" strategy="lazyOnload" />
          <div id="builder-banner"></div>
        </div>
      </footer>
    </main>
  );
}
