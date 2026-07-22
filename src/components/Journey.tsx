/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { JOURNEY_STEPS } from '../data';

export default function Journey() {
  return (
    <section className="py-12 md:py-16 px-4 bg-alt-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Your Preparation Journey
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-secondaryText text-xs md:text-base max-w-xl mx-auto">
            From foundation to final selection, we guide you through every step of the way.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative pb-12">
          {/* Progress Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-1 bg-secondary -translate-y-1/2 z-10"
          ></motion.div>

          <div className="relative z-20 flex justify-between">
            {JOURNEY_STEPS.map((step, idx) => {
              const IconComponent = (Icons as any)[step.icon] || Icons.Circle;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center w-40"
                >
                  <div className="w-12 h-12 bg-white border-4 border-secondary rounded-full flex items-center justify-center text-primary mb-4 shadow-lg">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-primary font-heading font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-secondaryText text-[10px] leading-tight px-2">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile/Tablet */}
        <div className="lg:hidden relative space-y-8 pl-10 md:pl-20">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 md:left-14 w-1 h-full bg-border">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full bg-secondary"
            ></motion.div>
          </div>

          {JOURNEY_STEPS.map((step, idx) => {
            const IconComponent = (Icons as any)[step.icon] || Icons.Circle;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-4"
              >
                <div className="absolute -left-[2.35rem] md:-left-[2.85rem] top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-4 border-secondary rounded-full flex items-center justify-center text-primary z-10">
                  <IconComponent size={14} className="md:w-4 md:h-4" />
                </div>
                <div>
                  <h4 className="text-primary font-heading font-bold text-base md:text-lg mb-0.5">{step.title}</h4>
                  <p className="text-secondaryText text-xs md:text-sm leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
