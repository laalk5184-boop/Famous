import { motion } from 'motion/react';
import { Gem, Scissors, DollarSign, Sparkles, Truck, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <Gem className="w-8 h-8" />, title: "Premium Materials", desc: "Sourced high-grade woods, fabrics, and metals." },
    { icon: <Scissors className="w-8 h-8" />, title: "Expert Craftsmanship", desc: "Built by experienced artisans with an eye for detail." },
    { icon: <DollarSign className="w-8 h-8" />, title: "Value For Money", desc: "Luxury pricing that makes sense without compromising quality." },
    { icon: <Sparkles className="w-8 h-8" />, title: "Modern Designs", desc: "Aesthetic pieces that elevate any contemporary space." },
    { icon: <Truck className="w-8 h-8" />, title: "Fast Delivery", desc: "Secure and prompt transportation across the city." },
    { icon: <HeartHandshake className="w-8 h-8" />, title: "Customer Satisfaction", desc: "Dedicated support team putting your needs first." },
  ];

  return (
    <section className="py-24 bg-royal-base text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gold-base uppercase tracking-widest mb-3">Our Promise</h2>
          <h3 className="text-4xl font-serif font-black">Why Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/20 bg-royal-dark/30 hover:bg-white/5 transition-colors duration-300 shadow-xl"
            >
              <div className="text-gold-base mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold font-serif uppercase tracking-wider mb-3">{item.title}</h4>
              <p className="text-white/70 leading-relaxed text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
