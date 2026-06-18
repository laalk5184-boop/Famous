import { motion } from 'motion/react';
import { useProducts } from '../context/ProductsContext';
import { useSettings } from '../context/SettingsContext';
import { NavLink } from 'react-router-dom';

export default function FeaturedProducts() {
  const { products } = useProducts();
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;
  const featured = products.filter(p => (typeof p.isFeatured === 'boolean' ? p.isFeatured : true) && p.status !== 'draft').slice(0, 6);
  
  return (
    <section id="featured" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">Premium Selection</h2>
            <h3 className="text-4xl font-serif font-black text-slate-800">Featured Products</h3>
          </div>
          <a href="#all" className="hidden md:inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-royal-base hover:text-gold-base mt-4 md:mt-0 transition-colors">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-[10px] font-black text-gold-base uppercase tracking-widest mb-2">{product.category}</div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2 truncate">{product.name}</h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-black text-royal-base">Rs. {product.price.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <NavLink
                    to={`/product/${product.id}`}
                    className="text-center px-4 py-3 border border-royal-base text-royal-base font-bold text-xs uppercase tracking-wider hover:bg-royal-base hover:text-white transition-colors"
                  >
                    Details
                  </NavLink>
                  <a
                    href={`${WHATSAPP_URL}?text=Hi, I am interested in ${encodeURIComponent(product.name)} (Rs. ${product.price.toLocaleString()})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md shadow-green-200/50 flex justify-center items-center gap-2"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#all" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-royal-base hover:text-gold-base transition-colors">
            View All Products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
