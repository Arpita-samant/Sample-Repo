import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReservation, onOpenCart, cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-luxury text-2xl md:text-3xl tracking-widest text-gold-200 group-hover:text-gold-100 transition-colors">
              {RESTAURANT_INFO.name}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gold-500/80 uppercase font-sans -mt-1">
              Paris • Haute Cuisine
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm tracking-wider uppercase text-stone-300 font-medium">
          <a href="#tasting" className="hover:text-gold-300 transition-colors">
            Tasting Menus
          </a>
          <a href="#menu" className="hover:text-gold-300 transition-colors">
            À La Carte
          </a>
          <a href="#chef" className="hover:text-gold-300 transition-colors">
            The Chef
          </a>
          <a href="#experience" className="hover:text-gold-300 transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-gold-300 transition-colors">
            Hours & Location
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Cart / Tasting selection button */}
          <button
            onClick={onOpenCart}
            aria-label="View selection"
            className="relative p-2.5 rounded-full border border-white/10 hover:border-gold-500/40 text-stone-300 hover:text-gold-300 transition-all hover:bg-dark-850"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-500 text-dark-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Reserve Table CTA */}
          <button
            onClick={() => onOpenReservation()}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-950 font-semibold px-5 py-2.5 rounded-md text-sm tracking-wide shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Mobile Hamburger & Cart */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={onOpenCart}
            aria-label="View selection"
            className="relative p-2 text-stone-300 hover:text-gold-300"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-500 text-dark-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-stone-300 hover:text-gold-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 space-y-4">
          <a
            href="#tasting"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-gold-400 tracking-wider text-base py-2 uppercase font-luxury"
          >
            Tasting Menus
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-gold-400 tracking-wider text-base py-2 uppercase font-luxury"
          >
            À La Carte Menu
          </a>
          <a
            href="#chef"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-gold-400 tracking-wider text-base py-2 uppercase font-luxury"
          >
            The Chef & Philosophy
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-gold-400 tracking-wider text-base py-2 uppercase font-luxury"
          >
            Reviews & Accolades
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-gold-400 tracking-wider text-base py-2 uppercase font-luxury"
          >
            Hours & Location
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-semibold px-4 py-3 rounded text-sm tracking-wide mt-4"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>
        </div>
      )}
    </nav>
  );
}
