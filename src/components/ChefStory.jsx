import React from 'react';
import { Award, Quote, Utensils } from 'lucide-react';
import { CHEF_PROFILE } from '../data/restaurantData';

export default function ChefStory({ onOpenReservation }) {
  return (
    <section id="chef" className="py-24 px-6 md:px-12 bg-dark-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Portrait with Luxury Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
              <img
                src={CHEF_PROFILE.image}
                alt={CHEF_PROFILE.name}
                className="w-full h-[480px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
              
              {/* Accolade floating pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-gold-500/40">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  {CHEF_PROFILE.badge}
                </span>
                <span className="text-stone-200 font-luxury text-lg block">
                  {CHEF_PROFILE.name}
                </span>
                <span className="text-xs text-stone-400 font-light">
                  {CHEF_PROFILE.title}
                </span>
              </div>
            </div>

            {/* Behind offset border frame */}
            <div className="hidden sm:block absolute -inset-3 border border-gold-500/20 rounded-2xl -z-10 transform -rotate-1" />
          </div>

          {/* Chef Philosophy & Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-[0.25em] uppercase font-sans">
              <Utensils className="w-3.5 h-3.5" />
              <span>Culinary Philosophy</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-luxury text-stone-100 leading-tight">
              Chef de Cuisine <br />
              <span className="gold-gradient-text italic font-serif">
                {CHEF_PROFILE.name}
              </span>
            </h2>

            {/* Quote */}
            <div className="relative p-6 rounded-xl bg-dark-950/60 border-l-2 border-gold-400">
              <Quote className="w-6 h-6 text-gold-400/40 mb-2" />
              <p className="text-stone-300 italic text-base md:text-lg font-serif leading-relaxed">
                "{CHEF_PROFILE.quote}"
              </p>
            </div>

            <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
              {CHEF_PROFILE.bio}
            </p>

            {/* Accolades List */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                Distinctions & Recognition
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHEF_PROFILE.awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-stone-300">
                    <Award className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => onOpenReservation()}
                className="bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/50 text-gold-300 font-semibold px-6 py-3 rounded-lg text-xs tracking-widest uppercase transition-all"
              >
                Experience Dubois' Cuisine
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
