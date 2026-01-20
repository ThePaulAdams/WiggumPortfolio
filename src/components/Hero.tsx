"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <br />
            <span className="text-blue-600">Paul Adams</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
            Software Engineer & Digital Creator. I build accessible, pixel-perfect, performant, and delightful web experiences.
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-slate-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-3xl absolute -z-10" />
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-slate-800 rounded-2xl rotate-3 shadow-2xl flex items-center justify-center text-gray-400">
            {/* Placeholder for Profile Image */}
            <span className="text-center p-4">Add your photo to public/me.jpg</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}