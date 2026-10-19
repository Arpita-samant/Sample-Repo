import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export default function Reviews() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-[0.25em] uppercase font-sans mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Critical Acclaim</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-luxury text-stone-100 tracking-wide mb-4">
          Guest Experiences
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
        <p className="text-stone-300 text-sm md:text-base font-light">
          Praised by the world's most discerning culinary critics and cherished by guests celebrating life's most unforgettable moments.
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review, i) => (
          <div
            key={i}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/10 glass-panel-hover"
          >
            <div>
              {/* Stars */}
              <div className="flex gap-1 text-gold-400 mb-6">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-200 text-base font-serif italic leading-relaxed mb-6">
                "{review.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <h5 className="font-luxury text-stone-100 text-sm">{review.author}</h5>
                <span className="text-[11px] text-gold-400/90 font-sans tracking-wide">
                  {review.role}
                </span>
              </div>
              <span className="text-xs text-stone-400 tracking-widest uppercase">Verified</span>
            </div>
          </div>
        ))}
      </div>

      {/* Wine Cellar & Dining Room Atmosphere preview banner */}
      <div className="mt-16 rounded-2xl overflow-hidden relative border border-gold-500/20 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 h-72">
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Dining Sanctuary"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
            />
            <div className="absolute inset-0 bg-dark-950/40" />
            <div className="absolute bottom-4 left-4 text-stone-200 text-xs uppercase tracking-widest font-luxury">
              The Main Dining Sanctuary
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
              alt="Grand Cru Wine Cellar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
            />
            <div className="absolute inset-0 bg-dark-950/40" />
            <div className="absolute bottom-4 left-4 text-stone-200 text-xs uppercase tracking-widest font-luxury">
              4,000-Bottle Grand Cru Cellar
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
              alt="The Private Salon"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
            />
            <div className="absolute inset-0 bg-dark-950/40" />
            <div className="absolute bottom-4 left-4 text-stone-200 text-xs uppercase tracking-widest font-luxury">
              Salon Privé VIP Table
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
