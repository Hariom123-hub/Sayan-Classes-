/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle, 
  Search, 
  ShieldCheck, 
  Lightbulb,
  MessageCircle,
  FileText,
  ClipboardList,
  Target,
  BarChart3,
  RotateCcw,
  Headphones,
  UserCheck,
  Phone
} from 'lucide-react';

import { Course } from './types';

export const COURSES: Course[] = [
  { 
    id: 'wbcs', 
    name: 'WBCS', 
    description: 'Comprehensive preparation for West Bengal Civil Services.', 
    shortIntro: 'Master the WBCS exam with our intensive foundation to interview program.',
    icon: 'GraduationCap',
    banner: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    price: '₹14,999',
    status: 'Open',
    startDate: '15th Aug 2026',
    duration: '12 Months',
    mode: 'Offline',
    timing: '10:00 AM - 02:00 PM',
    language: 'Bengali / English',
    eligibility: 'Graduate (Any stream)',
    totalClasses: '300+',
    totalMockTests: '50+',
    studyMaterials: true,
    recordedClasses: true,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Every Sunday',
    certificate: false,
    syllabus: [
      'Indian History & National Movement',
      'Geography of India with special reference to WB',
      'Indian Polity & Economy',
      'General Mental Ability',
      'English Composition',
      'General Science',
      'Current Events of National & International Importance'
    ],
    features: [
      'WBCS Officer Mentorship',
      'Special focus on Optional Subjects',
      'Answer Writing Practice',
      'Updated Current Affairs Modules',
      'Weekly Descriptive Tests'
    ]
  },
  { 
    id: 'ssc-cgl', 
    name: 'SSC CGL', 
    description: 'Targeted coaching for Staff Selection Commission Combined Graduate Level.', 
    shortIntro: 'Unlock your career in central government departments with our expert SSC coaching.',
    icon: 'Target',
    banner: 'https://images.unsplash.com/photo-1454165833762-0104616f6423?auto=format&fit=crop&q=80&w=1200',
    price: '₹9,999',
    status: 'Open',
    startDate: '1st Sept 2026',
    duration: '6 Months',
    mode: 'Hybrid',
    timing: '04:00 PM - 07:00 PM',
    language: 'Hindi / English',
    eligibility: 'Graduate',
    totalClasses: '180+',
    totalMockTests: '100+',
    studyMaterials: true,
    recordedClasses: true,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Every Saturday',
    certificate: false,
    syllabus: [
      'Quantitative Aptitude',
      'Reasoning',
      'English Language',
      'General Awareness',
      'Current Affairs',
      'Mock Test Practice',
      'Previous Year Questions'
    ],
    features: [
      'Speed Math Techniques',
      'Daily Practice Sheets (DPP)',
      'Tier 1 + Tier 2 Integrated Prep',
      'Computer Proficiency Training',
      'Strategy Sessions by Toppers'
    ]
  },
  { 
    id: 'ssc-chsl', 
    name: 'SSC CHSL', 
    description: 'Expert guidance for Combined Higher Secondary Level exams.', 
    shortIntro: 'Get your dream central government job right after 10+2 with our CHSL program.',
    icon: 'BookOpen',
    banner: 'https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?auto=format&fit=crop&q=80&w=1200',
    price: '₹7,999',
    status: 'Open',
    startDate: '10th Sept 2026',
    duration: '5 Months',
    mode: 'Offline',
    timing: '02:00 PM - 05:00 PM',
    language: 'Hindi / English',
    eligibility: '10+2 Pass',
    totalClasses: '150+',
    totalMockTests: '80+',
    studyMaterials: true,
    recordedClasses: true,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Weekly Test',
    certificate: false,
    syllabus: [
      'English Language (Basic Knowledge)',
      'General Intelligence',
      'Quantitative Aptitude (Arithmetic Skills)',
      'General Awareness',
      'Skill Test / Typing Test Prep',
      'Previous Year Paper Analysis'
    ],
    features: [
      'Typing Speed Training',
      'Shortcut Arithmetic Tricks',
      'Regular Doubt Clearing',
      'Comprehensive Study Notes',
      'Performance Tracking'
    ]
  },
  { 
    id: 'ssc-mts', 
    name: 'SSC MTS', 
    description: 'Foundation to advanced level coaching for Multi-Tasking Staff.', 
    shortIntro: 'Secure your future in central government with our focused SSC MTS course.',
    icon: 'FileText',
    banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    price: '₹5,999',
    status: 'Open',
    startDate: '15th Sept 2026',
    duration: '4 Months',
    mode: 'Offline',
    timing: '11:00 AM - 01:00 PM',
    language: 'Bengali / Hindi',
    eligibility: '10th Pass',
    totalClasses: '100+',
    totalMockTests: '50+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Twice a Month',
    certificate: false,
    syllabus: [
      'Numerical and Mathematical Ability',
      'Reasoning Ability and Problem Solving',
      'General Awareness',
      'English Language and Comprehension'
    ],
    features: [
      'Focus on Session-wise Prep',
      'Simple & Easy Explanations',
      'Daily Problem Sets',
      'Personal Attention to Each Student'
    ]
  },
  { 
    id: 'wb-police', 
    name: 'West Bengal Police', 
    description: 'Dedicated physical and written exam preparation for WB Police.', 
    shortIntro: 'Join the force with our specialized WB Police recruitment program.',
    icon: 'ShieldCheck',
    banner: 'https://images.unsplash.com/photo-1590402444681-cd185427744a?auto=format&fit=crop&q=80&w=1200',
    price: '₹6,499',
    status: 'Open',
    startDate: '20th Aug 2026',
    duration: '4 Months',
    mode: 'Offline',
    timing: '07:00 AM - 10:00 AM',
    language: 'Bengali',
    eligibility: 'Madhyamik / HS (Varies by post)',
    totalClasses: '120+',
    totalMockTests: '30+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Every Tuesday',
    certificate: false,
    syllabus: [
      'General Awareness',
      'Elementary Mathematics',
      'Reasoning & Logical Analysis',
      'English (for SI)',
      'Physical Measurement Test Prep',
      'Physical Efficiency Test Prep'
    ],
    features: [
      'Physical Training Guidance',
      'Ground Practice Sessions',
      'Previous Year Analysis',
      'Mock Interviews',
      'OMR Based Testing'
    ]
  },
  { 
    id: 'gd-constable', 
    name: 'GD Constable', 
    description: 'Specialized training for General Duty Constable recruitment.', 
    shortIntro: 'Protect the nation! Join CAPFs and paramilitary forces with our GD course.',
    icon: 'UserCheck',
    banner: 'https://images.unsplash.com/photo-1544391682-1a55b9de0144?auto=format&fit=crop&q=80&w=1200',
    price: '₹5,499',
    status: 'Open',
    startDate: '5th Sept 2026',
    duration: '3 Months',
    mode: 'Offline',
    timing: '06:00 AM - 09:00 AM',
    language: 'Hindi / Bengali',
    eligibility: '10th Pass',
    totalClasses: '90+',
    totalMockTests: '25+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Bi-weekly',
    certificate: false,
    syllabus: [
      'General Intelligence & Reasoning',
      'General Knowledge & Awareness',
      'Elementary Mathematics',
      'English / Hindi Choice',
      'Physical Test Guidelines'
    ],
    features: [
      'Physical Stamina Guidance',
      'Bilingual Support',
      'Quick Calculation Tricks',
      'OMR Pattern Training'
    ]
  },
  { 
    id: 'railway', 
    name: 'Railway', 
    description: 'Complete syllabus coverage for all RRB and RRC examinations.', 
    shortIntro: 'One stop solution for ALP, Technician, and Group D railway exams.',
    icon: 'Clock',
    banner: 'https://images.unsplash.com/photo-1474487024268-522381d41468?auto=format&fit=crop&q=80&w=1200',
    price: '₹6,999',
    status: 'Open',
    startDate: '12th Sept 2026',
    duration: '6 Months',
    mode: 'Hybrid',
    timing: '05:00 PM - 08:00 PM',
    language: 'Bengali / Hindi',
    eligibility: '10th / ITI / Graduation',
    totalClasses: '140+',
    totalMockTests: '40+',
    studyMaterials: true,
    recordedClasses: true,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Monthly Mega Mock',
    certificate: false,
    syllabus: [
      'Mathematics',
      'General Intelligence & Reasoning',
      'General Science (Physics, Chem, Bio)',
      'General Awareness on Current Affairs'
    ],
    features: [
      'Science Special Focus',
      'CBT Exam Simulation',
      'Railway Specific GK',
      'Technical Subject Support'
    ]
  },
  { 
    id: 'ntpc', 
    name: 'NTPC', 
    description: 'Strategic approach for Non-Technical Popular Categories exams.', 
    shortIntro: 'Aim for Station Master or Goods Guard with our strategic RRB NTPC course.',
    icon: 'BarChart3',
    banner: 'https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=1200',
    price: '₹7,499',
    status: 'Open',
    startDate: '18th Sept 2026',
    duration: '5 Months',
    mode: 'Hybrid',
    timing: '08:00 AM - 11:00 AM',
    language: 'Hindi / English',
    eligibility: '12th / Graduation',
    totalClasses: '130+',
    totalMockTests: '60+',
    studyMaterials: true,
    recordedClasses: true,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Every 10 Days',
    certificate: false,
    syllabus: [
      'Mathematics',
      'General Intelligence & Reasoning',
      'General Awareness',
      'Level 2-6 Tiered Preparation'
    ],
    features: [
      'Intensive Practice on Quant',
      'Current Affairs Digest',
      'Mock CBT Sessions',
      'PYQ Discussion'
    ]
  },
  { 
    id: 'psc-misc', 
    name: 'PSC Miscellaneous', 
    description: 'Diverse coaching for various PSC recruitment examinations.', 
    shortIntro: 'Versatile preparation for various WB PSC executive and technical posts.',
    icon: 'ClipboardList',
    banner: 'https://images.unsplash.com/photo-1503676260728-1c00da096a0b?auto=format&fit=crop&q=80&w=1200',
    price: '₹8,499',
    status: 'Open',
    startDate: '25th Sept 2026',
    duration: '8 Months',
    mode: 'Offline',
    timing: '10:00 AM - 01:00 PM',
    language: 'Bengali / English',
    eligibility: 'Graduate',
    totalClasses: '160+',
    totalMockTests: '35+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'First Sunday of Month',
    certificate: false,
    syllabus: [
      'General Studies',
      'Arithmetic',
      'English (Descriptive)',
      'Bengali/Hindi/Urdu (Descriptive)',
      'Interview Guidance'
    ],
    features: [
      'Descriptive Writing Workshops',
      'Integrated Prelims & Mains',
      'Current Affairs Analysis',
      'Special Mentorship'
    ]
  },
  { 
    id: 'anm', 
    name: 'ANM', 
    description: 'Nursing entrance preparation with focus on science and logic.', 
    shortIntro: 'Start your nursing career with our dedicated ANM entrance coaching.',
    icon: 'Headphones',
    banner: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    price: '₹4,999',
    status: 'Open',
    startDate: '5th Oct 2026',
    duration: '4 Months',
    mode: 'Offline',
    timing: '09:00 AM - 12:00 PM',
    language: 'Bengali',
    eligibility: '12th Pass (Female Only)',
    totalClasses: '100+',
    totalMockTests: '20+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Weekly',
    certificate: false,
    syllabus: [
      'Life Science',
      'Physical Science',
      'Mathematics',
      'English',
      'General Knowledge',
      'Logical Reasoning'
    ],
    features: [
      'Concept Based Teaching',
      'Regular Class Tests',
      'Simplified Science Notes',
      'Counseling for Rank Improvement'
    ]
  },
  { 
    id: 'gnm', 
    name: 'GNM', 
    description: 'Nursing entrance preparation with focus on science and logic.', 
    shortIntro: 'Comprehensive GNM entrance training for aspiring nursing students.',
    icon: 'Headphones',
    banner: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200',
    price: '₹5,499',
    status: 'Open',
    startDate: '5th Oct 2026',
    duration: '5 Months',
    mode: 'Offline',
    timing: '01:00 PM - 04:00 PM',
    language: 'Bengali',
    eligibility: '12th Pass',
    totalClasses: '120+',
    totalMockTests: '25+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Weekly',
    certificate: false,
    syllabus: [
      'Life Science (Advanced)',
      'Physical Science',
      'Basic English',
      'Elementary Mathematics',
      'General Knowledge',
      'Logical Reasoning'
    ],
    features: [
      'In-depth Science Coverage',
      'Previous Year Paper Solving',
      'Doubt Removal Workshops',
      'Special Tips for Entrance Rank'
    ]
  },
  { 
    id: 'sub-inspector', 
    name: 'Sub Inspector', 
    description: 'Intensive coaching for SI posts in various departments.', 
    shortIntro: 'Become an officer! Dedicated coaching for West Bengal and Central SI posts.',
    icon: 'Search',
    banner: 'https://images.unsplash.com/photo-1541872703-74c5e440d4f9?auto=format&fit=crop&q=80&w=1200',
    price: '₹8,999',
    status: 'Open',
    startDate: '1st Oct 2026',
    duration: '7 Months',
    mode: 'Offline',
    timing: '06:00 AM - 09:00 AM',
    language: 'Bengali / English',
    eligibility: 'Graduate',
    totalClasses: '150+',
    totalMockTests: '40+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Every Sunday',
    certificate: false,
    syllabus: [
      'General Awareness',
      'Mathematics (Objective)',
      'Reasoning (Objective)',
      'English (Descriptive)',
      'Bengali (Descriptive)',
      'Personality Test Prep'
    ],
    features: [
      'Descriptive Answer Writing',
      'Physical Standards Guidance',
      'Officer Level Strategy',
      'Mock Personality Tests'
    ]
  },
  { 
    id: 'clerk', 
    name: 'Clerk', 
    description: 'Skill-focused preparation for clerical posts in various sectors.', 
    shortIntro: 'Preparation for WB PSC Clerkship and various department clerks.',
    icon: 'FileText',
    banner: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    price: '₹4,499',
    status: 'Open',
    startDate: '10th Oct 2026',
    duration: '3 Months',
    mode: 'Offline',
    timing: '10:00 AM - 12:00 PM',
    language: 'Bengali',
    eligibility: 'Madhyamik Pass',
    totalClasses: '80+',
    totalMockTests: '20+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Twice a Month',
    certificate: false,
    syllabus: [
      'English',
      'General Studies',
      'Arithmetic',
      'Computer Typing Guide'
    ],
    features: [
      'Speed Building Exercises',
      'Focus on Accuracy',
      'Previous Year Questions',
      'Affordable Prep'
    ]
  },
  { 
    id: 'wireless-operator', 
    name: 'Wireless Operator', 
    description: 'Technical and general awareness training for wireless posts.', 
    shortIntro: 'Technical coaching for Police Wireless Operator recruitment.',
    icon: 'MessageCircle',
    banner: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200',
    price: '₹6,499',
    status: 'Open',
    startDate: '15th Oct 2026',
    duration: '4 Months',
    mode: 'Offline',
    timing: '04:00 PM - 06:00 PM',
    language: 'Bengali',
    eligibility: '10+2 with Physics/Math',
    totalClasses: '100+',
    totalMockTests: '15+',
    studyMaterials: true,
    recordedClasses: false,
    doubtSupport: true,
    mentorship: true,
    performanceAnalysis: true,
    testSchedule: 'Monthly',
    certificate: false,
    syllabus: [
      'Physics (10+2 Standard)',
      'Mathematics (10+2 Standard)',
      'General Awareness',
      'Current Affairs'
    ],
    features: [
      'Technical Subject Specialist',
      'Formula Sheets Provided',
      'Scientific Reasoning',
      'Focused Lab Concepts'
    ]
  },
];

