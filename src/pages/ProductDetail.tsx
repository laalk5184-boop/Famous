import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { useSettings } from '../context/SettingsContext';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;
  const product = products.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-slate-800 mb-4">Product not found</h2>
        <Link to="/" className="text-royal-base font-medium hover:underline">Return to Home</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <Link to="/#featured" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-royal-base transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Featured
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-white rounded border border-slate-200 overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square bg-white rounded border border-slate-200 overflow-hidden cursor-pointer hover:border-royal-base hover:shadow-md transition-all">
                    <img 
                      src={img} 
                      alt={`${product.name} preview ${idx + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="bg-white p-8 md:p-10 border border-slate-200 shadow-xl self-start">
            <div className="mb-2">
              <span className="text-[10px] font-black text-gold-base uppercase tracking-widest">{product.category}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4 leading-tight">{product.name}</h1>
            <div className="text-3xl font-black text-royal-base mb-8">
              Rs. {product.price.toLocaleString()}
            </div>
            
            <div 
              className="text-slate-600 leading-relaxed mb-8 font-medium [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>h1]:text-2xl [&>h1]:font-bold [&>h2]:text-xl [&>h2]:font-bold [&>h3]:text-lg [&>h3]:font-bold"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-6 border-b border-slate-200 pb-3">Key Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-gold-base mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200">
                <a
                  href={`${WHATSAPP_URL}?text=Hi, I am interested in ordering: ${encodeURIComponent(product.name)} (Rs. ${product.price.toLocaleString()})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-8 bg-[#25D366] hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex justify-center items-center shadow-lg shadow-green-200/50"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt="WhatsApp" className="w-5 h-5 mr-3 brightness-0 invert" />
                  Inquire on WhatsApp
                </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-slate-200">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-10 text-center">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="group cursor-pointer bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50 border border-slate-100 mb-6">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2 truncate group-hover:text-royal-base transition-colors">{p.name}</h4>
                  <p className="text-[10px] font-black text-gold-base uppercase tracking-widest mb-3">{p.category}</p>
                  <p className="text-royal-base font-black text-lg">Rs. {p.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
