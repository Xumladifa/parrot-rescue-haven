import React, { useState } from 'react';
import { Heart, Calendar, DollarSign, Info, ShoppingCart } from 'lucide-react';
import { availableParrots } from '../data/parrots';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { Parrot } from '../types';

const Parrots = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [selectedParrot, setSelectedParrot] = useState<Parrot | null>(null);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const species = [
    'all', 
    'African Grey', 
    'Sun Conure', 
    'Cockatiel', 
    'Blue and Gold Macaw', 
    'Green Cheek Conure', 
    'Amazon Parrot',
    'Senegal Parrot',
    'Lovebird',
    'Eclectus Parrot',
    'Caique',
    'Umbrella Cockatoo',
    'Quaker Parrot',
    'Conure Mix',
    'Rose-breasted Cockatoo',
    'Crimson Rosella',
    'Moluccan Cockatoo',
    'Indian Ringneck',
    'Meyer\'s Parrot',
    'Blue-crowned Conure',
    'Military Macaw',
    'Galah Cockatoo'
  ];
  
  const filteredParrots = selectedSpecies === 'all' 
    ? availableParrots 
    : availableParrots.filter(p => p.species === selectedSpecies);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-emerald-100 text-emerald-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'adopted': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available for Adoption';
      case 'pending': return 'Adoption Pending';
      case 'adopted': return 'Adopted';
      default: return 'In Recovery';
    }
  };

  const handleWishlistToggle = (parrot: Parrot) => {
    const wishlistItem = {
      id: parrot.id,
      name: `Adoption Fee - ${parrot.name}`,
      price: parrot.adoptionFee,
      image: parrot.image,
      category: 'adoption' as const,
      description: `Adoption fee for ${parrot.name}, a ${parrot.age} ${parrot.species}`,
      inStock: parrot.status === 'available'
    };

    if (isInWishlist(parrot.id)) {
      removeFromWishlist(parrot.id);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const handleAddToCart = (parrot: Parrot) => {
    if (parrot.status === 'available') {
      const cartItem = {
        id: parrot.id,
        name: `Adoption Fee - ${parrot.name}`,
        price: parrot.adoptionFee,
        image: parrot.image,
        category: 'adoption' as const,
        description: `Adoption fee for ${parrot.name}, a ${parrot.age} ${parrot.species}`,
        inStock: true
      };
      addToCart(cartItem);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Amazing Parrots</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Each of our rescued parrots has a unique personality and story. They're all looking for patient, 
              loving families who understand the commitment of parrot ownership.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-700 mb-4">Filter by Species:</label>
          <select
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            {species.map(spec => (
              <option key={spec} value={spec}>
                {spec === 'all' ? 'All Species' : spec}
              </option>
            ))}
          </select>
        </div>

        {/* Parrots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParrots.map((parrot) => (
            <div key={parrot.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={parrot.image}
                  alt={parrot.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => handleWishlistToggle(parrot)}
                  className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 ${
                    isInWishlist(parrot.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(parrot.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{parrot.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(parrot.status)}`}>
                    {getStatusText(parrot.status)}
                  </span>
                </div>
                
                <p className="text-emerald-600 font-medium mb-2">{parrot.species} • {parrot.age}</p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{parrot.personality}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Arrived {new Date(parrot.arrivalDate).toLocaleDateString()}</span>
                  </div>
                  {parrot.status === 'available' && (
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>${parrot.adoptionFee}</span>
                    </div>
                  )}
                </div>

                {parrot.specialNeeds && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Special Needs:</strong> {parrot.specialNeeds}
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedParrot(parrot)}
                    className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Info className="w-5 h-5" />
                    <span>Learn More</span>
                  </button>
                  
                  {parrot.status === 'available' && (
                    <button
                      onClick={() => handleAddToCart(parrot)}
                      className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredParrots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No parrots found for the selected species.</p>
          </div>
        )}
      </div>

      {/* Detailed Modal */}
      {selectedParrot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedParrot.image}
                alt={selectedParrot.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedParrot(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 text-xl font-bold w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>
              <button
                onClick={() => handleWishlistToggle(selectedParrot)}
                className={`absolute top-4 left-4 p-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 ${
                  isInWishlist(selectedParrot.id)
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(selectedParrot.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{selectedParrot.name}</h2>
                <span className={`px-4 py-2 rounded-full font-medium ${getStatusColor(selectedParrot.status)}`}>
                  {getStatusText(selectedParrot.status)}
                </span>
              </div>
              
              <p className="text-xl text-emerald-600 font-medium mb-6">{selectedParrot.species} • {selectedParrot.age}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personality</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedParrot.personality}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Rescue Story</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedParrot.rescueStory}</p>
                </div>
                
                {selectedParrot.specialNeeds && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Special Needs</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">{selectedParrot.specialNeeds}</p>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <h4 className="font-medium text-gray-800">Arrival Date</h4>
                    <p className="text-gray-600">{new Date(selectedParrot.arrivalDate).toLocaleDateString()}</p>
                  </div>
                  {selectedParrot.status === 'available' && (
                    <div>
                      <h4 className="font-medium text-gray-800">Adoption Fee</h4>
                      <p className="text-gray-600">${selectedParrot.adoptionFee}</p>
                    </div>
                  )}
                </div>
                
                {selectedParrot.status === 'available' && (
                  <div className="pt-6 flex space-x-4">
                    <button 
                      onClick={() => handleAddToCart(selectedParrot)}
                      className="flex-1 bg-emerald-500 text-white py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="flex-1 border-2 border-emerald-500 text-emerald-600 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <span>Start Adoption Process</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parrots;