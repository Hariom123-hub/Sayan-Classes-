/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden px-4 pb-6 pt-2 bg-gradient-to-t from-white via-white to-transparent">
      <div className="grid grid-cols-3 gap-2">
        <a 
          href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/\D/g, '')}`}
          className="bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <a 
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="bg-primary text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={16} />
          Call Now
        </a>
        <button className="bg-secondary text-primary flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform">
          <FileText size={16} />
          Enquire
        </button>
      </div>
    </div>
  );
}
