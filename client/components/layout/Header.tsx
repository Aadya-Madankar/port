import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur border-b border-black/10 bg-white/70"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="font-semibold tracking-tight text-xl">
          Aadya Madankar
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="#about" className="hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="ml-6 inline-flex items-center rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
        >
          Available for projects
        </a>
      </div>
    </header>
  );
}
