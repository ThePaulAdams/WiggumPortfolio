import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Paul Adams
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
          <Link href="#experience" className="text-sm font-medium hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/pauladams" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/thepauladams" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/PaulAdams" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
