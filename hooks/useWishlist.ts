import { useState, useEffect } from 'react';
import { WishlistItem, Product } from '../types';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('parrot-haven-wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
        setWishlistItems([]);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('parrot-haven-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (!exists) {
        // Show a brief success message
        const event = new CustomEvent('wishlist-updated', { 
          detail: { action: 'added', product: product.name } 
        });
        window.dispatchEvent(event);
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prev => {
      const item = prev.find(item => item.id === productId);
      if (item) {
        const event = new CustomEvent('wishlist-updated', { 
          detail: { action: 'removed', product: item.name } 
        });
        window.dispatchEvent(event);
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlistItems.length
  };
};