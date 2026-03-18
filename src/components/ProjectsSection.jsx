import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  // 🔥 Fetch GitHub Repos
  useEffect(() => {
    fetch("https://api.github.com/users/Pradumnsaindane/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .slice(0, 6); // limit projects

        setProjects(filtered);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real-world projects showcasing full-stack development, problem-solving,
          and scalable application design.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((repo) => (
            <div
              key={repo.id}
              onClick={() => setSelected(repo)}
              className="
                cursor-pointer group rounded-2xl
                bg-white/70 dark:bg-white/5
                backdrop-blur-xl
                border border-gray-200 dark:border-white/10
                p-6
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {repo.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {repo.description || "No description available"}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language}</span>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="
              bg-white dark:bg-black
              rounded-2xl p-8 max-w-lg w-full
              border border-gray-200 dark:border-white/10
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2">
              {selected.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4">
              {selected.description || "No description available"}
            </p>

            {/* Info */}
            <div className="flex justify-between mb-6">
              <span>⭐ {selected.stargazers_count}</span>
              <span>{selected.language}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={selected.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2"
              >
                <Github size={18} /> Code
              </a>

              <a
                href={selected.homepage || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-primary/10 transition"
              >
                <ExternalLink size={18} /> Live
              </a>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};