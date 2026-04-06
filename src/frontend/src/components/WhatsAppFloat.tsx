import { SiWhatsapp } from "react-icons/si";
import { WHATSAPP_NUMBER } from "../seo-config";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello! I'd like to know more about Sansa Ko Bhansa Udyog products.",
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-whatsapp text-white shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ backgroundColor: "#25D366" }}
    >
      <SiWhatsapp size={28} />
    </a>
  );
}
