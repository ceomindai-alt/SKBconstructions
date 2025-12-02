export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-blue-800 bg-orange-500
    px-6" id="home" data-aos="fade-up">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-blue-600">
          SKB Constructions<br></br>
          <span className="text-orange-300">All kinds of Road Constructions</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Construction works
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105">Explore Services</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="px-6 py-4 border border-white/30 rounded-full hover:bg-white/10 transition">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
