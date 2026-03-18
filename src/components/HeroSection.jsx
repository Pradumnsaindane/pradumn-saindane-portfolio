import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden
      bg-gradient-to-br from-white via-gray-100 to-white
      dark:from-transparent dark:via-transparent dark:to-transparent"
    >
      {/* 🌌 Subtle Glow Effects */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-[140px] opacity-20 dark:opacity-10 rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 blur-[140px] opacity-20 dark:opacity-10 rounded-full bottom-10 right-10"></div>

      {/* 🔲 Grid Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* 👋 Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, Im
            </span>

            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Pradumn
            </span>

            <span className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2">
              {" "}Saindane
            </span>
          </h1>

          {/* ⌨️ Typing Effect */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Stack Engineer",
                "AI Product Builder",
                "Java Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* 📄 Description */}
          <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A modern developer portfolio showcasing my projects, technical skills, and problem-solving capabilities. Built with a focus on clean UI, performance, and real-world applications to demonstrate full-stack development expertise.
          </p>

          {/* 🔘 Buttons */}
          <div className="flex justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>

            <a
              href="https://github.com/Pradumnsaindane"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-white/20 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition backdrop-blur-lg"
            >
              GitHub
            </a>
          </div>

          {/* 🧰 Tech Stack Icons */}
          <div className="flex justify-center gap-6 text-3xl mt-8 opacity-90">
            <FaReact className="text-cyan-400 hover:scale-125 transition duration-300" />
            <FaNodeJs className="text-green-500 hover:scale-125 transition duration-300" />
            <SiJavascript className="text-yellow-400 hover:scale-125 transition duration-300" />
            <SiTailwindcss className="text-sky-400 hover:scale-125 transition duration-300" />
            <FaDatabase className="text-gray-700 dark:text-white hover:scale-125 transition duration-300" />
            <FaGithub className="text-gray-800 dark:text-white hover:scale-125 transition duration-300" />
          </div>

        </div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};