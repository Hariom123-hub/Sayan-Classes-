/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ADMISSION_STEPS } from '../data';

export default function Admission() {
  return (
    <section className="py-12 md:py-16 px-4 bg-alt-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Admission Process
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-secondaryText text-xs md:text-base max-w-xl mx-auto">
            Your path to a government job starts with these simple steps.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative py-6">
          {/* Timeline Line */}
          <div className="absolute top-[58px] left-[5%] w-[90%] h-0.5 bg-border z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-secondary"
            ></motion.div>
          </div>

          <div className="relative z-10 flex justify-between">
            {ADMISSION_STEPS.map((step, idx) => {
              const IconComponent = (Icons as any)[step.icon] || Icons.CheckCircle;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center w-48"
                >
                  <div className="relative mb-6">
                    <div className="w-12 h-12 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-primary shadow-lg">
                      <IconComponent size={20} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-secondary rounded-full flex items-center justify-center font-heading font-bold text-[10px]">
                      {step.id}
                    </div>
                  </div>
                  <h4 className="text-primary font-heading font-bold text-base mb-1.5">{step.title}</h4>
                  <p className="text-secondaryText text-[11px] leading-relaxed px-4">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-8 pl-12 md:pl-24 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-4 md:left-16 w-0.5 h-full bg-border">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full bg-secondary"
            ></motion.div>
          </div>

          {ADMISSION_STEPS.map((step, idx) => {
            const IconComponent = (Icons as any)[step.icon] || Icons.CheckCircle;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 md:-left-24 top-0 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-primary z-10 shadow-md">
                  <IconComponent size={16} />
                </div>
                <div className="absolute -left-6 md:-left-18 top-0 bg-primary text-secondary w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold text-[8px] md:text-[10px] z-20">
                  {step.id}
                </div>
                <div className="pt-1">
                  <h4 className="text-primary font-heading font-bold text-base md:text-lg mb-0.5">{step.title}</h4>
                  <p className="text-secondaryText text-xs md:text-sm max-w-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
