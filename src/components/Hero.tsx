import { motion } from 'motion/react';
import { Phone, MessageCircle, CheckCircle, Award, BookOpen, Users } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export default function Hero() {
  const features = [
    { icon: <Users size={18} />, text: 'Experienced Faculty' },
    { icon: <BookOpen size={18} />, text: 'Updated Materials' },
    { icon: <Award size={18} />, text: 'Regular Mock Tests' },
    { icon: <CheckCircle size={18} />, text: 'Personal Mentorship' },
  ];

  return (
    <section className="relative w-full md:aspect-video min-h-[500px] md:min-h-0 overflow-hidden flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/IMG_20260721_184136.jpg" 
          alt="Classroom Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-8 py-12 md:py-0">
        <div className="max-w-[700px]">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border-2 border-secondary/30 bg-primary/40 px-4 py-1.5 rounded-full mb-4 md:mb-6"
          >
            <span className="text-secondary font-heading font-bold text-[10px] md:text-sm tracking-widest uppercase">
              Your Dream Job is Our Goal
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-4 md:mb-6 leading-[1.1]"
          >
            Best Coaching for <br />
            <span className="text-secondary">GOVERNMENT JOBS</span> <br />
            in Raiganj
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm md:text-xl mb-6 md:mb-10 max-w-[550px] leading-relaxed font-body"
          >
            Join Sayan's Classes and prepare for SSC, Railway, Police, WBCS and other Government exams with experienced faculty, quality study materials and regular mock tests.
          </motion.p>

          {/* Features Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:flex md:items-center gap-3 md:gap-8 mb-8 md:mb-10"
          >
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/90">
                <span className="text-secondary">{item.icon}</span>
                <span className="text-[10px] md:text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <a 
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 bg-secondary text-primary font-heading font-bold py-3 md:py-4 px-6 md:px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-xl text-sm md:text-base"
            >
              <Phone size={18} className="md:w-5 md:h-5" />
              Call Now
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-heading font-bold py-3 md:py-4 px-6 md:px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-xl text-sm md:text-base"
            >
              <MessageCircle size={18} className="md:w-5 md:h-5" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
