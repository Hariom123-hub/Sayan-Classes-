import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md h-16' : 'h-20 shadow-sm'
      } rounded-b-xl`}
    >
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-xl flex items-center justify-center text-primary shadow-sm">
            <GraduationCap size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-heading font-extrabold text-xl md:text-2xl leading-none">
              SAYAN'S CLASSES
            </span>
            <span className="text-secondary text-[10px] md:text-xs font-semibold tracking-wider">
              GOVERNMENT JOB COACHING
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-primary font-semibold hover:text-secondary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Enquire Button */}
        <div className="hidden md:block">
          <button className="bg-secondary text-primary font-heading font-semibold py-2.5 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t lg:hidden flex flex-col p-4 gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary font-semibold text-lg py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-primary font-heading font-semibold py-3 px-6 rounded-xl mt-2">
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
