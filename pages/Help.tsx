import React from 'react';
import { Heart, DollarSign, Clock, Users, Gift, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help = () => {
  const volunteerOpportunities = [
    {
      icon: Heart,
      title: 'Bird Care Assistant',
      description: 'Help with daily feeding, cage cleaning, and providing socialization for our rescued parrots.',
      commitment: '4-6 hours/week'
    },
    {
      icon: Users,
      title: 'Adoption Counselor',
      description: 'Meet with potential adopters, help match families with the right parrot, and provide ongoing support.',
      commitment: '6-8 hours/week'
    },
    {
      icon: Wrench,
      title: 'Maintenance Helper',
      description: 'Assist with facility maintenance, building repairs, and creating enrichment items for our birds.',
      commitment: '3-5 hours/week'
    },
    {
      icon: Clock,
      title: 'Event Coordinator',
      description: 'Help organize fundraising events, adoption days, and educational workshops in the community.',
      commitment: '5-10 hours/week'
    }
  ];

  const donationNeeds = [
    { item: 'Bird Food & Pellets', urgency: 'High', cost: '$25-50/month per bird' },
    { item: 'Medical Supplies', urgency: 'High', cost: '$100-500/emergency' },
    { item: 'Cage Equipment', urgency: 'Medium', cost: '$50-200/item' },
    { item: 'Toys & Enrichment', urgency: 'Medium', cost: '$10-30/item' },
    { item: 'Cleaning Supplies', urgency: 'Low', cost: '$20-40/month' },
    { item: 'Office Supplies', urgency: 'Low', cost: '$15-25/month' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How You Can Help</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              There are many ways to support our mission of giving parrots second chances. 
              Every contribution, big or small, makes a real difference in the lives of these amazing birds.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Financial donations help us provide medical care, food, and shelter for rescued parrots.
              </p>
              <Link
                to="/donate"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and directly impact the lives of rescued parrots.
              </p>
              <a
                href="#volunteer"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
              >
                Get Involved
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Adopt</h3>
              <p className="text-gray-600 mb-6">
                Give a rescued parrot a loving forever home and experience the joy of parrot companionship.
              </p>
              <Link
                to="/parrots"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
              >
                Meet Our Birds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our passionate team of volunteers and make a direct impact on parrot rescue and rehabilitation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-3">{opportunity.description}</p>
                      <div className="text-sm text-emerald-600 font-medium">
                        Time Commitment: {opportunity.commitment}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Volunteer?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We provide full training for all volunteer positions. No prior experience with parrots is required - 
              just a love for animals and commitment to their wellbeing.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Apply to Volunteer</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Needs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Current Donation Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donations directly support our daily operations and emergency care for rescued parrots.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Item Needed</th>
                    <th className="px-6 py-4 text-left font-semibold">Urgency</th>
                    <th className="px-6 py-4 text-left font-semibold">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {donationNeeds.map((need, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{need.item}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          need.urgency === 'High' ? 'bg-red-100 text-red-800' :
                          need.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {need.urgency}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{need.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/donate"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Gift className="w-5 h-5" />
              <span>Make a Donation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Other Ways to Support Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Spread the Word</h3>
              <p className="text-gray-600">
                Follow us on social media and share our posts to help us reach more potential adopters and supporters.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600">
                Partner with us for team building events, corporate volunteer days, or ongoing sponsorship opportunities.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Memorial Donations</h3>
              <p className="text-gray-600">
                Honor a loved one or beloved pet with a memorial donation that helps other animals in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Action Makes a Difference</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Whether you donate, volunteer, adopt, or simply spread awareness, you're helping us give more parrots 
            the second chance they deserve. Join our community of compassionate supporters today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/parrots"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              Meet Our Parrots
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;