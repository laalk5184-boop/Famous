import { motion } from 'motion/react';
import { useProducts } from '../context/ProductsContext';

export default function Gallery() {
  const { products } = useProducts();
  
  // Collect all unique gallery images from active products
  const productImages = Array.from(new Set(
    products.filter(p => p.status !== 'draft').flatMap(p => p.gallery || [p.image])
  ));

  return (
    <section id="gallery" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">Our Portfolio</h2>
          <h3 className="text-4xl font-serif font-black text-slate-800">Showroom Gallery</h3>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {productImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden border border-slate-200"
            >
              <img 
                src={src} 
                alt={`Furniture Showcase ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal-base/0 group-hover:bg-royal-base/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
