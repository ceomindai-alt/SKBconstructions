import troad from "../assets/img/troad.png";
import road from "../assets/img/road.png";
import croad from "../assets/img/croad.png";
import proad from "../assets/img/proad.png";
import mroad from "../assets/img/mroad.png";
import hroad from "../assets/img/hroad.png";
import droad from "../assets/img/droad.png";

export default function Service() {
  const services = [
    {
      title: "Road Works",
      desc: "Professional road construction and maintenance with durable quality.",
      img: road,
    },
    {
      title: "Tar Road Constructions",
      desc: "High-quality tar road laying with advanced machinery.",
      img: troad,
    },
    {
      title: "Concrete Road Constructions",
      desc: "Long-lasting concrete roads engineered for heavy load conditions.",
      img: croad,
    },
    {
      title: "Waste Plastic Road Constructions",
      desc: "Eco-friendly roads built using recycled plastic technology.",
      img: proad,
    },
    {
      title: "Mastic Tar Road Constructions",
      desc: "Premium mastic-based road surfacing for superior durability.",
      img: mroad,
    },
    {
      title: "Hot Thermoplastic Road Marking",
      desc: "High visibility thermoplastic markings for highways & city roads.",
      img: hroad,
    },
    {
      title: "Drainage Works",
      desc: "Efficient drainage systems for residential, commercial & city areas.",
      img: droad,
    },
  ];

  return (
    <div id="services" className="py-20 px-6 bg-orange-300">
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
