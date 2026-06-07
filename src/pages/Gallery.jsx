import React from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <div className="pt-32 pb-20 relative z-10 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6"
          >
            The <span className="text-brand-gold italic">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-brand-cream/70 text-lg font-light"
          >
            A visual exploration of the LuxeCafe Reserve experience.
          </motion.p>
        </div>

        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
