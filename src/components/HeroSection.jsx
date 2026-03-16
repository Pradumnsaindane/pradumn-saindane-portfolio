import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black via-purple-900 to-indigo-900"
    >
      {/* glow effects */}
      <div className="absolute w-96 h-96 bg-purple-500 blur-[120px] opacity-20 rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 blur-[120px] opacity-20 rounded-full bottom-10 right-10"></div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I&apos;m
            </span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Pradumn
            </span>

            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Saindane
            </span>
          </h1>

          {/* Typing Effect */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Stack Engineer",
                "AI Product Builder",
                "Startup Founder"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Description */}
          <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build scalable web applications and AI-powered products using
            modern technologies like React, Node.js and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>

            <a
              href="https://github.com/Pradumnsaindane"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-6 text-3xl mt-8">
            <FaReact className="text-cyan-400 hover:scale-125 transition" />
            <FaNodeJs className="text-green-500 hover:scale-125 transition" />
            <SiJavascript className="text-yellow-400 hover:scale-125 transition" />
            <SiTailwindcss className="text-sky-400 hover:scale-125 transition" />
            <FaDatabase className="text-indigo-400 hover:scale-125 transition" />
            <FaGithub className="text-white hover:scale-125 transition" />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};