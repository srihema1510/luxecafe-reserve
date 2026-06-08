import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, CalendarCheck, Clock, DollarSign, LayoutDashboard, Settings, LogOut, MoreVertical } from 'lucide-react';

const recentReservations = [
  { id: 'RES-1042', name: 'Eleanor Sterling', guests: 2, time: '07:00 PM', table: 'Reserve Room', status: 'Pending' },
  { id: 'RES-1041', name: 'Jameson Ward', guests: 4, time: '06:30 PM', table: 'Main Floor', status: 'Confirmed' },
  { id: 'RES-1040', name: 'Sophia Chen', guests: 2, time: '05:00 PM', table: 'Garden Patio', status: 'Seated' },
  { id: 'RES-1039', name: 'Marcus Vance', guests: 6, time: '04:15 PM', table: 'Reserve Room', status: 'Completed' },
];

const Dashboard = () => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'text-brand-gold bg-brand-gold/10 border-brand-gold/30';
      case 'Confirmed': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'Seated': return 'text-purple-400 bg-purple-900/20 border-purple-500/30';
      case 'Completed': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-brand-cream bg-brand-dark border-brand-cream/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex relative z-10 pt-20"> {/* PT-20 to clear fixed navbar if present */}
      
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex w-64 flex-col bg-brand-dark/80 border-r border-brand-gold/10 fixed h-[calc(100vh-80px)] z-20">
        <div className="p-6">
          <h3 className="font-playfair text-brand-gold text-lg font-bold tracking-widest uppercase mb-8">Admin Panel</h3>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-brand-gold/10 text-brand-gold rounded-sm border border-brand-gold/20 transition-all">
              <LayoutDashboard size={18} />
              <span className="text-sm tracking-wider font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-cream/60 hover:text-brand-gold hover:bg-brand-dark transition-all rounded-sm">
              <CalendarCheck size={18} />
              <span className="text-sm tracking-wider">Reservations</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-cream/60 hover:text-brand-gold hover:bg-brand-dark transition-all rounded-sm">
              <Users size={18} />
              <span className="text-sm tracking-wider">Customers</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-brand-cream/60 hover:text-brand-gold hover:bg-brand-dark transition-all rounded-sm">
              <Settings size={18} />
              <span className="text-sm tracking-wider">Settings</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-brand-gold/10">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 transition-all rounded-sm">
            <LogOut size={18} />
            <span className="text-sm tracking-wider">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 lg:p-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-playfair font-bold text-brand-cream">Overview</h1>
            <p className="text-brand-cream/50 text-sm font-light mt-1">Today is October 15, 2026</p>
          </div>
          <button className="bg-brand-gold text-brand-dark px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
            New Reservation
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Bookings", value: "1,248", icon: CalendarCheck, trend: "+12%" },
            { title: "Today's Guests", value: "84", icon: Users, trend: "+5%" },
            { title: "Pending", value: "12", icon: Clock, trend: "-2%" },
            { title: "Est. Revenue", value: "$8,450", icon: DollarSign, trend: "+18%" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-dark/60 border border-brand-gold/20 p-6 rounded-lg relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-brand-cream/60 text-xs tracking-widest uppercase">{stat.title}</h3>
                <stat.icon className="text-brand-gold/50" size={20} />
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-playfair text-brand-cream">{stat.value}</span>
                <span className={`text-xs mb-1 ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-brand-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Recent Reservations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-brand-dark/60 border border-brand-gold/20 rounded-lg overflow-hidden"
        >
          <div className="p-6 border-b border-brand-gold/10 flex justify-between items-center">
            <h2 className="font-playfair text-xl text-brand-gold">Recent Reservations</h2>
            <button className="text-brand-cream/50 hover:text-brand-gold transition-colors">View All</button>
          </div>
          
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-brand-dark">
                <tr>
                  <th className="px-6 py-4 text-brand-cream/50 text-[10px] tracking-widest uppercase font-semibold">Guest</th>
                  <th className="px-6 py-4 text-brand-cream/50 text-[10px] tracking-widest uppercase font-semibold">Details</th>
                  <th className="px-6 py-4 text-brand-cream/50 text-[10px] tracking-widest uppercase font-semibold">Table</th>
                  <th className="px-6 py-4 text-brand-cream/50 text-[10px] tracking-widest uppercase font-semibold">Status</th>
                  <th className="px-6 py-4 text-brand-cream/50 text-[10px] tracking-widest uppercase font-semibold text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gold/5">
                {recentReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-brand-dark/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-brand-cream font-medium text-sm">{res.name}</div>
                      <div className="text-brand-cream/40 text-xs">{res.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-brand-cream/80 text-sm">{res.time}</div>
                      <div className="text-brand-cream/50 text-xs">{res.guests} Guests</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-brand-cream/80 text-sm">{res.table}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold border ${getStatusColor(res.status)}`}>
                        {res.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-brand-cream/30 hover:text-brand-gold transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
