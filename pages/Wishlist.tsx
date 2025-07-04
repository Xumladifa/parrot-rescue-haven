import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Start adding products you love to your wishlist!</p>
          <Link
            to="/accessories"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Shop Accessories</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
                <p className="text-gray-600">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved</p>
              </div>
            </div>
            
            {wishlistItems.length > 0 && (
              <button
                onClick={clearWishlist}
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-orange-600">${product.price}</span>
                  <span className={`text-sm font-medium ${product.inStock ? 'text-emerald-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/accessories"
            className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;