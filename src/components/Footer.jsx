import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenReservation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-dark-950 border-t border-gold-500/20 pt-20 pb-12 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center text-gold-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-luxury text-2xl tracking-widest text-gold-200">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <p className="text-xs text-gold-400/90 tracking-widest uppercase">
              {RESTAURANT_INFO.stars}
            </p>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              An epicurean sanctuary where modern culinary art converges with time-honored French tradition.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenReservation()}
                className="text-xs text-gold-300 border-b border-gold-400/40 pb-0.5 hover:border-gold-300 transition-colors uppercase tracking-wider font-semibold"
              >
                Reserve Your Table →
              </button>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-luxury text-stone-100 text-base tracking-wide border-b border-white/5 pb-2">
              Address & Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-stone-400">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.dressCode}</span>
              </div>
            </div>
          </div>

          {/* Service Hours */}
          <div className="space-y-3">
            <h4 className="font-luxury text-stone-100 text-base tracking-wide border-b border-white/5 pb-2">
              Service Hours
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-200 block">Lunch Service</span>
                  <span>{RESTAURANT_INFO.hours.lunch}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-200 block">Dinner Service</span>
                  <span>{RESTAURANT_INFO.hours.dinner}</span>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 italic pt-1">
                {RESTAURANT_INFO.hours.closing}
              </p>
            </div>
          </div>

          {/* Private Cellar Gazette (Newsletter) */}
          <div className="space-y-3">
            <h4 className="font-luxury text-stone-100 text-base tracking-wide border-b border-white/5 pb-2">
              The Grand Cru Gazette
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Receive private invitations to seasonal tasting unveilings, rare allocation releases, and master sommelier dinners.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex rounded-lg overflow-hidden border border-white/10 focus-within:border-gold-400">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-900 px-3 py-2 text-xs text-stone-200 w-full focus:outline-none placeholder-stone-400"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-dark-950 px-3 py-2 flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 block animate-fade-in">
                  Thank you. You have been granted priority access.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} L'Étoile Restaurant SAS. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Terms of Dining</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Sommelier Enquiries</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Press Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
