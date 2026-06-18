import { motion } from 'motion/react';
import { useSettings } from '../context/SettingsContext';

export default function Hero() {
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;

  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden border-b border-slate-100">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
          alt="Premium furniture showroom"
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-black text-royal-base leading-[1.05] mb-6">
              Karachi's Trusted <br/>
              <span className="text-gold-base">Furniture Store</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10"
          >
            Experience the pinnacle of luxury with Karachi's premier furniture showroom. We specialize in executive office suites and contemporary home furniture designed for modern living.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#featured"
              className="bg-royal-base text-white px-8 py-4 font-bold text-sm uppercase tracking-widest shadow-xl text-center hover:opacity-90 transition-opacity"
            >
              View Full Collection
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-royal-base text-royal-base px-8 py-4 font-bold text-sm uppercase tracking-widest text-center hover:bg-royal-base hover:text-white transition-colors"
            >
              WhatsApp Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
