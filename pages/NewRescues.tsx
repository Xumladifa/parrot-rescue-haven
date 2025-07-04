import React from 'react';
import { Clock, Heart, Stethoscope, Calendar } from 'lucide-react';
import { newRescues } from '../data/parrots';

const NewRescues = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-recovery': return <Stethoscope className="w-5 h-5" />;
      default: return <Heart className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-recovery': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-recovery': return 'In Recovery';
      default: return 'Available';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Rescues</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our newest arrivals who are beginning their journey toward healing and finding forever homes. 
              Each rescue has a story of resilience and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Recovery Progress Banner */}
      <section className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Stethoscope className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold">Currently in Our Care</h3>
                <p className="text-blue-100">Providing specialized rehabilitation and recovery support</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">{newRescues.length}</div>
                <div className="text-sm text-blue-100">New Arrivals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Medical Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Their Journey to Recovery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These brave parrots have recently arrived at our sanctuary. While they may not be ready for adoption yet, 
            they're receiving the specialized care, love, and attention they need to heal and thrive.
          </p>
        </div>

        {/* New Rescues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {newRescues.map((parrot) => (
            <div key={parrot.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={parrot.image}
                    alt={parrot.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{parrot.name}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(parrot.status)}`}>
                      {getStatusIcon(parrot.status)}
                      <span>{getStatusText(parrot.status)}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-3">{parrot.species} • {parrot.age}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Rescue Story</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{parrot.rescueStory}</p>
                  </div>
                  
                  {parrot.specialNeeds && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                      <h4 className="font-semibold text-amber-800 mb-1">Current Care Needs</h4>
                      <p className="text-amber-700 text-sm">{parrot.specialNeeds}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Arrived {new Date(parrot.arrivalDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{Math.ceil((new Date().getTime() - new Date(parrot.arrivalDate).getTime()) / (1000 * 60 * 60 * 24))} days in care</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Current Personality</h4>
                    <p className="text-gray-600 text-sm">{parrot.personality}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recovery Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Recovery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Medical Assessment</h3>
              <p className="text-gray-600 text-sm">Complete health evaluation and emergency treatment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Emotional Healing</h3>
              <p className="text-gray-600 text-sm">Trust-building and behavioral rehabilitation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Socialization</h3>
              <p className="text-gray-600 text-sm">Gradual introduction to human interaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Forever Home</h3>
              <p className="text-gray-600 text-sm">Careful matching with the perfect family</p>
            </div>
          </div>
        </div>

        {/* Support Our Rescues */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Help Our New Rescues Heal</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            These vulnerable parrots need specialized medical care, nutrition, and rehabilitation. 
            Your support directly impacts their recovery and gives them hope for a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Sponsor a Rescue
            </a>
            <a
              href="/help"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Other Ways to Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRescues;