import React, { useState } from 'react';
import { Heart, Target, CreditCard, Shield, Gift, Users } from 'lucide-react';
import { donationGoals } from '../data/donations';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with a payment processor like Stripe
    alert(`Thank you for your ${donationType} donation of $${donationAmount}! This would redirect to secure payment processing.`);
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-emerald-500 bg-emerald-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Giving Wings to Second Chances</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Your donation directly impacts the lives of rescued parrots, providing them with medical care, 
              rehabilitation, and the chance to find loving forever homes.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$25</div>
              <div className="text-emerald-100 text-sm">Feeds a parrot for one week</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$100</div>
              <div className="text-emerald-100 text-sm">Emergency medical treatment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$250</div>
              <div className="text-emerald-100 text-sm">Complete health assessment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$500</div>
              <div className="text-emerald-100 text-sm">One month of full care</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h2>
              
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                {/* Donation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`p-4 border-2 rounded-lg font-medium transition-colors duration-200 ${
                        donationType === 'one-time'
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      One-Time Donation
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`p-4 border-2 rounded-lg font-medium transition-colors duration-200 ${
                        donationType === 'monthly'
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      Monthly Donation
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Donation Amount {donationType === 'monthly' && '(per month)'}
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`p-3 border-2 rounded-lg font-medium transition-colors duration-200 ${
                          donationAmount === amount
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700">$</span>
                    <input
                      type="number"
                      min="1"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter custom amount"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Make this donation anonymous
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Donate ${donationAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}</span>
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Gift className="w-4 h-4" />
                  <span>Tax Deductible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Goals */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Current Fundraising Goals</h3>
              
              <div className="space-y-6">
                {donationGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                      selectedGoal === goal.id
                        ? getUrgencyColor(goal.urgency)
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{goal.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.urgency === 'high' ? 'bg-red-100 text-red-800' :
                        goal.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {goal.urgency} priority
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{goal.description}</p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            goal.urgency === 'high' ? 'bg-red-500' :
                            goal.urgency === 'medium' ? 'bg-yellow-500' :
                            'bg-emerald-500'
                          }`}
                          style={{ width: `${getProgressPercentage(goal.currentAmount, goal.targetAmount)}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {getProgressPercentage(goal.currentAmount, goal.targetAmount).toFixed(0)}% funded
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Other Ways to Give</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-gray-800">Corporate Sponsorship</h4>
                    <p className="text-sm text-gray-600">Partner with us for ongoing support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-gray-800">Memorial Donations</h4>
                    <p className="text-sm text-gray-600">Honor a loved one or pet</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h4 className="font-medium text-gray-800">Planned Giving</h4>
                    <p className="text-sm text-gray-600">Include us in your estate planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Tax Deductible Donations</h3>
              <p className="text-blue-700 mb-4">
                Parrot Haven is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible 
                to the full extent allowed by law. Tax ID: 12-3456789
              </p>
              <p className="text-blue-700 text-sm">
                You will receive a tax receipt via email immediately after your donation is processed. 
                Please keep this receipt for your tax records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;