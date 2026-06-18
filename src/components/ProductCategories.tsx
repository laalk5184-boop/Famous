import { motion } from 'motion/react';
import { categories } from '../data';

export default function ProductCategories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">Our Collections</h2>
          <h3 className="text-4xl font-serif text-slate-800">Explore Categories</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => {
            if (index === categories.length - 1) {
              return (
                <motion.a
                  href={`#${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
                  key={cat.id}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  viewport={{ once: true }}
                  className="group relative h-48 sm:h-auto sm:aspect-[4/5] bg-royal-base flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-colors hover:bg-royal-dark"
                >
                  <span className="text-gold-base text-3xl font-bold italic">Custom</span>
                  <span className="text-white text-xs font-bold uppercase mt-1">Designed for you</span>
                  <div className="mt-4 w-8 h-px bg-gold-base"></div>
                </motion.a>
              );
            }
            return (
              <motion.a
                href={`#${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
                key={cat.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative h-48 sm:h-auto sm:aspect-[4/5] bg-slate-100 flex flex-col justify-end p-4 border border-slate-200 overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${cat.image})` }}
                ></div>
                <span className="relative z-10 text-xs font-black uppercase text-royal-base tracking-tighter mb-1 leading-none">{cat.name.split(' ')[0]}</span>
                <span className="relative z-10 text-lg font-serif font-bold text-slate-900 leading-tight">{cat.name.split(' ').slice(1).join(' ') || cat.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
