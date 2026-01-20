import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:hello@pauladams.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
      </div>
    </section>
  );
}
