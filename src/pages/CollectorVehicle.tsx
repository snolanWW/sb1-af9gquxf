import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Car, Shield, Award, Calculator, Scale, ChevronRight, Check, FileText, Clock, Timer, PenTool as Tool, Zap, Flag, Wrench, Heart, Phone, Calendar, Info, Plus } from 'lucide-react';

function CollectorVehicleHome() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Collector Vehicle Program</h1>
            <p className="text-xl mb-8">
              The gold standard in collector car insurance since 1947. Protecting your passion with agreed value coverage, flexible usage, and exceptional service.
            </p>
            <Link 
              to="/collector-vehicle/quote"
              className="inline-block bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
            >
              Get Your Quote Today
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Key Benefits */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Grundy for Your Classic?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-[#91202B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Agreed Value Guarantee</h3>
              <p className="text-gray-600">
                Your car is insured for the full agreed value with no depreciation. In the event of a total loss, you'll receive every cent of your car's insured value.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="w-12 h-12 text-[#91202B] mb-4" />
              <h3 className="text-xl font-bold mb-3">No Mileage Restrictions</h3>
              <p className="text-gray-600">
                Drive your classic as much as you like. We believe classics are meant to be enjoyed, not stored away.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Car className="w-12 h-12 text-[#91202B] mb-4" />
              <h3 className="text-xl font-bold mb-3">Flexible Usage</h3>
              <p className="text-gray-600">
                Use your classic for club activities, exhibitions, parades, and pleasure driving with no limitations.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Protection for Your Classic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Wrench className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Repair Shop of Choice</h3>
                <p className="text-gray-600">Freedom to choose your preferred repair facility. We trust you know what's best for your classic.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Diminishing Deductible</h3>
                <p className="text-gray-600">Your deductible reduces by 25% each claim-free year until it reaches $0.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Claims Service</h3>
                <p className="text-gray-600">Round-the-clock claims support from specialists who understand classic cars.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Liability Protection</h3>
                <p className="text-gray-600">Up to $1 million in liability coverage with higher limits available.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Car className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Auto Show Coverage</h3>
                <p className="text-gray-600">Full coverage during transportation to and participation in car shows.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Tool className="w-8 h-8 text-[#91202B] mr-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Tools Coverage</h3>
                <p className="text-gray-600">$750 coverage for your specialty tools and spare parts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Coverage Features</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Inflation Guard Protection</h4>
                    <p className="text-gray-600">Automatic quarterly increases in coverage to protect against market value changes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Spare Parts Coverage</h4>
                    <p className="text-gray-600">$750 of automatic coverage for spare parts specific to your collector vehicle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Nationwide Roadside Assistance</h4>
                    <p className="text-gray-600">Flatbed towing with guaranteed dispatch of expert service providers, available 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Trip Interruption</h4>
                    <p className="text-gray-600">Up to $600 for food, lodging, and alternate transportation if your car breaks down over 50 miles from home.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Medical Payments</h4>
                    <p className="text-gray-600">Coverage for medical expenses resulting from a covered accident.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1000" 
                alt="Classic Car Detail" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="max-w-6xl mx-auto mb-20 bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Eligibility</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Timer className="w-12 h-12 text-[#91202B] mx-auto mb-4" />
              <h3 className="font-bold mb-2">Classic Cars</h3>
              <p className="text-gray-600">Vehicles 25 years or older</p>
            </div>
            <div className="text-center">
              <Tool className="w-12 h-12 text-[#91202B] mx-auto mb-4" />
              <h3 className="font-bold mb-2">Modified Vehicles</h3>
              <p className="text-gray-600">Street rods and customs</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-[#91202B] mx-auto mb-4" />
              <h3 className="font-bold mb-2">Exotic Cars</h3>
              <p className="text-gray-600">Limited production vehicles</p>
            </div>
            <div className="text-center">
              <Flag className="w-12 h-12 text-[#91202B] mx-auto mb-4" />
              <h3 className="font-bold mb-2">Race Cars</h3>
              <p className="text-gray-600">Competition and display vehicles</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Classic?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied collectors who trust Grundy with their prized possessions. Get your personalized quote today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/collector-vehicle/quote"
              className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
            >
              Get an Instant Quote
            </Link>
            <Link 
              to="/collector-vehicle/agreed-value"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Learn About Agreed Value
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectorQuote() {
  const [vehicles, setVehicles] = useState([1]);
  const [effectiveDate, setEffectiveDate] = useState('');
  
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const vehicleTypes = [
    'Antique/Classic',
    'Modified/Street Rod',
    'Exotic/Sports Car',
    'Military Vehicle',
    'Race Car',
    'Replica/Kit Car',
    'Truck/Utility Vehicle',
    'Other'
  ];

  const addVehicle = () => {
    setVehicles([...vehicles, vehicles.length + 1]);
  };

  return (
    <div className="bg-white">
      <div className="bg-[#91202B] mb-16">
        <div className="container mx-auto px-4">
          <div className="py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 text-white">Get Your Quote</h1>
              <p className="text-xl text-white/90">Protect your classic with specialized coverage from Grundy.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <form className="bg-white shadow-xl rounded-lg p-8">
            {/* Applicant Information Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Applicant Information</h2>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Request Effective Date
                </label>
                <input 
                  type="date" 
                  className="w-full p-3 border rounded-md"
                  value={effectiveDate}
                  onChange={(e) => setEffectiveDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Middle Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Address Line 1</label>
                  <input type="text" className="w-full p-3 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Address Line 2</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">City</label>
                  <input type="text" className="w-full p-3 border rounded-md" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">State</label>
                  <select className="w-full p-3 border rounded-md" required>
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Postal Zip Code</label>
                  <input type="text" className="w-full p-3 border rounded-md" required pattern="[0-9]{5}" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-3 border rounded-md" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 border rounded-md" required />
                </div>
              </div>
            </div>

            {/* Vehicle Information Section */}
            {vehicles.map((vehicleNum) => (
              <div key={vehicleNum} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                  Vehicle {vehicleNum}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Year</label>
                    <select className="w-full p-3 border rounded-md" required>
                      <option value="">Select Year</option>
                      {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Make</label>
                    <input type="text" className="w-full p-3 border rounded-md" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Model</label>
                    <input type="text" className="w-full p-3 border rounded-md" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Vehicle Type</label>
                    <select className="w-full p-3 border rounded-md" required>
                      <option value="">Select Type</option>
                      {vehicleTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Agreed Value ($)
                    <span className="ml-2 inline-block">
                      <Info className="w-4 h-4 text-gray-400" />
                    </span>
                  </label>
                  <input 
                    type="number" 
                    className="w-full p-3 border rounded-md" 
                    required 
                    min="1"
                    step="1"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">Is the vehicle registered?</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name={`registered-${vehicleNum}`} value="yes" className="mr-2" required />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name={`registered-${vehicleNum}`} value="no" className="mr-2" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mb-8">
              <button
                type="button"
                onClick={addVehicle}
                className="flex items-center text-[#91202B] hover:text-[#7a1b24] transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Another Vehicle
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#91202B] text-white py-4 rounded-md hover:bg-[#7a1b24] transition-colors text-lg font-semibold"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function AgreedValue() {
  return (
    <div className="bg-white">
      <div className="relative h-[300px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515853191710-4db39aa5fe54?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Why Agreed Value Insurance</h1>
            <p className="text-xl">Understanding the gold standard in classic car coverage.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">What is Agreed Value?</h2>
            <p className="text-gray-600 mb-8">
              Agreed Value is the cornerstone of collector car insurance. Unlike standard auto insurance that pays based on depreciated value, Agreed Value guarantees you'll receive the full insured amount in the event of a total loss - with no depreciation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-[#91202B] mb-4" />
                <h3 className="text-xl font-bold mb-3">Guaranteed Value</h3>
                <p className="text-gray-600">
                  You and Grundy agree on your car's value upfront. That's the amount you'll receive if your car is totaled - no haggling, no depreciation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#91202B] mb-4" />
                <h3 className="text-xl font-bold mb-3">Inflation Protection</h3>
                <p className="text-gray-600">
                  Your coverage automatically increases quarterly to protect against market value changes and appreciation.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <ol className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#91202B] text-white font-bold mr-4">1</span>
                <p className="text-gray-600">You provide details about your classic vehicle, including photos and documentation of its condition and value.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#91202B] text-white font-bold mr-4">2</span>
                <p className="text-gray-600">Grundy's experts review the information and work with you to establish an agreed value.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#91202B] text-white font-bold mr-4">3</span>
                <p className="text-gray-600">This agreed value is guaranteed - if a total loss occurs, you receive the full amount.</p>
              </li>
            </ol>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
              <p className="text-gray-600 mb-6">
                Standard auto insurance policies use actual cash value (ACV), which factors in depreciation. For collector cars, this can severely undervalue your vehicle. Agreed Value ensures you get the true value of your classic.
              </p>
              <Link 
                to="/collector-vehicle/quote"
                className="inline-block bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Protected Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectorVehicle() {
  return (
    <Routes>
      <Route index element={<CollectorVehicleHome />} />
      <Route path="quote" element={<CollectorQuote />} />
      <Route path="agreed-value" element={<AgreedValue />} />
    </Routes>
  );
}