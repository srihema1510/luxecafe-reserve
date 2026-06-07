import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "An unparalleled sensory experience. The attention to detail in every pour-over is simply mesmerising.",
    author: "Eleanor Sterling",
    role: "Culinary Critic"
  },
  {
    quote: "LuxeCafe has redefined the modern coffee house. It's not just a beverage; it's a destination.",
    author: "Jameson Ward",
    role: "Lifestyle Magazine"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-dark/50 border-y border-brand-gold/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-gold text-6xl font-playfair leading-none block mb-8">"</span>
        </motion.div>
        
        <div className="relative h-64 md:h-48">
          {testimonials.slice(0, 1).map((t, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: i === 0 ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 1 }}
            >
              <h4 className="text-2xl md:text-3xl font-playfair font-light text-brand-cream mb-8 leading-relaxed italic">
                {t.quote}
              </h4>
              <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold">{t.author}</p>
              <p className="text-brand-cream/50 text-xs tracking-wider mt-2">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
