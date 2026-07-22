/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data';

interface FAQItemProps {
  key?: React.Key;
  faq: typeof FAQS[0];
  isOpen: boolean;
  toggle: () => void;
}

function FAQItem({ faq, isOpen, toggle }: FAQItemProps) {
  return (
    <div className={`mb-2 border border-border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md bg-alt-bg border-secondary' : 'bg-white'}`}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
      >
        <span className={`text-sm md:text-base font-heading font-bold pr-6 transition-colors ${isOpen ? 'text-primary' : 'text-primary'}`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-secondary rotate-180' : 'bg-alt-bg text-primary'}`}>
          {isOpen ? <Minus size={14} className="md:w-4 md:h-4" /> : <Plus size={14} className="md:w-4 md:h-4" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 md:px-5 pb-4 md:pb-5 text-secondaryText text-xs md:text-sm leading-relaxed">
              <div className="h-px w-full bg-border mb-3"></div>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-secondaryText text-xs md:text-base max-w-xl mx-auto">
            Everything you need to know about our coaching and admission process.
          </p>
        </div>

        <div className="space-y-1">
          {FAQS.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx} 
              toggle={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
