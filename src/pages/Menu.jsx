import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuCategories = [
    {
      title: "The Reserve Collection",
      items: [
        { name: "Panama Geisha", desc: "Bergamot, Jasmine, Honey", price: "$18" },
        { name: "Jamaican Blue Mountain", desc: "Mild, Chocolate, Floral", price: "$15" },
        { name: "Hawaiian Kona", desc: "Sweet, Nutty, Caramel", price: "$14" }
      ]
    },
    {
      title: "Classic Espresso",
      items: [
        { name: "Signature Espresso", desc: "Double shot, rich crema", price: "$5" },
        { name: "Cortado", desc: "Equal parts espresso and steamed milk", price: "$6" },
        { name: "Cappuccino", desc: "Classic third-wave preparation", price: "$6.5" }
      ]
    },
    {
      title: "Culinary Pairings",
      items: [
        { name: "Opera Cake", desc: "Almond sponge, coffee syrup, ganache", price: "$12" },
        { name: "Artisan Truffles", desc: "Selection of three dark chocolate truffles", price: "$9" },
        { name: "Lemon Tart", desc: "Yuzu curd, Italian meringue, gold leaf", price: "$11" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-brand-cream mb-6"
          >
            The <span className="text-brand-gold italic">Menu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-cream/70 text-lg font-light"
          >
            Curated offerings for the discerning palate.
          </motion.p>
        </div>

        <div className="space-y-24">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-playfair text-3xl text-brand-gold mb-10 text-center border-b border-brand-gold/20 pb-4">
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-baseline group cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-1">
                        <h4 className="font-playfair text-xl text-brand-cream group-hover:text-brand-gold transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-dotted border-brand-cream/20 relative top-[-6px]"></div>
                      </div>
                      <p className="text-brand-cream/50 font-light text-sm">{item.desc}</p>
                    </div>
                    <span className="font-playfair text-xl text-brand-gold ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
