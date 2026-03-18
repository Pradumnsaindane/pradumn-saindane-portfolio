const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "Java",
  "GitHub",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                glass-card
                p-6 text-center
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
                cursor-default
              "
            >
              <p className="font-medium text-sm md:text-base">
                {skill}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};