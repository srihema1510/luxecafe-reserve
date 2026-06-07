import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PremiumButton from '../components/PremiumButton';

const NotFound = () => {
  return (
    <div className="pt-32 pb-20 relative z-10 min-h-screen flex items-center justify-center bg-brand-dark">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-lg px-6"
      >
        <h1 className="text-8xl font-playfair font-bold text-brand-gold mb-6 tracking-widest">404</h1>
        <h2 className="text-3xl font-playfair text-brand-cream mb-4">Page Not Found</h2>
        <p className="text-brand-cream/60 font-light mb-12 leading-relaxed">
          The page you are looking for has been moved or no longer exists. 
          Please return to the main lobby.
        </p>
        <Link to="/">
          <PremiumButton variant="secondary">Return Home</PremiumButton>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