export const JOURNEY_STEPS = [
  { title: 'Foundation Classes', description: 'Building strong basics from scratch for every subject.', icon: 'Lightbulb' },
  { title: 'Complete Syllabus Coverage', description: 'In-depth teaching of all topics as per latest exam patterns.', icon: 'BookOpen' },
  { title: 'Daily Practice Sessions', description: 'Solving real-world problems and previous year questions daily.', icon: 'ClipboardList' },
  { title: 'Weekly Mock Tests', description: 'Regular exams to simulate real test environments.', icon: 'Target' },
  { title: 'Performance Analysis', description: 'Detailed feedback and tracking of your progress.', icon: 'BarChart3' },
  { title: 'Revision Classes', description: 'Quick brush-up sessions for all important concepts.', icon: 'RotateCcw' },
  { title: 'Doubt Solving Sessions', description: 'One-on-one time with faculty to clear all your queries.', icon: 'MessageCircle' },
  { title: 'Interview Preparation', description: 'Personality development and mock interview drills.', icon: 'Users' },
];

export const FEATURES = [
  { title: 'Experienced Faculty', description: 'Learn from teachers who have years of success in government exams.', icon: 'Users' },
  { title: 'Updated Study Materials', description: 'Access the latest content designed as per changing exam trends.', icon: 'FileText' },
  { title: 'Regular Mock Tests', description: 'Evaluate your preparation with our comprehensive test series.', icon: 'Target' },
  { title: 'Personal Mentorship', description: 'Get individual guidance to stay focused and motivated.', icon: 'UserCheck' },
  { title: 'Doubt Clearing Sessions', description: 'Dedicated time to resolve every single confusion you have.', icon: 'MessageCircle' },
  { title: 'Affordable Fees', description: 'Premium quality education at a price that fits every budget.', icon: 'CheckCircle' },
  { title: 'Small Batch Size', description: 'Limited students per batch ensures personalized attention.', icon: 'Users' },
  { title: 'Individual Attention', description: "Every student's progress is monitored and nurtured carefully.", icon: 'Search' },
  { title: 'Exam-Oriented Teaching', description: 'Focus on what matters most for the actual examination.', icon: 'Target' },
  { title: 'Success Environment', description: 'Study with like-minded peers in a results-focused atmosphere.', icon: 'Trophy' },
];

