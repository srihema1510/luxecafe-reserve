import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-lg overflow-hidden h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000" 
                alt="Barista crafting coffee" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-brand-gold/30 rounded-full -z-10 animate-float-slow"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-brand-gold tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Our Heritage</h3>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-cream leading-tight">
                Crafting perfection, <br/>
                <span className="italic text-brand-cream/80 font-light">one cup at a time.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-brand-cream/70 font-light leading-relaxed text-lg"
            >
              <p>
                Founded on the belief that coffee is an art form, LuxeCafe Reserve represents the culmination of decades of roasting expertise and culinary passion.
              </p>
              <p>
                We source only the top 1% of Arabica beans globally, ensuring each harvest meets our exacting standards for clarity, complexity, and ethical sourcing. Our master roasters coax the unique terroir out of every batch, delivering a transcendent experience in the cup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_placeholder.svg" alt="Founder Signature" className="h-16 opacity-50 invert" />
              <p className="mt-2 font-playfair italic text-brand-gold">Alexander Vance, Master Roaster</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
