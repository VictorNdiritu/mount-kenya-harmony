import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254799388888"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-aqua-dark transition-all hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);

export default WhatsAppButton;
