import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-brand-gold tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-semibold">
            The Pinnacle of Coffee Culture
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-brand-cream mb-8 leading-tight"
        >
          A Symphony of <br />
          <span className="text-gradient italic">Taste & Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto text-brand-cream/80 text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          Curated single-origin beans, precision brewing, and an atmosphere designed for the discerning palate. Welcome to the reserve experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/reservation">
            <PremiumButton variant="primary">Make a Reservation</PremiumButton>
          </Link>
          <Link to="/menu">
            <PremiumButton variant="secondary">View Menu</PremiumButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-gold/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-brand-gold/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-brand-gold absolute top-[-50%]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
