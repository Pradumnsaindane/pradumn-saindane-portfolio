import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-white/70 dark:bg-black/30
        border-b border-gray-200 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          Pradumn Saindane{" "}
          <span className="text-primary">Portfolio</span>
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-primary transition">Home</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>

          {/* Theme Toggle (RIGHT CORNER) */}
          <ThemeToggle />

        </div>
      </div>
    </header>
  );
};