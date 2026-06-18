import { useSettings } from '../context/SettingsContext';

export default function FloatingWhatsApp() {
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-200/50 hover:bg-[#128C7E] transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-slate-900 font-bold uppercase tracking-widest text-[10px] text-white px-4 py-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
