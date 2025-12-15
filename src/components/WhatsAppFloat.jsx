export default function WhatsAppFloat() {
  const whatsappNumber = "919500742445";
  const message = "Hello, I would like to know more about your services.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50 
        bottom-4 right-4
        sm:bottom-6 sm:right-6

        bg-green-500 
        rounded-full 
        flex items-center justify-center 
        shadow-xl hover:scale-110 transition-transform
      "
      style={{
        width: "50px",
        height: "50px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="
          w-8 h-8
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          lg:w-12 lg:h-12
        "
      />
    </a>
  );
}
