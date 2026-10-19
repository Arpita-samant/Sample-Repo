import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, Filter } from 'lucide-react';
import { A_LA_CARTE_MENU } from '../data/restaurantData';

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItem, setAddedItem] = useState(null);

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'starters', label: 'Les Entrées (Starters)' },
    { id: 'mains', label: 'Les Plats (Mains)' },
    { id: 'desserts', label: 'Les Desserts' },
    { id: 'drinks', label: 'Grand Cru & Elixirs' },
  ];

  const filteredItems = useMemo(() => {
    return A_LA_CARTE_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-sans">
          Seasonal Gastronomy
        </span>
        <h2 className="text-3xl md:text-5xl font-luxury text-stone-100 tracking-wide mt-2 mb-4">
          À La Carte Selection
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />
        <p className="text-stone-300 text-sm md:text-base font-light">
          Crafted with rare ingredients sourced from artisanal purveyors, foraged botanicals, and hand-selected coastal fisheries.
        </p>
      </div>

      {/* Controls: Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-dark-900 border border-white/10 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-dark-950 font-semibold shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dish or ingredient..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-900 border border-white/10 rounded-xl text-xs text-stone-200 placeholder-stone-400 focus:outline-none focus:border-gold-400/60 transition-colors"
          />
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-white/10"
          >
            {/* Dish Thumbnail */}
            <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden shrink-0 border border-white/10">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
              />
            </div>

            {/* Dish Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h4 className="text-lg font-luxury text-stone-100 group-hover:text-gold-300 transition-colors">
                  {item.name}
                </h4>
                <span className="text-base font-luxury text-gold-300 shrink-0 font-semibold">
                  €{item.price}
                </span>
              </div>

              <p className="text-xs text-stone-400 font-light leading-relaxed mb-3 line-clamp-2">
                {item.description}
              </p>

              {/* Tags & Add Button */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full text-[10px] tracking-wide bg-dark-800 border border-white/10 text-stone-300 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleAdd(item)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                    addedItem === item.id
                      ? 'bg-emerald-500 text-dark-950 shadow-md'
                      : 'border border-gold-500/40 text-gold-300 hover:bg-gold-500/20'
                  }`}
                >
                  {addedItem === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-stone-400">
          <p className="text-base">No culinary items found matching your criteria.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-gold-400 underline hover:text-gold-300"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
