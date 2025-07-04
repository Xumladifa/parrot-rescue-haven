import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, DollarSign } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'credit'>('credit');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with actual payment processors
    alert(`Payment of $${(cartTotal * 1.08).toFixed(2)} processed successfully via ${paymentMethod}!`);
    clearCart();
    setShowCheckout(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some accessories or start an adoption process!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/accessories"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Shop Accessories</span>
            </Link>
            <Link
              to="/parrots"
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Meet Our Parrots</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
            
            <form onSubmit={handleCheckout} className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-4 border-2 rounded-lg font-medium transition-colors duration-200 ${
                      paymentMethod === 'credit'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mx-auto mb-2" />
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border-2 rounded-lg font-medium transition-colors duration-200 ${
                      paymentMethod === 'paypal'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <DollarSign className="w-6 h-6 mx-auto mb-2" />
                    PayPal
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={checkoutData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <div></div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={checkoutData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={checkoutData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Billing Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    required
                    value={checkoutData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={checkoutData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      required
                      value={checkoutData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod === 'credit' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      required
                      value={checkoutData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        required
                        value={checkoutData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        required
                        value={checkoutData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(cartTotal * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-500 text-white py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
                >
                  Complete Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-orange-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
                <p className="text-gray-600">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
              </div>
            </div>
            
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                    <p className="text-orange-600 font-bold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Total Price */}
                    <div className="text-right min-w-[80px]">
                      <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-gray-800">${(cartTotal * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full bg-emerald-500 text-white py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2 mb-4"
              >
                <CreditCard className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>
              
              <Link
                to="/accessories"
                className="block w-full text-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
              >
                Continue Shopping
              </Link>

              {/* Support Message */}
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 text-sm text-center">
                  <strong>Thank you!</strong> Your purchase directly supports our parrot rescue mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;