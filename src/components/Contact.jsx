import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "919940744382"; // Your WhatsApp number
  const googleSheetsURL = "https://script.google.com/macros/s/AKfycbyE_nZPNHGA2bewuf_pwcAbNvtvmOfwwkWs8e2JCI6yvbElNZ7gK56rOmoNNnly7IQ/exec"; // Replace
// AKfycbyE_nZPNHGA2bewuf_pwcAbNvtvmOfwwkWs8e2JCI6yvbElNZ7gK56rOmoNNnly7IQ
// google sheet id
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: fullName,
      email: email,
      phone: phone,
      message: message,
    };

    // 1. Send Email using EmailJS
    try {
      await emailjs.send(
        //"YOUR_EMAILJS_SERVICE_ID",
        "service_zuniol3",
        //"YOUR_EMAILJS_TEMPLATE_ID",
        "template_m48blck",
        formData,
        //"YOUR_EMAILJS_PUBLIC_KEY"
        "tpeyyKcqgk8nnrvyr"
      );
      console.log("Email sent");
    } catch (error) {
      console.log("Email Error:", error);
    }

    // 2. Save to Google Sheets
    try {
      await fetch(googleSheetsURL, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});

      console.log("Saved to Google Sheet");
    } catch (error) {
      console.log("Google Sheet Error:", error);
    }

    // 3. Send to WhatsApp
    const text = `New Contact Form Submission:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");

    setLoading(false);
  };

  return (
    <div className="w-full bg-orange-500 
py-12 px-4 sm:px-6 lg:px-10 ">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-black mt-2">We are here to help. Reach out anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-800">Get in Touch</h2>
            <p className="mt-2 text-black">Contact our team for any questions or support.</p>
          </div>

          <div className="space-y-4 text-black">
            <p>
              <span className="font-semibold text-blue-800">Address:</span><br />
              ABC street, Tamil Nadu 600000
            </p>
            <p>
              <span className="font-semibold text-blue-800">Phone:</span><br />
              +91 9940744382
            </p>
            <p>
              <span className="font-semibold text-blue-800">Email:</span><br />
              support@mywebsite.com
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.928540535912!2d80.06703857507677!3d12.914056787388175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fab45bb3e89%3A0x98ce090daac9569f!2sVandalur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712219838541"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-orange-300
 p-8 rounded-xl shadow space-y-6">

          <h2 className="text-2xl font-semibold text-blue-900">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm font-medium text">Full Name</label>
              <input 
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:border-blue-400 bg-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:border-blue-400 bg-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:border-blue-400 bg-orange-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:border-blue-400 bg-orange-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
