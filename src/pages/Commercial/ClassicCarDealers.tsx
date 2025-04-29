import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Building2, Check, FileText, Phone, MapPin, PenTool as Tool, Clock, Star, AlertTriangle, ChevronRight } from 'lucide-react';

export default function ClassicCarDealers() {
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section with Animated Overlay */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        {/* Animated Diagonal Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full animate-[slide 3s linear infinite]"></div>
            <div className="absolute top-1/3 left-0 w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full animate-[slide 4s linear infinite]"></div>
            <div className="absolute top-2/3 left-0 w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full animate-[slide 5s linear infinite]"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-[#91202B]"></div>
                <span className="text-white text-sm uppercase tracking-wider">Specialized Coverage</span>
              </div>
              
              <h1 className="text-7xl font-bold text-white leading-tight">
                Classic Car
                <span className="block text-[#91202B]">Dealer Insurance</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Comprehensive protection designed specifically for classic and antique automobile dealers.
              </p>

              <div className="pt-8 flex flex-wrap gap-6">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-[#91202B] to-[#7a1b24] text-white px-8 py-4 rounded-md hover:from-[#7a1b24] hover:to-[#91202B] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get Your Quote
                </Link>
                <a 
                  href="tel:1-866-338-4006"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/20 flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  1-866-338-4006
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Key Features with Gradients */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Agreed Value Coverage",
                  description: "Your inventory is protected at pre-agreed values, ensuring fair compensation for specialty vehicles.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Car,
                  title: "Inventory Protection",
                  description: "Comprehensive coverage for both owned inventory and consignment vehicles.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: Building2,
                  title: "Property Coverage",
                  description: "Protection for your dealership premises, including showrooms and service areas.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.gradient} p-8 rounded-xl text-white transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                >
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                  <div className="mt-6 flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="mr-2">Learn more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Details */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Coverage Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Special Dealer Coverage */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Special Dealer Coverage</h3>
                <div className="space-y-4">
                  {[
                    "Physical damage coverage on an Agreed Value basis",
                    "Comprehensive and collision coverage for inventory",
                    "Coverage for vehicles in transit",
                    "Protection during test drives and demonstrations",
                    "Coverage for specialty tools and equipment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liability Coverage */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Liability Coverage</h3>
                <div className="space-y-4">
                  {[
                    "General liability for premises and operations",
                    "Auto liability for test drives and demonstrations",
                    "Garage keepers legal liability",
                    "Employee dishonesty coverage",
                    "Professional liability for specialty services"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Tool,
                  title: "Specialized Claims Handling",
                  features: [
                    "Expert classic car adjusters",
                    "Network of specialty repair shops",
                    "Original parts sourcing assistance",
                    "Dedicated claims support"
                  ]
                },
                {
                  icon: Clock,
                  title: "Risk Management Services",
                  features: [
                    "Security system evaluation",
                    "Employee training resources",
                    "Facility safety assessments",
                    "Loss prevention guidance"
                  ]
                },
                {
                  icon: Star,
                  title: "Premium Benefits",
                  features: [
                    "Flexible payment options",
                    "Multi-vehicle discounts",
                    "Bundled coverage savings",
                    "Loyalty rewards program"
                  ]
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <benefit.icon className="w-12 h-12 text-[#91202B] mb-6" />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-[#91202B] mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Coverage Requirements</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Business Requirements",
                    items: [
                      "Valid dealer license",
                      "Minimum 2 years in business",
                      "Secure storage facility",
                      "Professional sales records"
                    ]
                  },
                  {
                    title: "Security Requirements",
                    items: [
                      "Monitored alarm system",
                      "Adequate lighting",
                      "Secure key storage",
                      "Surveillance cameras"
                    ]
                  },
                  {
                    title: "Documentation Required",
                    items: [
                      "Current inventory list",
                      "Vehicle valuations",
                      "Sales history",
                      "Loss history reports"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-[#91202B] mr-2" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Dealership</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide comprehensive protection for your classic car dealership.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "1-866-338-4006",
                  action: "tel:1-866-338-4006"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "Find a local advisor",
                  action: "/contact"
                },
                {
                  icon: FileText,
                  title: "Get a Quote",
                  info: "Quick online quote",
                  action: "/contact"
                }
              ].map((contact, index) => (
                <Link
                  key={index}
                  to={contact.action}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <contact.icon className="w-8 h-8 text-[#91202B] mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.info}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Request a Consultation
              </Link>
              <Link 
                to="/contact"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                Download Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}