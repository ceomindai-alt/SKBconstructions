import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const mapRef = useRef(null);
  const [loadMap, setLoadMap] = useState(false);

  const googleSheetsURL =
    "https://script.google.com/macros/s/AKfycbyE_nZPNHGA2bewuf_pwcAbNvtvmOfwwkWs8e2JCI6yvbElNZ7gK56rOmoNNnly7IQ/exec";

  /* Lazy load map */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: fullName,
      email,
      phone,
      message,
    };

    /* Lazy EmailJS */
    try {
      const emailjs = (await import("emailjs-com")).default;
      await emailjs.send(
        "service_zuniol3",
        "template_m48blck",
        formData,
        "tpeyyKcqgk8nnrvyr"
      );
    } catch (err) {
      console.error("Email error:", err);
    }

    /* Google Sheet (non-blocking) */
    fetch(googleSheetsURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {});

    setLoading(false);
    setSuccess(true);

    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="w-full bg-orange-500 py-12 px-4 sm:px-6 lg:px-10">

      {/* SUCCESS MODAL – LIGHTWEIGHT */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[9999]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fadeIn">

            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-green-600 text-2xl font-bold mt-4">
              Message Sent!
            </h3>
            <p className="text-gray-700 text-sm mt-1 text-center">
              Thank you for contacting us. We will get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-black mt-2">We are here to help. Reach out anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-blue-800">Get in Touch</h2>

          <div className="space-y-4 text-black">
            <p>
              <strong className="text-blue-800">Address:</strong><br />
              No.6, Aarani Road, Arni X Road, Cheyyar – 604407
            </p>
            <p>
              <strong className="text-blue-800">Phone:</strong><br />
              +91 9500742445
            </p>
            <p>
              <strong className="text-blue-800">Email:</strong><br />
              customersupport@gmail.com
            </p>
          </div>

          {/* MAP – Lazy */}
          <div ref={mapRef} className="w-full h-64 rounded-xl overflow-hidden shadow">
            {loadMap && (
              <iframe
                title="Map Location"
                src="https://www.google.com/maps?q=SKB+CONSTRUCTIONS+Cheyyar&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-orange-400 p-8 rounded-xl shadow space-y-6">
          <h2 className="text-2xl font-semibold text-blue-900">
            Send Us a Message
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-lg bg-orange-200 border"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full p-3 rounded-lg bg-orange-200 border"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-lg bg-orange-200 border"
            />

            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              className="w-full p-3 rounded-lg bg-orange-200 border"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
