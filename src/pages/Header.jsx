import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "gallery", "services", "contact"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(id);
        });
      }, observerOptions);
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className={`flex justify-between items-center ${isScrolled ? "h-14" : "h-20"}`}>
          <div
            className={`text-xl font-bold cursor-pointer transition-colors duration-300
              ${isScrolled ? "text-blue-600" : "text-white"}`}
            onClick={() => scrollTo("home")}
          >
            
            <img
  src={logo}
  alt="SKB Constructions"
  className={`transition-all duration-300 ${isScrolled ? "h-14 " : "h-20"}`}/>

          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative pb-1 transition-all duration-300
                  ${isScrolled
                    ? activeSection === item
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                    : activeSection === item
                      ? "text-yellow-300 font-semibold"
                      : "text-white hover:text-yellow-200"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-current transition-all duration-300
                    ${activeSection === item ? "w-full" : "w-0"}`}
                />
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 transition-all duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden w-full shadow-lg transition-all duration-300 ${isScrolled ? "bg-white" : "bg-white/90 backdrop-blur"}`}>
          <nav className="flex flex-col px-4 py-4 space-y-4 text-gray-700 font-medium">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`py-1 text-left ${activeSection === item ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
