/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Users, 
  MessageCircle, 
  Phone, 
  ChevronRight,
  ShieldCheck,
  Star,
  Info,
  MapPin,
  Laptop
} from 'lucide-react';
import { Course } from '../types';
import { BUSINESS_DETAILS } from '../constants';
import { COURSES } from '../data';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onCourseSelect: (course: Course) => void;
}

export default function CourseModal({ course, onClose, onCourseSelect }: CourseModalProps) {
  if (!course) return null;

  const relatedCourses = COURSES.filter(c => c.id !== course.id).slice(0, 4);

  const handleEnrollClick = (e: React.MouseEvent) => {
    onClose();
    // Scroll to admission section
    const admissionSection = document.getElementById('admission');
    if (admissionSection) {
      admissionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-grow scrollbar-hide">
            {/* Hero Section */}
            <div className="relative h-[250px] md:h-[350px]">
              <img 
                src={course.banner} 
                alt={course.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${course.status === 'Open' ? 'bg-secondary text-primary' : 'bg-red-500 text-white'}`}>
                    Admission {course.status}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {course.mode} Mode
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-2 leading-tight">
                  {course.name} <span className="text-secondary">Special</span>
                </h2>
                <p className="text-white/80 text-sm md:text-base max-w-2xl font-medium">
                  {course.shortIntro}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10 space-y-12">
              {/* Premium Highlights Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <HighlightCard icon={Clock} label="Duration" value={course.duration} />
                <HighlightCard icon={Calendar} label="Next Batch" value={course.startDate} />
                <HighlightCard icon={Users} label="Batch Size" value="Limited Seats" />
                <HighlightCard icon={Laptop} label="Learning" value={course.mode} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Details & Syllabus */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Detailed Info Grid */}
                  <section>
                    <SectionTitle title="Course Information" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-alt-bg p-6 rounded-2xl border border-border/50">
                      <InfoRow label="Eligibility" value={course.eligibility} />
                      <InfoRow label="Class Timing" value={course.timing} />
                      <InfoRow label="Language" value={course.language} />
                      <InfoRow label="Total Classes" value={course.totalClasses} />
                      <InfoRow label="Mock Tests" value={course.totalMockTests} />
                      <InfoRow label="Test Schedule" value={course.testSchedule} />
                      <InfoRow label="Study Materials" value={course.studyMaterials ? 'Included' : 'Not Included'} />
                      <InfoRow label="Personal Mentorship" value={course.mentorship ? 'Available' : 'No'} />
                    </div>
                  </section>

                  {/* What You Will Learn */}
                  <section>
                    <SectionTitle title="What You Will Learn" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.syllabus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-border rounded-xl shadow-sm hover:border-secondary transition-colors">
                          <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-primary">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Course Features */}
                  <section>
                    <SectionTitle title="Course Features" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-alt-bg rounded-xl border border-border/30">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                            <Star size={18} className="text-secondary" />
                          </div>
                          <span className="text-sm font-bold text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Column: Pricing & CTA */}
                <div className="space-y-8">
                  {/* Price Card */}
                  <div className="bg-primary p-8 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>
                    <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-2">Total Course Fee</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-heading font-extrabold text-white">{course.price}</span>
                      <span className="text-white/60 text-xs line-through">₹{parseInt(course.price.replace(/[^\d]/g, '')) * 1.5}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-white/80 text-xs">
                        <ShieldCheck size={16} className="text-secondary" />
                        Complete Exam Support
                      </li>
                      <li className="flex items-center gap-3 text-white/80 text-xs">
                        <Award size={16} className="text-secondary" />
                        Expert Faculty Guidance
                      </li>
                    </ul>

                    <div className="space-y-3">
                      <button 
                        onClick={handleEnrollClick}
                        className="w-full py-4 bg-secondary text-primary rounded-xl font-heading font-extrabold text-center block hover:shadow-lg transition-all active:scale-95"
                      >
                        Enroll Now
                      </button>
                      <a 
                        href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in the ${course.name} course at Sayan's Classes.`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-4 bg-white/10 text-white border border-white/20 rounded-xl font-heading font-extrabold text-center flex items-center justify-center gap-2 hover:bg-white/20 transition-all active:scale-95"
                      >
                        <MessageCircle size={18} className="text-secondary" />
                        WhatsApp Enquiry
                      </a>
                      <a 
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-heading font-extrabold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
                      >
                        <Phone size={18} />
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Highlights Summary */}
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm space-y-4">
                    <h4 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
                      <Info size={16} className="text-secondary" />
                      Quick Highlights
                    </h4>
                    <div className="space-y-3">
                      <HighlightItem label="Recorded Classes" status={course.recordedClasses} />
                      <HighlightItem label="Doubt Solving" status={course.doubtSupport} />
                      <HighlightItem label="Performance Analysis" status={course.performanceAnalysis} />
                      <HighlightItem label="Certificate" status={course.certificate} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Courses */}
              <section className="pt-10 border-t border-border">
                <SectionTitle title="Explore Related Courses" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedCourses.map((c) => (
                    <div 
                      key={c.id}
                      className="p-4 bg-alt-bg rounded-2xl border border-border group hover:bg-primary transition-all cursor-pointer"
                      onClick={() => onCourseSelect(c)}
                    >
                      <h5 className="text-primary font-heading font-bold text-base mb-1 group-hover:text-white transition-colors">{c.name}</h5>
                      <p className="text-secondaryText text-[10px] line-clamp-2 group-hover:text-white/60 transition-colors">{c.description}</p>
                      <div className="mt-3 flex items-center text-[10px] font-bold text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        View Details <ChevronRight size={12} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function HighlightCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm flex items-center gap-3">
      <div className="w-10 h-10 bg-alt-bg rounded-xl flex items-center justify-center text-primary">
        <Icon size={20} className="text-secondary" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-heading font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-primary mb-6 flex items-center gap-3">
      <div className="w-2 h-8 bg-secondary rounded-full"></div>
      {title}
    </h3>
  );
}

function InfoRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
      <span className="text-gray-500 text-xs font-medium">{label}</span>
      <span className="text-primary text-xs font-bold">{value}</span>
    </div>
  );
}

function HighlightItem({ label, status }: { label: string, status: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-secondaryText font-medium">{label}</span>
      {status ? (
        <CheckCircle2 size={14} className="text-green-500" />
      ) : (
        <X size={14} className="text-gray-300" />
      )}
    </div>
  );
}
