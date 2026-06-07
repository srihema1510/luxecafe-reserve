import React from 'react';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import PremiumButton from '../components/PremiumButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6"
          >
            Get in <span className="text-brand-gold italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-brand-cream/70 text-lg font-light"
          >
            We are at your service for inquiries, private events, and feedback.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div className="glass-panel p-8 rounded-lg space-y-8">
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">Contact Information</h3>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-cream font-playfair text-lg mb-1">Address</h4>
                  <p className="text-brand-cream/70 font-light">123 Elite Avenue, Diamond District<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-cream font-playfair text-lg mb-1">Phone</h4>
                  <p className="text-brand-cream/70 font-light">+1 (212) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-cream font-playfair text-lg mb-1">Email</h4>
                  <p className="text-brand-cream/70 font-light">concierge@luxecafe.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-cream font-playfair text-lg mb-1">Hours</h4>
                  <p className="text-brand-cream/70 font-light">Mon-Thu: 7am - 8pm<br/>Fri-Sun: 8am - 10pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form className="glass-panel p-8 rounded-lg space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">Send a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light" />
                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light" />
              <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light" />
              <textarea placeholder="Message" rows="4" className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light resize-none"></textarea>
              <PremiumButton type="submit" className="w-full">Submit Inquiry</PremiumButton>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-brand-gold/10"
        >
          <h2 className="text-4xl font-playfair font-bold text-brand-cream mb-12 text-center">Frequently Asked <span className="text-brand-gold italic">Questions</span></h2>
          <FAQ />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
