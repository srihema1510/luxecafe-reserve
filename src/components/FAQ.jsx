import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you require reservations?",
    answer: "While we welcome walk-ins for our front-of-house espresso bar, the Reserve Room experience and tasting menus require advanced booking to ensure the highest level of service."
  },
  {
    question: "Is there a dress code?",
    answer: "We recommend smart casual attire. We kindly ask guests to refrain from wearing athletic wear or beach attire in the Reserve Room."
  },
  {
    question: "Do you offer private events?",
    answer: "Yes, our entire venue or the private tasting room can be reserved for exclusive events. Please contact our events team at events@luxecafe.com for details."
  },
  {
    question: "Are vegan options available?",
    answer: "Absolutely. We offer an extensive selection of plant-based milks and a curated vegan dessert menu that meets our exacting culinary standards."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-brand-gold/20 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <h4 className={`font-playfair text-xl transition-colors duration-300 ${openIndex === index ? 'text-brand-gold' : 'text-brand-cream group-hover:text-brand-gold'}`}>
              {faq.question}
            </h4>
            <div className="text-brand-gold">
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-brand-cream/60 font-light pb-4 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
