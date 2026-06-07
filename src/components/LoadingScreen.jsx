import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-brand-dark z-[100] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Outer glowing ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 border border-brand-gold/20 rounded-full border-t-brand-gold/80"
        />
        
        {/* Logo Text */}
        <div className="font-playfair text-4xl text-brand-gold tracking-widest font-bold">
          LC
        </div>
        
        {/* Steam effect (simplified) */}
        <motion.div
          animate={{ y: [-10, -30], opacity: [0, 0.5, 0], scale: [1, 1.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-12 bg-white/10 blur-md rounded-full"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 text-brand-cream/60 tracking-[0.3em] text-sm uppercase"
      >
        Preparing your experience...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
