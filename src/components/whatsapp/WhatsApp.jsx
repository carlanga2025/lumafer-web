import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const phoneNumber = "946193746"; // Reemplázalo con tu número real

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
