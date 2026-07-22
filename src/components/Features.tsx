/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../data';

export default function Features() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-alt-bg">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Why Students Choose Sayan's Classes
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
        </div>

        {/* Features Grid - Matches screenshot horizontal layout */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-5xl mx-auto">
          {FEATURES.map((feature, idx) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 md:p-5 rounded-[20px] md:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center gap-3 md:gap-5 transition-all duration-300 border border-transparent hover:border-secondary/20"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <IconComponent className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-[13px] md:text-xl font-heading font-bold text-primary leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
