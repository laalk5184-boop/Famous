import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import { Product } from '../types';
import { categories } from '../data';
import RichTextEditor from '../components/RichTextEditor';

export default function AddProduct({ onBack, initialProduct }: { onBack: () => void, initialProduct?: Product }) {
  const { addProduct, updateProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: initialProduct?.name || '',
    category: initialProduct?.category || categories[0]?.name || 'Executive Office Furniture',
    price: initialProduct?.price?.toString() || '',
    shortDescription: initialProduct?.shortDescription || '',
    status: initialProduct?.status || 'active',
    isFeatured: initialProduct?.isFeatured !== undefined ? initialProduct.isFeatured : true
  });
  const [description, setDescription] = useState(initialProduct?.description || '');
  const [images, setImages] = useState<string[]>(initialProduct?.gallery || (initialProduct?.image ? [initialProduct.image] : []));
  const [imageUrl, setImageUrl] = useState('');
  const [featuresInput, setFeaturesInput] = useState(initialProduct?.features?.join('\n') || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const addImageUrl = () => {
    if (imageUrl && !images.includes(imageUrl)) {
      setImages([...images, imageUrl]);
      setImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !description) {
      alert('Please fill out all required fields.');
      return;
    }

    const newProduct: Product = {
      id: initialProduct?.id || `prod-${Date.now()}`,
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      shortDescription: formData.shortDescription,
      description: description,
      features: featuresInput.split('\n').filter(f => f.trim()),
      image: images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
      gallery: images,
      rating: initialProduct?.rating || 5.0, // Default rating
      status: formData.status as 'active' | 'draft',
      isFeatured: formData.isFeatured
    };

    if (initialProduct) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }
    onBack();
  };

  return (
    <div className="bg-white rounded border border-slate-200 shadow-sm p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif font-black text-slate-900">{initialProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-bold text-slate-500 hover:text-royal-base transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Product Name *</label>
            <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Price (Rs.) *</label>
            <input required type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Category *</label>
            <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors">
              {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Status</label>
            <select name="status" value={formData.status} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors">
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Short Description</label>
          <input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Description (Rich Text) *</label>
          <RichTextEditor value={description} onChange={setDescription} />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Features (One per line)</label>
          <textarea rows={4} value={featuresInput} onChange={(e) => setFeaturesInput(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors" placeholder="Solid Wood&#10;Easy Assembly"></textarea>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Product Images</label>
          <div className="flex gap-2">
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Paste image URL here" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors" />
            <button type="button" onClick={addImageUrl} className="px-6 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center">
              <Upload className="w-4 h-4 mr-2" /> Add URL
            </button>
          </div>
          
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square border border-slate-200 rounded overflow-hidden group">
                  <img src={img} alt={`Preview ${i}`} className="w-full h-full object-cover" />
                  <button type="button" onClick={() => removeImage(i)} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                  </button>
                  {i === 0 && <span className="absolute bottom-2 left-2 px-2 py-1 bg-royal-base text-white text-[10px] font-bold uppercase tracking-widest rounded shadow">Primary</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={handleInputChange} className="w-5 h-5 accent-royal-base" />
          <label htmlFor="isFeatured" className="text-sm font-bold text-slate-700 cursor-pointer">Set as Featured Product</label>
        </div>

        <div className="pt-8 flex justify-end">
          <button type="submit" className="px-8 py-4 bg-royal-base text-white font-bold text-xs uppercase tracking-widest hover:bg-royal-dark transition-colors shadow-lg flex items-center">
            <Save className="w-4 h-4 mr-2" /> {initialProduct ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
