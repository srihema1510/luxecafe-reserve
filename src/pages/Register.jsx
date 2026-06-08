import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import PremiumButton from '../components/PremiumButton';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg px-6"
      >
        <GlassCard className="p-10">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-brand-gold mb-2">Create Account</h2>
            <p className="text-brand-cream/60 font-light text-sm">Join the LuxeCafe Reserve community</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="pt-6">
              <PremiumButton type="submit" className="w-full">Register</PremiumButton>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-brand-gold/20 pt-6">
            <p className="text-brand-cream/60 font-light text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-gold hover:text-brand-cream transition-colors font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Register;
