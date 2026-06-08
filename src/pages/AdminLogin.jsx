import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import PremiumButton from '../components/PremiumButton';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10 flex items-center justify-center bg-brand-dark">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-6"
      >
        <GlassCard className="p-10 border-t-4 border-t-brand-gold">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-brand-gold w-8 h-8" />
            </div>
            <h2 className="font-playfair text-2xl font-bold text-brand-cream mb-1 tracking-widest uppercase">Admin Portal</h2>
            <p className="text-brand-cream/50 font-light text-xs tracking-wider">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-brand-gold/70 text-xs tracking-widest uppercase block mb-2">Admin Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-brand-dark/50 border border-brand-gold/20 p-3 rounded-sm text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light text-sm"
                placeholder="admin@luxecafe.com"
              />
            </div>

            <div className="relative">
              <label className="text-brand-gold/70 text-xs tracking-widest uppercase block mb-2">Access Key</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                className="w-full bg-brand-dark/50 border border-brand-gold/20 p-3 rounded-sm text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light text-sm"
                placeholder="Enter access key"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3 text-brand-gold/50 hover:text-brand-gold transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="pt-2">
              <PremiumButton type="submit" className="w-full py-3 text-xs tracking-[0.2em]">Authenticate</PremiumButton>
            </div>
          </form>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
