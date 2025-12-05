import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "about", "projects", "gallery", "services", "contact"];

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
        entries.forEach((entry) => entry.isIntersecting && setActiveSection(id));
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

          {/* Logo */}
          <div
  className="cursor-pointer flex items-center gap-2 min-w-0"
  onClick={() => scrollTo("home")}
>
  {/* LOGO */}
  <img
    src={logo}
    alt="SKB Constructions"
    className={`flex-shrink-0 transition-all duration-300
      ${isScrolled ? "h-10" : "h-14"}`}
  />

  {/* TEXT */}
  <p
    className="text-base sm:text-lg font-bold text-blue-800 leading-tight
               whitespace-normal break-words flex-1"
  >
    Sri Karunya Bhavan Constructions
  </p>
</div>


          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative pb-1 transition-all duration-300 bg-transparent border-none
                  ${
                    activeSection === item
                      ? "text-blue-700 font-semibold"
                      : isScrolled
                      ? "text-blue-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
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

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 transition-all duration-300 text-xl bg-transparent border-none
            ${isScrolled ? "text-blue-800" : "text-white"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden w-full shadow-lg transition-all duration-300
          bg-white`}
        >
          <nav className="flex flex-col px-4 py-4 space-y-4 text-blue-900 font-medium">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`py-2 text-left border-none bg-transparent
                ${activeSection === item ? "text-orange-500 font-semibold" : ""}`}
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
