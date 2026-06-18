import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useSettings } from "../context/SettingsContext";

export default function Contact() {
  const { settings } = useSettings();
  const WHATSAPP_URL = `https://wa.me/${settings.whatsappNumber}`;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-royal-base uppercase tracking-widest mb-3">
              Get in Touch
            </h2>
            <h3 className="text-4xl font-serif font-black text-slate-800 mb-8">
              Visit Our Showroom
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-gold-base" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">
                    Location
                  </h4>
                  <p className="mt-1 text-slate-500 font-medium">
                    Famous Furnishers
                    <br />
                    {settings.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-gold-base" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">
                    Phone
                  </h4>
                  <p className="mt-1 text-slate-500 font-medium">
                    <a href={`tel:${settings.phoneNumber.replace(/ /g, "")}`}>
                      {settings.phoneNumber}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-gold-base" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">
                    Email
                  </h4>
                  <p className="mt-1 text-slate-500 font-medium">
                    <a href="mailto:info@famousfurnishers.pk">
                      info@famousfurnishers.pk
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-md shadow-green-200/50"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
                  alt="WhatsApp"
                  className="w-4 h-4 brightness-0 invert"
                />
                WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=Ram+Talao+Road,+Aram+Bagh,+Karachi,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-royal-base text-royal-base px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-royal-base hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            <div className="w-full h-80 bg-slate-200 border border-slate-300 overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d14481.564491745223!2d67.01438995!3d24.850508499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e104e179e83%3A0xe54e601267cded2!2sAram%20Bagh%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703112345678!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-serif font-black text-slate-900 mb-6">
              Send an Inquiry
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                  placeholder="Ali Raza"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                  placeholder="0333 3105614"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                  placeholder="I am looking for an executive office desk..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-royal-base text-white font-bold text-xs uppercase tracking-widest hover:bg-royal-dark transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
