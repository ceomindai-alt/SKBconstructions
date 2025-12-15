import { useState } from "react";
import v from "../assets/img/v.mp4";
import f from "../assets/img/fam.jpeg";
import m from "../assets/img/m.jpeg";
import d from "../assets/img/d.jpeg";
import t from "../assets/img/t.jpeg";


export default function Gallery() {

  const galleryItems = [
    { type: "image", src: t    },
    { type: "image", src: f },
    { type: "image", src: d },
    { type: "image", src: m },
    { type: "video", src: "/gallery/video1.mp4" },
    { type: "video", src: v },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="py-20 px-6 bg-orange-300
    " id="gallery">
      
      <h2 
        className="text-4xl font-bold text-center mb-10 text-blue-800"
        data-aos="fade-up"
      >
        Our Gallery
      </h2>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer bg-white"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} className="w-full h-60 object-cover" />
            ) : (
              <video className="w-full h-60 object-cover" muted autoPlay loop>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-3xl w-full p-4">
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} className="w-full rounded-xl shadow-xl" />
            ) : (
              <video className="w-full rounded-xl shadow-xl" controls autoPlay>
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
