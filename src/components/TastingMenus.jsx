import React from 'react';
import { Sparkles, Wine, Check, ArrowUpRight } from 'lucide-react';
import { TASTING_MENUS } from '../data/restaurantData';

export default function TastingMenus({ onSelectExperience, onAddToCart }) {
  return (
    <section id="tasting" className="py-24 px-6 md:px-12 relative bg-dark-900 border-t border-b border-white/5">
      {/* Subtle Background Elements */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-[0.25em] uppercase font-sans mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gastronomic Compositions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-luxury text-stone-100 tracking-wide mb-4">
            Curated Tasting Menus
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
          <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed">
            Each multi-course journey is curated to evoke memory, terroir, and emotion through progressive harmony of textures and rare seasonal vintages.
          </p>
        </div>

        {/* 3 Tasting Menu Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TASTING_MENUS.map((menu) => (
            <div
              key={menu.id}
              className={`relative rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between border ${
                menu.popular
                  ? 'border-gold-400/60 shadow-2xl shadow-gold-500/10'
                  : 'border-white/10'
              }`}
            >
              {/* Popular Flag */}
              {menu.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Prestige Choice
                </div>
              )}

              {/* Image & Header */}
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs uppercase tracking-widest text-gold-400 font-sans font-semibold">
                      {menu.courses} Harmonious Courses
                    </span>
                    <h3 className="text-2xl font-luxury text-stone-100">
                      {menu.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-stone-300 text-xs italic font-serif">
                    "{menu.tagline}"
                  </p>

                  <p className="text-stone-300 text-sm font-light leading-relaxed">
                    {menu.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    <span className="block text-[11px] uppercase tracking-widest text-stone-400 font-semibold">
                      Course Highlights
                    </span>
                    <ul className="space-y-2">
                      {menu.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing & Footer Actions */}
              <div className="p-6 md:p-8 pt-0 space-y-4">
                <div className="flex items-baseline justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-3xl font-luxury text-gold-200">€{menu.price}</span>
                    <span className="text-xs text-stone-400 ml-1">/ person</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <Wine className="w-4 h-4 text-gold-400/80" />
                    <span>Wine Pairing +€{menu.winePairingPrice}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onAddToCart({
                      id: menu.id,
                      name: `Tasting: ${menu.name}`,
                      price: menu.price,
                      image: menu.image,
                      category: 'Tasting Experience'
                    })}
                    className="w-full py-2.5 px-3 rounded-lg border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400 text-xs tracking-wider uppercase font-semibold transition-all"
                  >
                    Select Tasting
                  </button>

                  <button
                    onClick={() => onSelectExperience(menu.name)}
                    className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-950 font-semibold text-xs tracking-wider uppercase transition-all shadow flex items-center justify-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
