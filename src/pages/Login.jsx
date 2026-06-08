import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import PremiumButton from '../components/PremiumButton';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Proceed to profile on successful login (UI mock)
    navigate('/profile');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md px-6"
      >
        <GlassCard className="p-10">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-brand-gold mb-2">Welcome Back</h2>
            <p className="text-brand-cream/60 font-light text-sm">Sign in to your LuxeCafe Reserve account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label className="text-brand-cream/50 text-xs tracking-widest uppercase block mb-2">Password</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                className="w-full bg-transparent border-b border-brand-gold/30 py-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors font-light"
                placeholder="Enter your password"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 text-brand-gold hover:text-brand-cream transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden peer" />
                <div className="w-4 h-4 border border-brand-gold/50 rounded-sm peer-checked:bg-brand-gold peer-checked:border-brand-gold flex items-center justify-center transition-all">
                  <span className="text-brand-dark text-xs opacity-0 peer-checked:opacity-100">✓</span>
                </div>
                <span className="text-brand-cream/60 text-sm font-light group-hover:text-brand-cream transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-brand-gold text-sm font-light hover:text-brand-cream transition-colors">Forgot password?</a>
            </div>

            <div className="pt-4">
              <PremiumButton type="submit" className="w-full">Sign In</PremiumButton>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-brand-gold/20 pt-6">
            <p className="text-brand-cream/60 font-light text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-brand-gold hover:text-brand-cream transition-colors font-semibold">
                Create one
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Login;
