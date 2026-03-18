import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Main About Card */}
          <div className="glass-card p-8 space-y-4">
            <h3 className="text-xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground">
              I’m Pradumn Saindane, a Full-Stack Developer passionate about building scalable and user-focused web applications using React, Node.js, and Tailwind CSS.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6">

            <div className="glass-card p-6 flex gap-4 items-start">
              <Code className="text-primary" />
              <div>
                <h4 className="font-semibold">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building modern and scalable web applications.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4 items-start">
              <User className="text-primary" />
              <div>
                <h4 className="font-semibold">UI/UX</h4>
                <p className="text-sm text-muted-foreground">
                  Designing clean and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4 items-start">
              <Briefcase className="text-primary" />
              <div>
                <h4 className="font-semibold">Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Solving real-world problems through code.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};