import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // or ./App.css — your Tailwind import file

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Reviews from "./components/Reviews";


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen scroll-smooth antialiased text-gray-800">
      <Header />

      <main className="flex-grow">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Project /></section>
        <section id="gallery"><Gallery /></section>
        <section id="services"><Service /></section>
        <section id="review"><Reviews /></section>
        <section id="contact"><Contact /></section>
        <section id="whatsappfloat"><WhatsAppFloat /></section>
      </main>

      <Footer />
    </div>
  );
}
