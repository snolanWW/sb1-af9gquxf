import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Star, Info, FileText, Zap, PenTool as Tool, MapPin, Award, Clock, Heart, Phone, Check } from 'lucide-react';
import MVPModal from '../../components/MVPModal';

export default function MVP() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-[600px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Premium Protection
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Motor Vehicle Program</h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience unparalleled coverage for your daily drivers and modern vehicles, backed by the same exceptional service that made us the leader in collector car insurance.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Protected Today
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Interactive Features Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Full Coverage Protection",
                description: "Comprehensive and collision coverage with flexible deductible options.",
                gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]",
                textColor: "text-white"
              },
              {
                icon: Zap,
                title: "24/7 Claims Service",
                description: "Round-the-clock access to our dedicated claims team.",
                gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]",
                textColor: "text-white"
              },
              {
                icon: Tool,
                title: "Roadside Assistance",
                description: "Emergency service including towing and breakdown support.",
                gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]",
                textColor: "text-white"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.gradient} p-8 rounded-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <feature.icon className={`w-12 h-12 text-white mb-4`} />
                <h3 className={`text-xl font-bold mb-3 ${feature.textColor}`}>{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Details with Tabs */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Coverage Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive coverage ensures you're protected in every situation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Core Coverage Column */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#91202B] mr-3" />
                <h3 className="text-2xl font-bold">Core Coverage</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Agreed Value Protection",
                    description: "We work with you to determine the value of your vehicle(s). If a total loss occurs, you'll receive that agreed-upon amount, regardless of market depreciation."
                  },
                  {
                    title: "150% Replacement",
                    description: "If a loss occurs and the item's current market value exceeds your coverage limit, you can be reimbursed for up to 150% of the insured amount.*",
                    note: "* Available by endorsement in most states."
                  },
                  {
                    title: "New Vehicle Replacement",
                    description: "If a new (not previously titled) vehicle is \"totaled\" within three years of its purchase, you can opt to receive the agreed value, replace it with a vehicle of the same year, make and model, or receive a new vehicle of the same make and like model - including hybrids or alternate fuel editions."
                  },
                  {
                    title: "Original Equipment Manufacturer Parts",
                    description: "If repairs must be made, only original manufacturer's parts will be used unless the parts are no longer made. Window glass is excluded. You may use the repair shop of your choice."
                  },
                  {
                    title: "Full Glass Coverage",
                    description: "We provide glass coverage including repair and replacement with no deductible. Coverage is offered in most states."
                  },
                  {
                    title: "Waiver Of Deductible",
                    description: "If your car is damaged beyond repair, your deductible will be waived."
                  }
                ].map((item, index) => (
                  <div key={index} className="transform hover:-translate-x-2 transition-transform duration-300">
                    <div className="flex items-start">
                      <Check className="w-6 h-6 flex-shrink-0 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                        {item.note && (
                          <p className="text-sm text-gray-500 mt-1">{item.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Benefits Column */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-[#91202B] mr-3" />
                <h3 className="text-2xl font-bold">Additional Benefits</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Breakdown Assistance",
                    description: "We cover the cost to tow your vehicle to the repair shop of your choice. We also cover the labor costs associated with emergency roadside assistance, with no deductible."
                  },
                  {
                    title: "Transportation Expense",
                    description: "You can be reimbursed without a per-day limit for the costs to rent a vehicle while yours is being repaired. You have the option to rent a car of comparable value as well."
                  },
                  {
                    title: "Emergency Living Expenses",
                    description: "If your car breaks down or you're in an accident far from home, you can be reimbursed for lodging and related expenses."
                  },
                  {
                    title: "Personal Property",
                    description: "If personal property is either damaged during an accident or stolen from your vehicle, you can replace it with an item of like kind and quality without having to pay a deductible."
                  },
                  {
                    title: "Pet Coverage",
                    description: "If the family dog or cat is injured during an accident, you can be reimbursed for related expenses."
                  },
                  {
                    title: "Cash Settlement (Optional)",
                    description: "You can also choose to receive a cash settlement if the damage to your vehicle is more than half of the agreed value."
                  }
                ].map((item, index) => (
                  <div key={index} className="transform hover:-translate-x-2 transition-transform duration-300">
                    <div className="flex items-start">
                      <Check className="w-6 h-6 flex-shrink-0 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Program Benefits with Animation */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-[#91202B] to-[#7a1b24] rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Multi-Car Discount",
                  description: "Save by insuring multiple vehicles"
                },
                {
                  icon: Shield,
                  title: "Accident Forgiveness",
                  description: "First accident forgiveness for eligible drivers"
                },
                {
                  icon: Star,
                  title: "Safe Driver Rewards",
                  description: "Premium discounts for claim-free driving"
                },
                {
                  icon: Heart,
                  title: "Loyalty Benefits",
                  description: "Special perks for long-term customers"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section with Gradient */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to learn more about our Motor Vehicle Program and get a personalized quote for your vehicles.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "1-888-GRUNDY1"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "Find a local agent"
                },
                {
                  icon: FileText,
                  title: "Get a Quote",
                  info: "Quick online quote"
                }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-300"
                >
                  <contact.icon className="w-8 h-8 text-[#91202B] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.info}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Contact an Agent
              </Link>
              <Link 
                to="/personal/mvp/quote"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                Get an Online Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}