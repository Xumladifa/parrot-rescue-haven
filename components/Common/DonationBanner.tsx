import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target } from 'lucide-react';

const DonationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Heart className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">Giving Wings to Second Chances</h3>
              <p className="text-blue-100">Help us rescue and rehabilitate parrots in need</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">$3,200</div>
              <div className="text-sm text-blue-100">raised this month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm text-blue-100">birds rescued</div>
            </div>
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <Target className="w-5 h-5" />
              <span>Donate Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;