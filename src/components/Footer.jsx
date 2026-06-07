import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Coffee className="w-8 h-8 text-brand-gold" />
              <span className="font-playfair text-2xl font-bold tracking-wider text-brand-cream">
                LuxeCafe
              </span>
            </Link>
            <p className="text-brand-cream/70 leading-relaxed font-light">
              Experience the pinnacle of coffee culture in an atmosphere designed for the discerning palate.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-playfair font-bold">
                In
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-playfair font-bold">
                Fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-playfair font-bold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-brand-gold mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Reservation'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-brand-cream/70 hover:text-brand-gold transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl text-brand-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-cream/70 font-light">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                <span>123 Elite Avenue, Diamond District<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-brand-cream/70 font-light">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-brand-cream/70 font-light">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>reserve@luxecafe.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-xl text-brand-gold mb-6">Newsletter</h4>
            <p className="text-brand-cream/70 font-light mb-4">
              Subscribe to receive updates on exclusive tastings and new seasonal offerings.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-brand-dark border-b border-brand-gold/30 py-3 pl-0 pr-10 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold hover:text-brand-cream transition-colors">
                →
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-cream/50 text-sm font-light">
            © {new Date().getFullYear()} LuxeCafe Reserve. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-cream/50 font-light">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
