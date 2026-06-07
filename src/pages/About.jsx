import React from 'react';
import { motion } from 'framer-motion';
import StorySection from '../components/StorySection';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6"
        >
          Our <span className="text-brand-gold italic">Story</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-brand-cream/70 text-lg font-light"
        >
          A journey of passion, precision, and the relentless pursuit of coffee perfection.
        </motion.p>
      </div>

      <StorySection />

      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-playfair text-3xl text-brand-gold text-center mb-16">The Timeline</h3>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">
            {[
              { year: "2010", title: "The Inception", desc: "Started as a small roastery focused solely on single-origin Ethiopian beans." },
              { year: "2015", title: "The Reserve Room", desc: "Opened our first flagship location featuring the innovative tasting room concept." },
              { year: "2020", title: "Global Sourcing", desc: "Established direct trade relationships with over 50 micro-lot farmers worldwide." },
              { year: "2025", title: "LuxeCafe Today", desc: "Redefining the standard of luxury hospitality in the coffee industry." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold bg-brand-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-brand-gold/20 bg-brand-dark/40 backdrop-blur-sm hover:border-brand-gold/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-playfair text-xl text-brand-cream font-bold">{item.title}</h4>
                    <span className="text-brand-gold text-sm tracking-widest">{item.year}</span>
                  </div>
                  <p className="text-brand-cream/60 font-light text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
