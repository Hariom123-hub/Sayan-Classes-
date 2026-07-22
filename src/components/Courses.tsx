/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { COURSES } from '../data';
import CourseModal from './CourseModal';
import { Course } from '../types';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-2xl md:text-4xl font-heading font-extrabold mb-1"
          >
            Our Popular Courses
          </motion.h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-3"></div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-7xl mx-auto">
          {COURSES.map((course, idx) => {
            const IconComponent = (Icons as any)[course.icon] || Icons.BookOpen;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCourse(course)}
                className="group bg-white p-3 md:p-5 rounded-[20px] md:rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center gap-3 md:gap-5 transition-all duration-300 border border-transparent hover:border-secondary hover:shadow-xl cursor-pointer"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-50 rounded-xl md:rounded-2xl flex items-center justify-center text-red-500 shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <IconComponent className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-[13px] md:text-xl font-heading font-bold text-primary leading-tight group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <div className="mt-1 hidden md:flex items-center text-[10px] font-bold text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    View Details <Icons.ChevronRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="bg-primary text-white font-heading font-bold py-4 px-10 rounded-2xl flex items-center gap-2 mx-auto hover:bg-primary/90 transition-all shadow-xl group">
            Explore All Courses
            <Icons.ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        onCourseSelect={(course) => setSelectedCourse(course)}
      />
    </section>
  );
}
