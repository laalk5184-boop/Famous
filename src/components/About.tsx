import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Quality Furniture",
    "Professional Service",
    "Customer Satisfaction",
    "Value For Money",
    "Long Lasting Furniture"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">About Us</h2>
            <h3 className="text-5xl font-serif font-black text-slate-900 mb-6 leading-tight">
              Crafting Excellence for Your <span className="text-gold-base underline decoration-gold-base/30 decoration-4 underline-offset-4">Living & Working</span> Spaces
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              At Famous Furnishers, we believe that furniture is not just functional—it's the foundation of your daily life. Based in the heart of Karachi at Aram Bagh, we have built a reputation as a trusted provider of premium office and home furniture.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-base flex-shrink-0" />
                  <span className="text-slate-800 font-bold text-sm uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-slate-300/50 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" 
                alt="Famous Furnishers Showroom" 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800"; e.currentTarget.onerror = null; }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-royal-base p-8 shadow-xl hidden sm:block">
              <p className="text-5xl font-serif font-black text-gold-base mb-2">10+</p>
              <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-none">Years of Trust</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
