/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="results" className="py-8 md:py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xl md:text-3xl font-heading font-extrabold mb-1"
          >
            What Our Students Say
          </motion.h2>
          <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mb-2"></div>
          <p className="text-secondaryText text-[10px] md:text-sm max-w-lg mx-auto">
            Success stories that inspire and prove our commitment to excellence.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto px-4 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-alt-bg p-3 md:p-6 rounded-[16px] md:rounded-[20px] relative text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center text-primary shadow-md">
                <Quote size={16} className="md:w-5 md:h-5" />
              </div>

              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} size={10} className="md:w-3 md:h-3 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-primary text-xs md:text-base leading-relaxed font-medium italic mb-4">
                "{TESTIMONIALS[index].text}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mb-1.5 border border-white shadow-sm">
                  <img src={TESTIMONIALS[index].image} alt={TESTIMONIALS[index].name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xs md:text-sm font-heading font-bold text-primary">{TESTIMONIALS[index].name}</h4>
                <p className="text-secondary font-semibold text-[8px] md:text-[10px] uppercase tracking-wider">{TESTIMONIALS[index].exam}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all z-10"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-all z-10"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === index ? 'w-6 md:w-8 bg-secondary' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
