import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, Filter, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { Product } from '../types';

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const categories = ['all', 'toys', 'food', 'cages', 'accessories', 'health'];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (product.inStock) {
      addToCart(product);
      setAddedToCart(product.id);
      setTimeout(() => setAddedToCart(null), 2000);
    }
  };

  const getCategoryDisplayName = (category: string) => {
    if (category === 'all') return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Parrot Accessories</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Everything your feathered friend needs to live a happy, healthy life. 
              Shop with purpose - every purchase supports our rescue mission.
            </p>
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="bg-orange-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <ShoppingCart className="w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold">Shop with Purpose</h3>
                <p className="text-orange-100">100% of profits support our rescue operations</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-xl font-bold">{products.length}</div>
                <div className="text-sm text-orange-100">Quality Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">Free</div>
                <div className="text-sm text-orange-100">Local Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Category:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {getCategoryDisplayName(category)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
                <button
                  onClick={() => handleWishlistToggle(product)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 ${
                    isInWishlist(product.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {getCategoryDisplayName(product.category)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                  <span className={`text-sm font-medium ${product.inStock ? 'text-emerald-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 ${
                    product.inStock
                      ? addedToCart === product.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {addedToCart === product.id ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                ×
              </button>
              <button
                onClick={() => handleWishlistToggle(selectedProduct)}
                className={`absolute top-4 left-4 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 ${
                  isInWishlist(selectedProduct.id)
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(selectedProduct.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {getCategoryDisplayName(selectedProduct.category)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-orange-600">${selectedProduct.price}</span>
                <span className={`text-lg font-medium ${selectedProduct.inStock ? 'text-emerald-600' : 'text-red-600'}`}>
                  {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                disabled={!selectedProduct.inStock}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 ${
                  selectedProduct.inStock
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessories;