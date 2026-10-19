import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TastingMenus from './components/TastingMenus';
import MenuSection from './components/MenuSection';
import ChefStory from './components/ChefStory';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'experience',
      name: 'Tasting: L\'Expérience (Prestige 9 Courses)',
      price: 260,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80',
      category: 'Tasting Experience'
    }
  ]);

  const handleOpenReservation = (tastingName = null) => {
    setReservationData(tastingName ? { tasting: tastingName } : null);
    setIsReservationOpen(true);
  };

  const handleQuickBook = ({ date, time, guests }) => {
    setReservationData({ date, time, guests });
    setIsReservationOpen(true);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-dark-950 text-stone-200 font-sans selection:bg-gold-500 selection:text-dark-950">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Sections matching Option A visual design */}
      <main>
        {/* Dramatic Hero with Quick Booking Bar */}
        <Hero onQuickBook={handleQuickBook} />

        {/* Curated Tasting Menus */}
        <TastingMenus
          onSelectExperience={handleOpenReservation}
          onAddToCart={handleAddToCart}
        />

        {/* Interactive À La Carte Menu */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Executive Chef Dubois Spotlight & Accolades */}
        <ChefStory onOpenReservation={() => handleOpenReservation()} />

        {/* Guest Experiences, Critic Reviews, & Cellar Preview */}
        <Reviews />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialData={reservationData}
      />

      {/* Interactive Cart & Pre-Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
