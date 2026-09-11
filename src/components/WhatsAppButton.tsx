import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/243813663242"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter LuxAnima via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-pulse"
    >
      <MessageCircle size={32} className="text-white" />
    </a>
  );
}
