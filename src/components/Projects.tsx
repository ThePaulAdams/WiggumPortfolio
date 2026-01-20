const projects = [
  {
    title: "AI Assistant for Webflow",
    description: "Integrating Google's Gemini AI with Webflow to enhance design workflows and automate repetitive tasks.",
    tags: ["Gemini AI", "Webflow", "Node.js"],
    link: "https://sessionize.com",
  },
  {
    title: "Integration Ecosystem",
    description: "Deep dive into monitoring and maintaining 40+ third-party integrations for involve.me's AI platform.",
    tags: ["API", "Serverless", "Architecture"],
    link: "#",
  },
  {
    title: "Writinova",
    description: "Founder of Writinova, building digital platforms that simplify ideas to acquire customers.",
    tags: ["Startup", "Full Stack", "Product"],
    link: "https://writinova.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 h-20 overflow-hidden">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 hover:underline text-sm font-medium">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
