import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X, CheckCircle } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';

const Header = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/parrots', label: 'Meet Our Parrots' },
    { to: '/new-rescues', label: 'New Rescues' },
    { to: '/accessories', label: 'Accessories' },
    { to: '/help', label: 'How to Help' },
    { to: '/contact', label: 'Contact' },
  ];

  // Listen for cart and wishlist updates
  useEffect(() => {
    const handleCartUpdate = (event: any) => {
      setNotification(`${event.detail.product} added to cart!`);
      setTimeout(() => setNotification(null), 3000);
    };

    const handleWishlistUpdate = (event: any) => {
      const action = event.detail.action === 'added' ? 'added to' : 'removed from';
      setNotification(`${event.detail.product} ${action} wishlist!`);
      setTimeout(() => setNotification(null), 3000);
    };

    window.addEventListener('cart-updated', handleCartUpdate);
    window.addEventListener('wishlist-updated', handleWishlistUpdate);

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
      window.removeEventListener('wishlist-updated', handleWishlistUpdate);
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/src/assets/photo_2025-06-28_17-21-36.jpg"
                alt="Parrot Haven Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-xs text-gray-600 mt-1">Giving Wings to Second Chances</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors duration-200 font-medium ${
                    isActive(link.to)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="relative p-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-bounce">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/donate"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Donate Now
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(link.to)
                        ? 'text-blue-600 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2 animate-slide-in-right">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{notification}</span>
        </div>
      )}
    </>
  );
};

export default Header;