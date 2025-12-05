import { useState } from "react";
import m from "../assets/img/m.jpeg";
import t from "../assets/img/t.jpeg";
import d from "../assets/img/d.jpeg";
import d1 from "../assets/img/d1.jpeg";

// REUSABLE READ MORE COMPONENT
function ReadMore({ text, limit = 120 }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > limit;

  const displayText = expanded ? text : text.substring(0, limit) + (isLong ? "..." : "");

  return (
    <div>
      <p className="text-gray-600 leading-relaxed">{displayText}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-700 font-semibold mt-2 hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default function Project() {
  const ongoing = [
    {
      title: "Drainage Reinforcement Work",
      desc: "The RCC drainage reinforcement work is currently in progress with steel cage fabrication and placement being executed as per engineering standards. Skilled workers are assembling and tying the reinforcement structure to ensure the drain achieves maximum strength, durability, and resistance to water pressure. The base concrete has already been laid, and the reinforcement grids are being aligned accurately to maintain the required dimensions and load capacity. This stage is crucial for creating a long-lasting stormwater drainage system that will efficiently manage water flow and support the surrounding infrastructure once completed.",
      img: d,
    },
    {
      title: "Ongoing Road Laying and Asphalt Preparation Work",
      desc: "The road laying work is actively progressing with the onsite team preparing and heating the asphalt mix required for the black-top surface. Skilled workers and heavy machinery, including rollers and heating units, are deployed to ensure uniform mixing, proper temperature maintenance, and high-quality road compaction. This stage is crucial for achieving a durable, smooth, and long-lasting road finish. The coordinated efforts of the workforce and equipment reflect our commitment to delivering infrastructure that meets engineering standards and supports the overall development of the layout..",
      img: m,
    },
  ];

  const completed = [
    {
      title: "Road and Infrastructure Development",
      desc: "We have successfully completed the full internal road and infrastructure development for this project. The work includes high-quality black-top road construction with precise leveling, a robust RCC drainage system, and the installation of modern streetlights throughout the layout. All plots have been accurately marked and numbered, ensuring clear demarcation and easy identification. Provisions for future electrical and utility connections have also been integrated. With these key infrastructure elements fully completed, the site is now ready for residential development and client visits.",
      img: t,
    },
    {
      title: "Completed Drainage Development Work",
      desc: "The drainage development work has been fully completed with a precisely engineered RCC drainage system designed to ensure efficient stormwater flow and long-term structural durability. Each channel has been constructed with accurate alignment, proper slope, and high-grade concrete to prevent water stagnation, soil erosion, and damage during heavy rainfall. The drain integrates seamlessly with the main outflow network, providing a smooth and continuous water discharge path. With clean finishing, reinforced sidewalls, and a layout prepared for future construction, this completed drainage infrastructure enhances overall site stability, safety, and long-term functionality.",
      img: d1,
    },
  ];

  return (
    <div className="py-20 px-6 bg-orange-500" id="projects">
      <div className="max-w-6xl mx-auto">

        <h2
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          data-aos="fade-up"
        >
          Our Projects
        </h2>

        {/* ONGOING PROJECTS */}
        <h3
          className="text-3xl font-semibold mb-6 text-center text-white"
          data-aos="fade-up"
        >
          Ongoing Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" data-aos="fade-up">
          {ongoing.map((p, i) => (
            <div
              key={i}
              className="rounded-xl bg-white shadow-lg overflow-hidden 
                        hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 
                        cursor-pointer border border-gray-200"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-blue-900 mb-3">{p.title}</h4>
                <ReadMore text={p.desc} limit={150} />
              </div>
            </div>
          ))}
        </div>

        {/* COMPLETED PROJECTS */}
        <h3
          className="text-3xl font-semibold mb-6 text-center text-white"
          data-aos="fade-up"
        >
          Completed Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {completed.map((p, i) => (
            <div
              key={i}
              className="rounded-xl bg-white shadow-lg overflow-hidden 
                        hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 
                        cursor-pointer border border-gray-200"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-blue-900 mb-3">{p.title}</h4>
                <ReadMore text={p.desc} limit={150} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
