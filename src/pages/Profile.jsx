import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import PremiumButton from '../components/PremiumButton';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <div className="pt-32 pb-20 relative z-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-brand-cream mb-4">
            My <span className="text-brand-gold italic">Profile</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full border-2 border-brand-gold/50 p-1 mb-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 cursor-pointer rounded-full">
                  <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">Update</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h2 className="font-playfair text-2xl font-bold text-brand-cream mb-2">Eleanor Sterling</h2>
              <p className="text-brand-gold text-xs uppercase tracking-widest mb-8 font-semibold">Reserve Member</p>

              <div className="space-y-4 text-left border-t border-brand-gold/20 pt-6">
                <div className="flex items-center gap-4 text-brand-cream/70 font-light text-sm">
                  <Mail className="text-brand-gold" size={18} />
                  eleanor.s@example.com
                </div>
                <div className="flex items-center gap-4 text-brand-cream/70 font-light text-sm">
                  <Phone className="text-brand-gold" size={18} />
                  +1 (212) 555-0892
                </div>
                <div className="flex items-center gap-4 text-brand-cream/70 font-light text-sm">
                  <User className="text-brand-gold" size={18} />
                  Joined May 2024
                </div>
              </div>

              <div className="mt-8">
                <PremiumButton variant="secondary" className="w-full text-xs py-3">Edit Profile</PremiumButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* Upcoming Reservations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8 h-full">
              <div className="flex justify-between items-center mb-8 border-b border-brand-gold/20 pb-4">
                <h3 className="font-playfair text-2xl text-brand-gold">Upcoming Reservations</h3>
                <Link to="/history" className="text-brand-cream/50 text-sm tracking-widest uppercase hover:text-brand-cream transition-colors">View All</Link>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-brand-dark/50 border border-brand-gold/20 p-6 rounded-sm hover:border-brand-gold/50 transition-colors gap-4">
                  <div className="flex items-start gap-4 w-full">
                    <div className="bg-brand-gold/10 p-3 rounded-full shrink-0">
                      <Calendar className="text-brand-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl text-brand-cream mb-1">The Reserve Room</h4>
                      <p className="text-brand-cream/60 font-light text-sm mb-2">October 15, 2026 • 07:00 PM</p>
                      <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-[10px] uppercase tracking-widest font-bold rounded-sm border border-brand-gold/30">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 w-full sm:w-auto text-right">
                     <p className="text-brand-cream/50 font-light text-sm mb-2">Guests: 2</p>
                     <button className="text-red-400 hover:text-red-300 text-xs tracking-widest uppercase font-semibold transition-colors">Cancel</button>
                  </div>
                </div>

                {/* Empty State Mock */}
                <div className="text-center py-12 border border-dashed border-brand-gold/20 rounded-sm">
                  <p className="text-brand-cream/50 font-light mb-4">No other upcoming reservations.</p>
                  <Link to="/reservation">
                    <PremiumButton variant="secondary" className="text-xs py-2 px-6">Book a Table</PremiumButton>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
