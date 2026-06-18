import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-4xl font-serif font-black text-slate-800">What Our Customers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 border border-slate-200 relative group"
            >
              <div className="flex text-gold-base mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed italic font-serif group-hover:text-royal-base transition-colors duration-300">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-royal-base text-white rounded-full flex items-center justify-center font-bold font-sans">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">{review.author}</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Buyer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
