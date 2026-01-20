const experiences = [
  {
    company: "involve.me",
    role: "Senior Software Developer",
    period: "2023 - Present",
    description: "Leading development and maintaining over 40 third-party integrations for an AI-powered platform used by millions.",
  },
  {
    company: "Writinova",
    role: "Founder",
    period: "2022 - Present",
    description: "Founded and scaling Writinova, a platform focused on innovative digital solutions.",
  },
  {
    company: "Selar",
    role: "Engineering Manager",
    period: "2020 - 2023",
    description: "Led engineering teams to build secure and scalable digital commerce solutions across Nigeria, Austria, and Canada.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-slate-800">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-blue-600 mb-2">{exp.company} | {exp.period}</p>
              <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
