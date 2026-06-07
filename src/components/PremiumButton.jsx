import React from 'react';
import { motion } from 'framer-motion';

const PremiumButton = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
  const baseStyles = "relative px-8 py-4 font-semibold tracking-widest uppercase text-sm overflow-hidden group transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    secondary: "bg-transparent text-brand-gold border border-brand-gold/50 hover:bg-brand-gold/10",
    glass: "glass-panel text-brand-gold hover:bg-brand-gold hover:text-brand-dark"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Shine effect on hover */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      )}
    </motion.button>
  );
};

export default PremiumButton;
