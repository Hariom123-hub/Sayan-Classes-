/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Send, Globe } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';
import { COURSES } from '../data';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-secondaryText text-xs md:text-base max-w-xl mx-auto">
            Have questions? Visit us or send a message for expert counselling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Contact Info & Map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Address */}
              <div className="flex gap-3 bg-alt-bg p-4 rounded-2xl border border-border/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm flex-shrink-0 border border-border">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-primary mb-0.5">Visit Us</h4>
                  <p className="text-secondaryText text-xs leading-relaxed">{BUSINESS_DETAILS.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 bg-alt-bg p-4 rounded-2xl border border-border/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm flex-shrink-0 border border-border">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-primary mb-0.5">Call Us</h4>
                  <p className="text-secondaryText text-xs leading-relaxed font-bold">{BUSINESS_DETAILS.phone}</p>
                  <p className="text-[10px] text-secondaryText/70 leading-relaxed">Available: 9 AM - 8 PM</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3 bg-alt-bg p-4 rounded-2xl border border-border/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#25D366] shadow-sm flex-shrink-0 border border-border">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-primary mb-0.5">WhatsApp</h4>
                  <p className="text-secondaryText text-xs leading-relaxed font-bold">{BUSINESS_DETAILS.whatsapp}</p>
                  <p className="text-[10px] text-secondaryText/70 leading-relaxed">Quick Response</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 bg-alt-bg p-4 rounded-2xl border border-border/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm flex-shrink-0 border border-border">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-primary mb-0.5">Opening Hours</h4>
                  <p className="text-secondaryText text-xs leading-relaxed">Mon - Sat: 8 AM - 9 PM</p>
                  <p className="text-secondaryText text-xs leading-relaxed">Sunday: 10 AM - 4 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.447475143093!2d88.1256336!3d25.6231922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f035f8d956f7f7%3A0xc3f1f3f3f3f3f3f3!2sCollege%20Para%2C%20Raiganj%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1626880000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Sayan's Classes Location"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-alt-bg p-6 md:p-8 rounded-3xl border border-border shadow-sm relative overflow-hidden"
          >
            <h3 className="text-xl font-heading font-bold text-primary mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sen"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-sm text-primary"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. 9876543210"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-sm text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. rahul@example.com"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-sm text-primary"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Select Course</label>
                <select className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-sm text-primary appearance-none">
                  <option value="">Choose a course</option>
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                  ))}
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Message</label>
                <textarea 
                  rows={3}
                  placeholder="Write your message here..."
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/50 transition-all outline-none text-sm text-primary resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-secondary py-4 rounded-xl font-heading font-extrabold text-base flex items-center justify-center gap-2 hover:shadow-lg transition-all group mt-2"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
