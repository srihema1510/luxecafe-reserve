import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const coffees = [
  {
    name: "Ethiopian Yirgacheffe",
    notes: "Jasmine, Blueberry, Honey",
    roast: "Light",
    price: "$8",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Colombian Supremo",
    notes: "Dark Chocolate, Caramel, Orange",
    roast: "Medium",
    price: "$7",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Sumatra Mandheling",
    notes: "Earthy, Cedar, Dark Cocoa",
    roast: "Dark",
    price: "$9",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
  }
];

const CoffeeShowcase = () => {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.2em] uppercase text-sm mb-4 font-semibold"
          >
            Signature Collection
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-brand-cream"
          >
            The Reserve Cellar
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <GlassCard key={index} delay={index * 0.2} className="p-0">
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={coffee.image} 
                  alt={coffee.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" />
                <span className="absolute bottom-4 left-6 font-playfair italic text-brand-gold text-2xl">
                  {coffee.price}
                </span>
              </div>
              <div className="p-8">
                <h4 className="font-playfair text-2xl font-semibold text-brand-cream mb-2">{coffee.name}</h4>
                <div className="flex items-center gap-4 mb-4 text-xs tracking-wider uppercase">
                  <span className="text-brand-gold">{coffee.roast} Roast</span>
                </div>
                <p className="text-brand-cream/60 font-light mb-6">
                  Tasting Notes: {coffee.notes}
                </p>
                <button className="text-brand-gold uppercase tracking-widest text-xs font-semibold hover:text-brand-cream transition-colors flex items-center gap-2 group">
                  Discover 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeShowcase;