export const ACHIEVEMENTS = [
  { label: 'Students Trained', count: 5000, suffix: '+' },
  { label: 'Successful Selections', count: 100, suffix: '+' },
  { label: 'Student Satisfaction', count: 98, suffix: '%' },
  { label: 'Expert Faculty', count: 15, suffix: '+' },
  { label: 'Years of Excellence', count: 10, suffix: '+' },
];

export const FACULTY = [
  {
    name: 'Sayan Sir',
    subject: 'Mathematics & Reasoning',
    experience: '12+ Years',
    qualification: 'M.Sc in Mathematics',
    intro: 'Expert in shortcut tricks and logical reasoning methods for competitive exams.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Ananya Das',
    subject: 'General Studies & WBCS Specialist',
    experience: '10+ Years',
    qualification: 'PhD in History',
    intro: 'Specializes in history and polity with a focus on WBCS and state exams.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Rajesh Sharma',
    subject: 'English & Vocabulary',
    experience: '8+ Years',
    qualification: 'MA in English Literature',
    intro: 'Focuses on grammar foundations and dynamic vocabulary building.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Sen',
    exam: 'SSC CGL Qualified',
    rating: 5,
    text: "Sayan's Classes changed my perspective on math. The shortcut tricks are amazing and helped me save time during the exam.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Priya Dutta',
    exam: 'WB Police SI',
    rating: 5,
    text: "The mentorship here is unmatched. Whenever I felt like giving up, the faculty motivated me to keep pushing forward.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Amit Kumar',
    exam: 'Railway NTPC',
    rating: 5,
    text: "Regular mock tests and detailed analysis helped me identify my weak spots. Highly recommended for any serious aspirant.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
];

export const ADMISSION_STEPS = [
  { id: 1, title: 'Contact Us', description: 'Reach out via phone, WhatsApp, or visit our center.', icon: 'Phone' },
  { id: 2, title: 'Free Counselling', description: 'Get expert guidance on which course suits your goals.', icon: 'Users' },
  { id: 3, title: 'Choose Your Course', description: 'Select from our wide range of government exam programs.', icon: 'BookOpen' },
  { id: 4, title: 'Complete Registration', description: 'Easy documentation and enrollment process.', icon: 'ClipboardList' },
  { id: 5, title: 'Attend Classes', description: 'Start your journey with our expert faculty members.', icon: 'GraduationCap' },
  { id: 6, title: 'Crack Your Exam', description: 'Perform with confidence and achieve your dream job.', icon: 'Trophy' },
];

export const FAQS = [
  { 
    question: 'Which government exams do you prepare for?', 
    answer: 'We prepare students for a wide range of exams including WBCS, SSC (CGL, CHSL, MTS, GD), Railway (NTPC, Group D), West Bengal Police (SI, Constable), PSC Miscellaneous, and Nursing (ANM/GNM).' 
  },
  { 
    question: 'Is a demo class available?', 
    answer: 'Yes, we provide free demo classes for new students so you can experience our teaching methodology before enrolling.' 
  },
  { 
    question: 'What is the fee structure?', 
    answer: 'Our fee structure is very affordable and varies depending on the course. We also offer installment facilities. Please contact us for the latest fee details.' 
  },
  { 
    question: 'Are study materials provided?', 
    answer: 'Yes, we provide comprehensive, updated, and exam-oriented study materials in both Bengali and English for all courses.' 
  },
  { 
    question: 'Are mock tests conducted regularly?', 
    answer: 'Absolutely. We conduct weekly mock tests and daily practice sessions to track progress and improve time management skills.' 
  },
  { 
    question: 'How can I take admission?', 
    answer: 'You can visit our center in College Para, Raiganj, or call us at 080176 79825 to start the admission process.' 
  },
  { 
    question: 'Is online coaching available?', 
    answer: 'Currently, we focus on intensive offline classroom coaching to ensure personalized attention, but we do provide digital resources and online support.' 
  },
  { 
    question: 'How can I contact the institute?', 
    answer: 'You can call or WhatsApp us at 080176 79825, or visit us at J44J+FWJ, College Para, Raiganj, West Bengal.' 
  },
];

export const GALLERY_IMAGES = [
  { id: 1, title: 'Classroom Session', category: 'Classroom', url: '/IMG_20260721_184050.jpg' },
  { id: 2, title: 'Success Celebration', category: 'Success', url: '/IMG_20260721_184109.jpg' },
  { id: 3, title: 'Institute Atmosphere', category: 'Campus', url: '/IMG_20260721_184136.jpg' },
  { id: 4, title: 'Admission Open', category: 'Events', url: '/Screenshot_2026-07-21-18-36-30-79_96b26121e545231a3c569311a54cda96.jpg' },
  { id: 5, title: 'Faculty Teaching', category: 'Teaching', url: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Group Discussion', category: 'Students', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
];
