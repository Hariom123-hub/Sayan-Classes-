/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  name: string;
  description: string;
  shortIntro: string;
  icon: string;
  banner: string;
  price: string;
  status: 'Open' | 'Closed';
  startDate: string;
  duration: string;
  mode: 'Offline' | 'Online' | 'Hybrid';
  timing: string;
  language: string;
  eligibility: string;
  totalClasses: string;
  totalMockTests: string;
  studyMaterials: boolean;
  recordedClasses: boolean;
  doubtSupport: boolean;
  mentorship: boolean;
  performanceAnalysis: boolean;
  testSchedule: string;
  certificate: boolean;
  syllabus: string[];
  features: string[];
}
