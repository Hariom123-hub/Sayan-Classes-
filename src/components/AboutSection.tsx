/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { title: 'Personalized Guidance', icon: <Users size={20} /> },
    { title: 'Result Oriented Coaching', icon: <Award size={20} /> },
    { title: 'Regular Doubt Sessions', icon: <CheckCircle2 size={20} /> },
    { title: 'Updated Study Material', icon: <BookOpen size={20} /> },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-alt-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/IMG_20260721_184050.jpg" 
                alt="Founder Sayan Sir" 
                className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-20"></div>
            
            <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Years of</p>
                  <p className="text-lg font-heading font-extrabold text-primary">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-secondary font-heading font-bold text-sm md:text-base tracking-[0.2em] uppercase mb-3">
                Welcome to Sayan's Classes
              </h4>
              <h2 className="text-primary text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
                Pioneering <span className="text-secondary">Success</span> in <br className="hidden md:block" /> Competitive Exams
              </h2>
              <p className="text-secondaryText text-sm md:text-lg leading-relaxed">
                Since our inception, Sayan's Classes has been dedicated to transforming the career dreams of thousands of students in Raiganj and beyond. Our philosophy is simple: provide the highest quality education with personalized attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-primary">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-primary rounded-[24px] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full"></div>
              <p className="text-sm italic mb-4 relative z-10 leading-relaxed">
                "Our mission is to empower every student with the knowledge and confidence to crack government exams. We don't just teach subjects; we build careers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 h-px bg-secondary"></div>
                <span className="font-heading font-bold text-secondary">Sayan Sir, Founder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
