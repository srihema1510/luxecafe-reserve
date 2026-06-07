import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import PremiumButton from './PremiumButton';

const ReservationSummary = ({ data, onConfirm, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto w-full"
    >
      <GlassCard className="text-center">
        <h3 className="font-playfair text-3xl text-brand-gold mb-8">Confirm Details</h3>
        
        <div className="space-y-6 text-left mb-8">
          <div className="border-b border-brand-gold/20 pb-4">
            <span className="text-brand-cream/50 text-xs tracking-[0.2em] uppercase block mb-1">Date & Time</span>
            <span className="text-brand-cream text-lg font-light">{data.date || 'Not selected'} at {data.time || 'Not selected'}</span>
          </div>
          <div className="border-b border-brand-gold/20 pb-4">
            <span className="text-brand-cream/50 text-xs tracking-[0.2em] uppercase block mb-1">Table Selection</span>
            <span className="text-brand-cream text-lg font-light">{data.table || 'Standard'}</span>
          </div>
          <div className="border-b border-brand-gold/20 pb-4">
            <span className="text-brand-cream/50 text-xs tracking-[0.2em] uppercase block mb-1">Guest Details</span>
            <span className="text-brand-cream text-lg font-light block">{data.name || 'John Doe'}</span>
            <span className="text-brand-cream/70 text-sm font-light">{data.email || 'johndoe@example.com'} • {data.guests || 2} Guests</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <PremiumButton variant="secondary" onClick={onBack}>
            Back
          </PremiumButton>
          <PremiumButton variant="primary" onClick={onConfirm}>
            Confirm Reservation
          </PremiumButton>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ReservationSummary;
