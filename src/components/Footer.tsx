import { motion } from 'motion/react';
import { useSettings } from '../context/SettingsContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter leading-none text-royal-base flex gap-1.5 font-sans mb-4">
              FAMOUS <span className="text-gold-base">FURNISHERS</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Karachi's trusted furniture store, providing premium quality furniture designed for comfort, durability, and modern living.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              <li><NavLink to="/" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Home</NavLink></li>
              <li><a href="#categories" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Categories</a></li>
              <li><a href="#about" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">About</a></li>
              <li><a href="#gallery" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Gallery</a></li>
              <li><NavLink to="/admin" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Admin Panel</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">Categories</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Executive Office</a></li>
              <li><a href="#" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Home Furniture</a></li>
              <li><a href="#" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Workstations</a></li>
              <li><a href="#" className="text-sm font-bold uppercase tracking-tight text-slate-600 hover:text-royal-base transition-colors">Custom Designs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm font-medium text-slate-500">
                <MapPin className="w-5 h-5 mr-3 text-gold-base shrink-0" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center text-sm font-bold text-slate-600">
                <Phone className="w-5 h-5 mr-3 text-gold-base shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-royal-base transition-colors">{settings.phoneNumber}</a>
              </li>
              <li className="flex items-center text-sm font-medium text-slate-500">
                <Mail className="w-5 h-5 mr-3 text-gold-base shrink-0" />
                <a href="mailto:info@famousfurnishers.pk" className="hover:text-royal-base transition-colors">info@famousfurnishers.pk</a>
              </li>
              <li className="flex items-center text-sm font-medium text-slate-500">
                <Clock className="w-5 h-5 mr-3 text-gold-base shrink-0" />
                <span>Mon - Sat: 10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div>© {new Date().getFullYear()} Famous Furnishers. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Furniture</span>
            <span>Interior Design</span>
            <span>Showroom</span>
            <span className="text-royal-base">Office Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
