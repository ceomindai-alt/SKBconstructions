import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Success UI

  const googleSheetsURL =
    "https://script.google.com/macros/s/AKfycbyE_nZPNHGA2bewuf_pwcAbNvtvmOfwwkWs8e2JCI6yvbElNZ7gK56rOmoNNnly7IQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: fullName,
      email,
      phone,
      message,
    };

    // EmailJS
    try {
      await emailjs.send(
        "service_zuniol3",
        "template_m48blck",
        formData,
        "tpeyyKcqgk8nnrvyr"
      );
    } catch (error) {
      console.log("Email error:", error);
    }

    // Google Sheet
    try {
      await fetch(googleSheetsURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("Google Sheet Error:", error);
    }

    // SUCCESS LOTTIE POPUP
    setLoading(false);
    setSuccess(true);

    // Clear form
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Hide animation after 3 sec
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-full bg-orange-500 py-12 px-4 sm:px-6 lg:px-10">

      {/* SUCCESS LOTTIE MODAL */}
      {success && (
        <div className="
          fixed inset-0 
          flex items-center justify-center 
          bg-black/40 backdrop-blur-sm
          z-[9999]
        ">
          <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center animate-scaleUp">

            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              background="transparent"
              speed="1"
              style={{ width: "150px", height: "150px" }}
              autoplay
            >
            </lottie-player>

            <h3 className="text-green-600 text-2xl font-bold mt-3">
              Message Sent!
            </h3>
            <p className="text-gray-700 text-sm mt-1">Thank you for contacting us.</p>
          </div>
        </div>
      )}

      {/* PAGE TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-black mt-2">We are here to help. Reach out anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-blue-800">Get in Touch</h2>
          <p className="text-black">Contact our team for any support.</p>

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
              support@mywebsite.com
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow">
            <iframe
  title="Map Location"
  src="https://www.google.com/maps?q=SKB+CONSTRUCTIONS+Cheyyar&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="bg-orange-400 p-8 rounded-xl shadow space-y-6">

          <h2 className="text-2xl font-semibold text-blue-900">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <input
              type="text"
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
              type="tel"
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
