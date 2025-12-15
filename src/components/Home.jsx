import bg from "../assets/img/bg.png";
import lbg from "../assets/img/lbg.png";
import tbg from "../assets/img/tbg.png";

export default function Home() {
  const screenWidth = window.innerWidth;

  let backgroundImage = bg;
  if (screenWidth <= 480) backgroundImage = tbg;
  else if (screenWidth <= 1024) backgroundImage = lbg;

  return (
    <div
      id="home"
      className="
        min-h-screen 
        w-full 
        flex items-center justify-center 
        px-4 sm:px-6
        relative
        bg-no-repeat bg-cover bg-center
      "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center max-w-3xl mx-auto p-2">

        {/* TITLE */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl 
            font-extrabold 
            text-white 
            leading-tight sm:leading-tight md:leading-tight 
            mb-2
            transition-all duration-300
            hover:text-yellow-300 hover:scale-110
            active:text-yellow-300 active:scale-110

            /* Mobile tweaks */
            whitespace-normal leading-[1.2]
          "
        >
          Sri Karunya Bhavan Constructions
        </h1>

        {/* SUBTITLE */}
        <h2
          className="
            text-2xl sm:text-4xl md:text-5xl 
            font-bold 
            text-yellow-300 
            mb-4 sm:mb-6
            transition-all duration-300
            hover:text-white hover:scale-110
            active:text-white active:scale-110
          "
        >
          Build the future
        </h2>

        {/* PARAGRAPH */}
        <p
          className="
            text-base sm:text-lg md:text-xl 
            text-white mb-6
            transition-all duration-300
            hover:text-yellow-300 hover:scale-110
            active:text-yellow-300 active:scale-110
          "
        >
          All kinds of Construction works
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 sm:gap-4">

          {/* Explore button */}
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-5 py-2 sm:px-8 sm:py-4 
              bg-yellow-400 text-blue-900 
              font-semibold rounded-full shadow-lg 
              hover:bg-yellow-300 transition transform hover:scale-105
              text-sm sm:text-base   /* Mobile smaller */
            "
          >
            Explore Services
          </button>

          {/* Contact button */}
          <button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }
            className="
              px-5 py-2 sm:px-6 sm:py-4
              border border-white/30 text-white 
              rounded-full hover:bg-white/10 transition
              text-sm sm:text-base  /* Mobile smaller */
            "
          >
            Contact Us
          </button>

        </div>

      </div>
    </div>
  );
}
