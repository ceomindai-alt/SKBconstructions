import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Prakash R",
      rating: 5,
      comment:
        "Excellent service. Very professional team. Delivered the project on time with great quality!",
    },
    {
      name: "Sathya Homes",
      rating: 4,
      comment:
        "Good support and fast response always. Happy to work with this team for our real estate promotions.",
    },
    {
      name: "Meena S",
      rating: 5,
      comment:
        "Creative designs and very affordable pricing. Highly recommend for digital marketing services.",
    },
    {
      name: "Naveen Kumar",
      rating: 5,
      comment: "Very satisfied with their construction quality and dedication.",
    },
    {
      name: "Divya Real Estates",
      rating: 4,
      comment:
        "Professional team and affordable pricing. Good results in our promotion campaigns.",
    },
  ];

  return (
    <div
      className="w-full bg-orange-300 py-16 px-6 md:px-12 overflow-hidden"
      id="reviews"
    >
      <style>
        {`
          @keyframes scroll-slider {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-slider {
            animation: scroll-slider 18s linear infinite;
          }
        `}
      </style>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
        Customer Reviews
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 animate-scroll-slider"
          style={{ width: `${reviews.length * 320}px` }}
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white shadow-xl rounded-xl p-6 border flex-shrink-0 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>

              <div className="flex items-center mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
