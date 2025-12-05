export default function Home() { 
  return (
    <div
      className="min-h-screen flex items-center justify-center text-blue-800 bg-orange-500 px-6"
      id="home"
      data-aos="fade-up"
    >
      <div className="text-center max-w-3xl mx-auto">

        {/* TITLE BLOCK */}
        <div className="w-full flex justify-center">
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl 
              font-extrabold leading-tight text-blue-600 mb-2
              whitespace-normal md:whitespace-nowrap
              text-center
            "
          >
            Sri Karunya Bhavan Constructions
          </h1>
        </div>

        {/* SUBTITLE */}
        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl 
            font-extrabold leading-tight text-orange-300 mb-6
            text-center
          "
        >
          Build the future
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-8">
          All kinds of Construction works
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Explore Services
          </button>

          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-4 border border-white/30 rounded-full hover:bg-white/10 transition"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}
