import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Car, Wrench, Mouse as Museum, Shield } from 'lucide-react';

export default function CommercialHome() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534093607318-f025413f49cb?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Commercial Insurance Solutions</h1>
            <p className="text-xl mb-8">
              Specialized coverage for classic car businesses, museums, and restoration professionals.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
            >
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>

      {/* Commercial Solutions Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            to="/commercial/dealers" 
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=2070)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="relative p-8 h-[400px] flex flex-col justify-end">
              <Car className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Classic Car Dealers</h3>
              <p className="text-gray-200">Comprehensive coverage for your dealership operations and inventory.</p>
            </div>
          </Link>

          <Link 
            to="/commercial/museums" 
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566743884747-c1a1eb102bfb?auto=format&fit=crop&q=80&w=2070)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="relative p-8 h-[400px] flex flex-col justify-end">
              <Museum className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Classic Car Museums</h3>
              <p className="text-gray-200">Specialized protection for your collection and visitor operations.</p>
            </div>
          </Link>

          <Link 
            to="/commercial/restoration" 
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="relative p-8 h-[400px] flex flex-col justify-end">
              <Wrench className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Restoration Shops & Builders</h3>
              <p className="text-gray-200">Coverage for restoration projects and shop operations.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}