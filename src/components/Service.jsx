import troad from "../assets/img/troad.png";
import road from "../assets/img/road.png";
import croad from "../assets/img/croad.png";
import proad from "../assets/img/proad.png";
import mroad from "../assets/img/mroad.png";
import hroad from "../assets/img/hroad.png";
import t from "../assets/img/t.jpeg"
import m from "../assets/img/m.jpeg"
import c from "../assets/img/c.jpeg"
import d from "../assets/img/d.jpeg"

export default function Service() {
  const services = [
    {
      title: "Road Works",
      desc: "Professional road construction and maintenance with durable quality. We ensure long-lasting, stable, and smooth road development for all types of terrains.",
      img: road,
    },
    {
      title: "Tar Road Constructions",
      desc: "High-quality tar road laying using advanced equipment for a strong and durable finish that withstands heavy traffic and climate conditions.",
      img: t,
    },
    {
      title: "Concrete Road Constructions",
      desc: "Engineered concrete roads designed for high load capacity, long life, and enhanced durability for commercial, residential, and industrial areas.",
      img: c,
    },
    {
      title: "Waste Plastic Road Constructions",
      desc: "Eco-friendly roads built using recycled plastic technology, improving road strength and reducing environmental impact.",
      img: proad,
    },
    {
      title: "Mastic Tar Road Constructions",
      desc: "Premium mastic tar surfacing ensures crack-free, skid-resistant, and waterproof roads for long-term performance.",
      img: m,
    },
    {
      title: "Hot Thermoplastic Road Marking",
      desc: "High-visibility thermoplastic road markings designed for highways, city roads, and safety zones with long-lasting brightness.",
      img: hroad,
    },
    {
      title: "Drainage Works",
      desc: "Efficient drainage system planning and execution for residential, commercial, and municipal areas with high precision.",
      img: d,
    },
  ];

  return (
    <div id="services" className="py-20 px-6 bg-orange-500">
      <h2
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        data-aos="fade-up"
      >
        Our Services
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="
              rounded-xl 
              bg-white 
              shadow-lg 
              overflow-hidden
              hover:shadow-2xl 
              transition 
              transform 
              hover:-translate-y-2 
              hover:scale-105 
              cursor-pointer 
              border border-gray-200
            "
          >
            {/* IMAGE */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
