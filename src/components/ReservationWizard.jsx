import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import PremiumButton from './PremiumButton';
import ReservationSummary from './ReservationSummary';

const steps = ["Date", "Time", "Table", "Details", "Confirm"];

const ReservationWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    table: '',
    guests: '2',
    name: '',
    email: '',
    requests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(c => c - 1);
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
  };

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto w-full text-center"
      >
        <GlassCard>
          <div className="w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center mx-auto mb-6">
            <span className="text-brand-gold text-3xl">✓</span>
          </div>
          <h2 className="font-playfair text-3xl text-brand-gold mb-4">Reservation Confirmed</h2>
          <p className="text-brand-cream/70 font-light mb-8">
            We look forward to hosting you on {formData.date}. A confirmation email has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-brand-gold uppercase tracking-widest text-sm font-semibold hover:text-brand-cream transition-colors"
          >
            Return to Home
          </button>
        </GlassCard>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-brand-gold/20 -z-10" />
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-brand-gold -z-10"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full mb-2 transition-colors duration-500 ${
              idx <= currentStep ? 'bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-brand-dark border border-brand-gold/30'
            }`} />
            <span className={`text-[10px] tracking-widest uppercase transition-colors duration-500 ${
              idx <= currentStep ? 'text-brand-gold' : 'text-brand-cream/30'
            }`}>{step}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && (
            <GlassCard>
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 text-center">Select Date</h3>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => updateForm('date', e.target.value)}
                className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors text-center font-light cursor-pointer color-scheme-dark"
                style={{ colorScheme: 'dark' }}
              />
              <div className="mt-8 text-center">
                <PremiumButton onClick={handleNext} disabled={!formData.date}>Next</PremiumButton>
              </div>
            </GlassCard>
          )}

          {currentStep === 1 && (
            <GlassCard>
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 text-center">Select Time</h3>
              <div className="grid grid-cols-3 gap-4">
                {['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'].map((time) => (
                  <button
                    key={time}
                    onClick={() => updateForm('time', time)}
                    className={`py-3 text-sm tracking-wider rounded-sm transition-all duration-300 ${
                      formData.time === time 
                        ? 'bg-brand-gold text-brand-dark' 
                        : 'border border-brand-gold/30 text-brand-cream/70 hover:border-brand-gold hover:text-brand-gold'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <PremiumButton variant="secondary" onClick={handleBack}>Back</PremiumButton>
                <PremiumButton onClick={handleNext} disabled={!formData.time}>Next</PremiumButton>
              </div>
            </GlassCard>
          )}

          {currentStep === 2 && (
            <GlassCard>
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 text-center">Select Experience</h3>
              <div className="space-y-4">
                {[
                  { id: 'standard', name: 'Main Floor', desc: 'Experience the vibrant atmosphere of the main cafe.' },
                  { id: 'reserve', name: 'The Reserve Room', desc: 'An intimate, guided tasting experience.' },
                  { id: 'patio', name: 'Garden Patio', desc: 'Outdoor seating with serene landscaping.' }
                ].map((table) => (
                  <button
                    key={table.id}
                    onClick={() => updateForm('table', table.name)}
                    className={`w-full p-4 text-left border rounded-sm transition-all duration-300 ${
                      formData.table === table.name
                        ? 'border-brand-gold bg-brand-gold/10'
                        : 'border-brand-gold/20 hover:border-brand-gold/50'
                    }`}
                  >
                    <h4 className={`font-playfair text-lg mb-1 ${formData.table === table.name ? 'text-brand-gold' : 'text-brand-cream'}`}>
                      {table.name}
                    </h4>
                    <p className="text-brand-cream/50 text-sm font-light">{table.desc}</p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <PremiumButton variant="secondary" onClick={handleBack}>Back</PremiumButton>
                <PremiumButton onClick={handleNext} disabled={!formData.table}>Next</PremiumButton>
              </div>
            </GlassCard>
          )}

          {currentStep === 3 && (
            <GlassCard>
              <h3 className="font-playfair text-2xl text-brand-gold mb-6 text-center">Guest Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Number of Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => updateForm('guests', e.target.value)}
                    className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                  >
                    {[1,2,3,4,5,6].map(num => <option key={num} value={num} className="bg-brand-dark">{num} Guests</option>)}
                  </select>
                </div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                />
                <textarea 
                  placeholder="Special Requests (Optional)" 
                  value={formData.requests}
                  onChange={(e) => updateForm('requests', e.target.value)}
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light resize-none"
                  rows="2"
                />
              </div>
              <div className="mt-8 flex justify-between">
                <PremiumButton variant="secondary" onClick={handleBack}>Back</PremiumButton>
                <PremiumButton onClick={handleNext} disabled={!formData.name || !formData.email}>Next</PremiumButton>
              </div>
            </GlassCard>
          )}

          {currentStep === 4 && (
            <ReservationSummary 
              data={formData} 
              onConfirm={handleConfirm} 
              onBack={handleBack} 
            />
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ReservationWizard;
