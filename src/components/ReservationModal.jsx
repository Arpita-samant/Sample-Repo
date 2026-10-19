import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Heart, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2 Guests',
    seating: 'Main Dining Room',
    occasion: 'None',
    dietaryNotes: '',
  });
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        date: initialData.date || prev.date,
        time: initialData.time || prev.time,
        guests: initialData.guests || prev.guests,
        occasion: initialData.tasting ? `Tasting Experience: ${initialData.tasting}` : prev.occasion,
      }));
    } else if (!formData.date) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData((prev) => ({ ...prev, date: tomorrow.toISOString().split('T')[0] }));
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = 'LE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refNumber);
    setStep('confirmed');

    // Trigger celebratory gold & bronze confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#cca147', '#e0b060', '#f9f1de', '#f3e1ba']
      });
    } catch {
      // safe fallback
    }
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-dark-950 border border-gold-500/40 rounded-2xl shadow-2xl p-6 md:p-8 text-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Table Reservation</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-luxury text-stone-100">
                Reserve Your Experience
              </h3>
              <p className="text-xs text-stone-400 font-light mt-1">
                {RESTAURANT_INFO.name} • {RESTAURANT_INFO.stars}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Date
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-dark-900 border border-white/10 focus-within:border-gold-400">
                    <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-transparent text-xs text-stone-100 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Service Time
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-dark-900 border border-white/10 focus-within:border-gold-400">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-transparent text-xs text-stone-100 focus:outline-none"
                    >
                      <option value="18:30" className="bg-dark-900">6:30 PM (Dinner)</option>
                      <option value="19:00" className="bg-dark-900">7:00 PM (Dinner)</option>
                      <option value="19:30" className="bg-dark-900">7:30 PM (Prime Dinner)</option>
                      <option value="20:00" className="bg-dark-900">8:00 PM (Prime Dinner)</option>
                      <option value="20:30" className="bg-dark-900">8:30 PM (Dinner)</option>
                      <option value="21:15" className="bg-dark-900">9:15 PM (Late Dinner)</option>
                      <option value="12:00" className="bg-dark-900">12:00 PM (Lunch)</option>
                      <option value="12:30" className="bg-dark-900">12:30 PM (Lunch)</option>
                      <option value="13:00" className="bg-dark-900">1:00 PM (Lunch)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guests & Seating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Party Size
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-dark-900 border border-white/10 focus-within:border-gold-400">
                    <Users className="w-4 h-4 text-gold-400 shrink-0" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-transparent text-xs text-stone-100 focus:outline-none"
                    >
                      <option value="1 Guest" className="bg-dark-900">1 Guest (Chef's Counter)</option>
                      <option value="2 Guests" className="bg-dark-900">2 Guests (Table)</option>
                      <option value="3 Guests" className="bg-dark-900">3 Guests</option>
                      <option value="4 Guests" className="bg-dark-900">4 Guests</option>
                      <option value="5 Guests" className="bg-dark-900">5 Guests</option>
                      <option value="6 Guests" className="bg-dark-900">6 Guests</option>
                      <option value="8+ Guests" className="bg-dark-900">8+ Guests (Private Salon)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-400"
                  >
                    <option value="Main Dining Room" className="bg-dark-900">Main Dining Sanctuary</option>
                    <option value="Chef's Tasting Counter" className="bg-dark-900">Chef's Tasting Counter</option>
                    <option value="Salon Privé (VIP)" className="bg-dark-900">Salon Privé (VIP)</option>
                    <option value="Garden Veranda" className="bg-dark-900">Garden Veranda</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-gold-400"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-gold-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-400"
                  >
                    <option value="None" className="bg-dark-900">Special Occasion: None</option>
                    <option value="Anniversary" className="bg-dark-900">Anniversary Celebration</option>
                    <option value="Birthday" className="bg-dark-900">Birthday Dinner</option>
                    <option value="Business Engagement" className="bg-dark-900">Executive Business Dinner</option>
                    <option value="Romantic Proposal" className="bg-dark-900">Romantic Evening</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Dietary notes / allergies (optional)"
                    value={formData.dietaryNotes}
                    onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-950 font-bold py-3 px-6 rounded-lg text-xs tracking-widest uppercase transition-all shadow-lg shadow-gold-500/20"
              >
                Confirm Table Reservation
              </button>

              <p className="text-[10px] text-center text-stone-400 pt-1">
                No deposit required. Cancellations accepted up to 24 hours prior without penalty.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mx-auto border border-gold-400/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl md:text-3xl font-luxury text-stone-100 mt-1">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs text-stone-400 mt-2">
                A confirmation voucher and calendar invite have been dispatched to{' '}
                <span className="text-stone-200 font-medium">{formData.email}</span>.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-5 rounded-xl bg-dark-900 border border-gold-500/30 text-left space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs text-stone-400">Booking Reference</span>
                <span className="font-mono text-gold-300 font-bold text-sm tracking-wider">
                  {bookingRef}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Guest</span>
                  <span className="text-stone-100 font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Party</span>
                  <span className="text-stone-100 font-medium">{formData.guests}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Date & Time</span>
                  <span className="text-stone-100 font-medium">{formData.date} at {formData.time}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Seating</span>
                  <span className="text-stone-100 font-medium">{formData.seating}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-bold py-3 px-6 rounded-lg text-xs tracking-widest uppercase transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
