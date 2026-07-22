import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 hidden md:block">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-secondary" />
          <span>{BUSINESS_DETAILS.address}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone size={14} className="text-secondary" />
            <span>{BUSINESS_DETAILS.phone}</span>
          </a>
          <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <MessageCircle size={14} className="text-secondary" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
