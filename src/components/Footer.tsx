/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';
import { COURSES } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column - Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-extrabold tracking-tighter text-white">
                  SAYAN'S <span className="text-secondary">CLASSES</span>
                </h2>
                <p className="text-secondary text-[10px] font-bold tracking-widest mt-0.5 uppercase">Government Job Coaching</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Empowering students in Raiganj with premium coaching, expert faculty, and a results-oriented approach.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Middle Left */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-400 text-[11px] md:text-xs">
              {['Home', 'About Us', 'Success Stories', 'Gallery', 'Admission', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Courses - Middle Right */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-[11px] md:text-xs">
              {COURSES.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="hover:text-secondary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {course.name} Coaching
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Right */}
          <div>
            <h4 className="text-base font-heading font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-[11px] md:text-xs">
              <li className="flex gap-3">
                <MapPin size={16} className="text-secondary flex-shrink-0" />
                <span className="leading-snug">{BUSINESS_DETAILS.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-secondary transition-colors font-bold text-white">{BUSINESS_DETAILS.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-secondary transition-colors">{BUSINESS_DETAILS.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] text-center md:text-left">
            © {currentYear} Sayan's Classes. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-[10px]">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
