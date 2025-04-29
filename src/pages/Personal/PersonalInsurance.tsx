import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Home as HomeIcon, Umbrella, Gem, ChevronRight, Award, Clock, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function PersonalInsurance() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Personal Insurance</h1>
            <p className="text-xl mb-8">
              Grundy's Personal Insurance Program offers a full range of insurance products to protect your assets and lifestyle.
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

      <div className="container mx-auto px-4">
        {/* Private Client Program */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Private Client Program</h2>
              <p className="text-gray-600 mb-8">
                Our Private Client Program is designed for individuals with substantial assets and unique coverage needs. We understand that high-net-worth individuals require specialized insurance solutions that go beyond standard coverage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Automobile Collections</h4>
                    <p className="text-gray-600">Specialized coverage for your valuable car collection with agreed value protection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Homeowners</h4>
                    <p className="text-gray-600">Comprehensive protection for high-value homes and estates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Personal Excess Liability</h4>
                    <p className="text-gray-600">Additional liability protection to safeguard your assets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Special Collections</h4>
                    <p className="text-gray-600">Coverage for fine art, jewelry, wine, and other valuable collections.</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/personal/private-client"
                className="inline-block mt-8 bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070" 
                alt="Luxury Home" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Rest of the PersonalInsurance component content */}
        {/* ... (keeping the existing content) ... */}
      </div>
    </div>
  );
}