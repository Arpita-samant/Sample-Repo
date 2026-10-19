import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCharge = Math.round(subtotal * 0.1); // 10% hospitality service
  const total = subtotal + (subtotal > 0 ? serviceCharge : 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#cca147', '#e0b060', '#f9f1de']
        });
      } catch {}
    }, 1200);
  };

  const handleDone = () => {
    onClearCart();
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-950 border-l border-gold-500/30 text-stone-200 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-400" />
              <h3 className="font-luxury text-xl text-stone-100">
                Culinary Selection
              </h3>
              <span className="text-xs text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-full border border-gold-400/30">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-400/40">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-luxury text-stone-100">
                  Order Received
                </h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Your culinary selection has been dispatched directly to Chef Dubois' brigade. Our head sommelier will coordinate pairings upon your arrival.
                </p>
                <div className="p-4 rounded-xl bg-dark-900 border border-white/10 text-xs text-stone-300">
                  Order Reference: <span className="font-mono text-gold-300">ORD-77492</span>
                </div>
                <button
                  onClick={handleDone}
                  className="w-full mt-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-bold py-3 px-6 rounded-lg text-xs tracking-widest uppercase transition-all"
                >
                  Return to Menu
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3 text-stone-400">
                <ShoppingBag className="w-12 h-12 mx-auto text-stone-400/80" />
                <p className="text-base font-luxury text-stone-300">Your selection is empty</p>
                <p className="text-xs text-stone-400">
                  Browse our curated tasting menus or à la carte courses to begin.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 border border-gold-500/40 text-gold-300 rounded-lg text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
                >
                  Explore Dishes
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-dark-900/90 border border-white/10 flex items-center gap-3.5"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-medium text-stone-100 truncate">
                        {item.name}
                      </h5>
                      <span className="text-xs text-gold-300 font-luxury font-semibold">
                        €{item.price} each
                      </span>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-dark-800 border border-white/10 text-stone-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold text-stone-200 px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-dark-800 border border-white/10 text-stone-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-stone-400 hover:text-rose-400 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer calculation */}
          {!orderComplete && cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-dark-950/80 space-y-3">
              <div className="flex justify-between text-xs text-stone-400">
                <span>Course Subtotal</span>
                <span className="text-stone-200">€{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-stone-400">
                <span>Sommelier & Service (10%)</span>
                <span className="text-stone-200">€{serviceCharge}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold border-t border-white/10 pt-2 text-stone-100">
                <span>Grand Total</span>
                <span className="font-luxury text-gold-300 text-lg">€{total}</span>
              </div>

              <button
                disabled={isCheckingOut}
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-dark-950 font-bold py-3 px-6 rounded-lg text-xs tracking-widest uppercase transition-all shadow-lg shadow-gold-500/20 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Sending to Brigade...</span>
                ) : (
                  <>
                    <span>Confirm Culinary Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
