import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, Award, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onQuickBook }) {
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuickBook({ date, time, guests });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Deep Vignette Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
          alt="Haute Cuisine Signature Dish"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-45 contrast-110 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,12,14,0.85)_100%)]" />
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-8">
        {/* Accolade Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold-400/30 text-gold-300 text-xs tracking-widest uppercase mb-8 shadow-xl">
          <Award className="w-4 h-4 text-gold-400" />
          <span>{RESTAURANT_INFO.stars}</span>
          <span className="w-1 h-1 rounded-full bg-gold-400/60" />
          <div className="flex text-gold-400">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold-400" />
            ))}
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-luxury text-stone-100 leading-[1.1] mb-6 tracking-wide">
          An Unforgettable <br />
          <span className="gold-gradient-text italic font-serif">Culinary Journey</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-12">
          Step into a sanctuary of sensory indulgence. Precision French gastronomy, hand-foraged rare ingredients, and an exceptional 4,000-bottle Grand Cru cellar.
        </p>

        {/* Interactive Quick Booking Bar (Matching Option A Design) */}
        <div className="glass-panel p-3 sm:p-4 rounded-xl max-w-4xl mx-auto shadow-2xl border border-gold-500/30">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center">
            {/* Date Input */}
            <div className="flex items-center gap-3 bg-dark-900/90 border border-white/10 rounded-lg px-4 py-3 text-left focus-within:border-gold-400 transition-colors">
              <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] tracking-wider uppercase text-stone-400">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent text-sm text-stone-200 focus:outline-none w-full cursor-pointer font-sans"
                />
              </div>
            </div>

            {/* Time Slot Input */}
            <div className="flex items-center gap-3 bg-dark-900/90 border border-white/10 rounded-lg px-4 py-3 text-left focus-within:border-gold-400 transition-colors">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] tracking-wider uppercase text-stone-400">Service Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-transparent text-sm text-stone-200 focus:outline-none w-full cursor-pointer font-sans"
                >
                  <optgroup label="Dinner Service" className="bg-dark-900 text-stone-200">
                    <option value="18:30">6:30 PM (First Seating)</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM (Prime)</option>
                    <option value="20:00">8:00 PM (Prime)</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:15">9:15 PM (Late Seating)</option>
                  </optgroup>
                  <optgroup label="Lunch Service" className="bg-dark-900 text-stone-200">
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Guests Count Input */}
            <div className="flex items-center gap-3 bg-dark-900/90 border border-white/10 rounded-lg px-4 py-3 text-left focus-within:border-gold-400 transition-colors">
              <Users className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] tracking-wider uppercase text-stone-400">Party Size</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-sm text-stone-200 focus:outline-none w-full cursor-pointer font-sans"
                >
                  <option value="1 Guest" className="bg-dark-900">1 Guest (Chef's Counter)</option>
                  <option value="2 Guests" className="bg-dark-900">2 Guests (Intimate Table)</option>
                  <option value="3 Guests" className="bg-dark-900">3 Guests</option>
                  <option value="4 Guests" className="bg-dark-900">4 Guests</option>
                  <option value="5 Guests" className="bg-dark-900">5 Guests</option>
                  <option value="6 Guests" className="bg-dark-900">6 Guests (Salon Privé)</option>
                  <option value="8+ Guests" className="bg-dark-900">8+ Guests (Private Dining)</option>
                </select>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              type="submit"
              className="w-full h-full min-h-[52px] flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-950 font-bold px-6 py-3 rounded-lg text-sm tracking-wider uppercase transition-all shadow-lg shadow-gold-500/20 group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Supporting Details */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs tracking-wider text-stone-400 font-light">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Complimentary Valet Parking
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Private Salon Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Immediate Instant Confirmation
          </span>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 text-xs tracking-widest uppercase">
        <span className="text-[10px] text-gold-400/80">Explore The Menus</span>
        <div className="w-4 h-7 border border-gold-500/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
