import { Star, ShieldCheck, Truck, ThumbsUp, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Trust() {
  const items = [
    { icon: <Star className="w-5 h-5" />, text: "4.8/5 Customer Rating" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Premium Quality" },
    { icon: <Truck className="w-5 h-5" />, text: "Delivery Available" },
    { icon: <ThumbsUp className="w-5 h-5" />, text: "Trusted Local Business" },
    { icon: <Building2 className="w-5 h-5" />, text: "Office & Home" },
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white p-4 rounded-sm border border-slate-200 shadow-sm"
            >
              <div className="flex-shrink-0 text-gold-base bg-slate-50 w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600 leading-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
