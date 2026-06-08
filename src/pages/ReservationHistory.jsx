import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const mockReservations = [
  { id: 'RES-001', date: 'Oct 15, 2026', time: '07:00 PM', type: 'The Reserve Room', guests: 2, status: 'upcoming' },
  { id: 'RES-002', date: 'Sep 22, 2026', time: '09:00 AM', type: 'Main Floor', guests: 4, status: 'completed' },
  { id: 'RES-003', date: 'Aug 05, 2026', time: '01:00 PM', type: 'Garden Patio', guests: 3, status: 'completed' },
  { id: 'RES-004', date: 'Jul 12, 2026', time: '05:00 PM', type: 'The Reserve Room', guests: 2, status: 'cancelled' },
];

const ReservationHistory = () => {
  const getStatusBadge = (status) => {
    switch(status) {
      case 'upcoming':
        return <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-sm text-[10px] uppercase tracking-widest font-bold">Upcoming</span>;
      case 'completed':
        return <span className="px-3 py-1 bg-green-900/40 text-green-400 border border-green-500/30 rounded-sm text-[10px] uppercase tracking-widest font-bold">Completed</span>;
      case 'cancelled':
        return <span className="px-3 py-1 bg-red-900/40 text-red-400 border border-red-500/30 rounded-sm text-[10px] uppercase tracking-widest font-bold">Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-20 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-brand-cream mb-4">
            Reservation <span className="text-brand-gold italic">History</span>
          </h1>
          <p className="text-brand-cream/70 text-lg font-light">View and manage your bookings.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-0 overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block w-full overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-brand-dark/80 border-b border-brand-gold/20">
                  <tr>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold">Ref ID</th>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold">Date & Time</th>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold">Experience</th>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold">Guests</th>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold">Status</th>
                    <th className="p-6 text-brand-cream/50 text-xs tracking-widest uppercase font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-gold/10">
                  {mockReservations.map((res) => (
                    <tr key={res.id} className="hover:bg-brand-dark/40 transition-colors">
                      <td className="p-6 text-brand-cream font-light text-sm">{res.id}</td>
                      <td className="p-6">
                        <div className="text-brand-cream font-medium">{res.date}</div>
                        <div className="text-brand-cream/60 text-xs font-light">{res.time}</div>
                      </td>
                      <td className="p-6 font-playfair text-lg text-brand-gold">{res.type}</td>
                      <td className="p-6 text-brand-cream font-light">{res.guests}</td>
                      <td className="p-6">{getStatusBadge(res.status)}</td>
                      <td className="p-6 text-right">
                        {res.status === 'upcoming' ? (
                          <button className="text-red-400 hover:text-red-300 text-xs tracking-widest uppercase font-semibold transition-colors">Cancel</button>
                        ) : (
                          <span className="text-brand-cream/30 text-xs">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-brand-gold/10">
              {mockReservations.map((res) => (
                <div key={res.id} className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-brand-cream/50 text-xs mb-1 block">{res.id}</span>
                      <h4 className="font-playfair text-xl text-brand-gold">{res.type}</h4>
                    </div>
                    {getStatusBadge(res.status)}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-brand-cream/50 text-xs uppercase block mb-1">Date</span>
                      <span className="text-brand-cream font-light">{res.date}</span>
                    </div>
                    <div>
                      <span className="text-brand-cream/50 text-xs uppercase block mb-1">Time</span>
                      <span className="text-brand-cream font-light">{res.time}</span>
                    </div>
                    <div>
                      <span className="text-brand-cream/50 text-xs uppercase block mb-1">Guests</span>
                      <span className="text-brand-cream font-light">{res.guests}</span>
                    </div>
                  </div>
                  {res.status === 'upcoming' && (
                    <div className="pt-4 border-t border-brand-gold/10 text-right">
                      <button className="text-red-400 hover:text-red-300 text-xs tracking-widest uppercase font-semibold">Cancel Reservation</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationHistory;
