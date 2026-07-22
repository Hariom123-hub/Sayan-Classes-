/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ACHIEVEMENTS } from '../data';

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps approx
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary">
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-10 md:py-12 bg-primary text-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 text-center">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-2"
            >
              <Counter end={item.count} suffix={item.suffix} />
              <span className="text-gray-400 font-semibold uppercase tracking-wider text-xs md:text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
