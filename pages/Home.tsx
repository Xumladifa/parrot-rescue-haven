import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home as HomeIcon, Users, ArrowRight, Star } from 'lucide-react';
import DonationBanner from '../components/Common/DonationBanner';

const Home = () => {
  const stats = [
    { icon: Heart, label: 'Birds Rescued', value: '850+' },
    { icon: HomeIcon, label: 'Forever Homes Found', value: '720+' },
    { icon: Shield, label: 'Years of Service', value: '12' },
    { icon: Users, label: 'Volunteer Heroes', value: '150+' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Adopting Charlie from Parrot Haven was the best decision we ever made. The staff's care and dedication is truly remarkable.",
      bird: "Charlie (Blue & Gold Macaw)"
    },
    {
      name: "Mike Rodriguez",
      text: "The rehabilitation work they do is incredible. Ruby came to us healthy, happy, and ready to love again.",
      bird: "Ruby (African Grey)"
    },
    {
      name: "Emily Chen",
      text: "Professional, caring, and committed to finding the perfect match. Sunny brings so much joy to our family!",
      bird: "Sunny (Sun Conure)"
    }
  ];

  return (
    <div className="min-h-screen">
      <DonationBanner />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Every Feathered Friend Deserves a 
                <span className="text-blue-600"> Second Chance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome to Parrot Haven, where rescued parrots find healing, hope, and loving forever homes. 
                Our mission is to provide sanctuary for birds in need while connecting them with families ready to offer a lifetime of love.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/parrots"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Meet Our Parrots</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/help"
                  className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>How to Help</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful rescued parrot"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">24</div>
                    <div className="text-gray-600">Looking for homes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Parrots */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Some of Our Amazing Birds</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our rescued parrots has a unique story and personality. They're all looking for patient, loving families to call their own.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ruby - African Grey"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ruby</h3>
                <p className="text-blue-600 font-medium mb-3">African Grey • 5 years old</p>
                <p className="text-gray-600 mb-4">Intelligent and talkative, Ruby loves learning new words and solving puzzle toys.</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                  <Link to="/parrots" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sunny - Sun Conure"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sunny</h3>
                <p className="text-blue-600 font-medium mb-3">Sun Conure • 3 years old</p>
                <p className="text-gray-600 mb-4">Vibrant and energetic, Sunny brings sunshine wherever he goes with his playful spirit.</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                  <Link to="/parrots" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1386422/pexels-photo-1386422.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Luna - Cockatiel"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Luna</h3>
                <p className="text-blue-600 font-medium mb-3">Cockatiel • 2 years old</p>
                <p className="text-gray-600 mb-4">Sweet and gentle, Luna loves to whistle melodies and enjoys quiet companionship.</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
                  <Link to="/parrots" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/parrots"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Available Parrots</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We believe every parrot deserves a chance at happiness, regardless of their past. 
              Through rescue, rehabilitation, and education, we're building a better future for parrots everywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Rescue & Rehabilitation</h3>
              <p className="text-blue-100">
                We provide immediate care and long-term rehabilitation for parrots from neglect, abuse, or abandonment situations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Forever Homes</h3>
              <p className="text-blue-100">
                We carefully match each parrot with the perfect family, ensuring lifelong happiness for both bird and adopter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Education & Support</h3>
              <p className="text-blue-100">
                We educate the community about proper parrot care and provide ongoing support to adopting families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Happy Families</h2>
            <p className="text-xl text-gray-600">Hear from some of our successful adoption families</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.bird}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Change a Life?</h2>
          <p className="text-xl text-sky-100 mb-8">
            Whether you're ready to adopt, volunteer, or donate, every action helps us give more parrots the second chance they deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/parrots"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Start Your Adoption Journey
            </Link>
            <Link
              to="/help"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              Explore Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;