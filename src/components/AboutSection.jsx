import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I’m Pradumn Saindane, a Full-Stack Developer passionate about
              building scalable and user-focused web applications using React,
              Node.js, and Tailwind CSS.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving real-world problems through clean code and modern
              UI/UX design while exploring AI, automation, and SaaS development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* CARD 1 */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Code className="text-primary" />
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <User className="text-primary" />
                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing modern and intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Briefcase className="text-primary" />
                <div>
                  <h4 className="font-semibold text-lg">Project Building</h4>
                  <p className="text-muted-foreground">
                    Creating real-world applications and scalable solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};