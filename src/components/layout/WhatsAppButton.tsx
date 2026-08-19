import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Future Optima! I'd like to know more about your IT & AI courses."
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
