import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, Car, PenTool as Tool, Check, FileText, Phone, MapPin, AlertTriangle, Building2, Settings, Star } from 'lucide-react';

export default function RestorationShops() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        {/* Animated Overlay */}
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
                Restoration Shop
                <span className="block text-[#91202B]">Insurance</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Car restoration and building is expensive and tricky. But insuring your business against loss need not be. We understand the liabilities you face when you build a car and when the proud owners put them on the road.
              </p>

              <div className="pt-8 flex flex-wrap gap-6">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-[#91202B] to-[#7a1b24] text-white px-8 py-4 rounded-md hover:from-[#7a1b24] hover:to-[#91202B] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get Your Quote
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/20"
                >
                  Download Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Insurance as finely crafted as your restorations.</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Garage Keeper's Coverage",
                  description: "Comprehensive protection for customer vehicles during restoration with Agreed Value basis.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Building2,
                  title: "Property Protection",
                  description: "All-risk coverage for your building, contents, tools, and equipment at replacement cost.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: AlertTriangle,
                  title: "Liability Coverage",
                  description: "Protection against accidents and injuries during restoration and test drives.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.gradient} p-8 rounded-xl text-white transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <feature.icon className="w-12 h-12 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
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
            <div className="grid md:grid-cols-2 gap-12">
              {/* Garage Keeper's Coverage */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Garage Keeper's Coverage</h3>
                <div className="space-y-4">
                  {[
                    "Agreed Value basis for customer vehicles",
                    "Comprehensive and collision coverage",
                    "Protection during restoration process",
                    "Coverage up to $1,000,000 available",
                    "Vehicles under construction coverage"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#91202B] mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Coverage */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Property Coverage</h3>
                <div className="space-y-4">
                  {[
                    "Building and contents at replacement cost",
                    "Raw materials and parts coverage",
                    "Tools and equipment protection",
                    "Office equipment and computers",
                    "Business interruption coverage"
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
                  icon: Car,
                  title: "Auto Liability Coverage",
                  features: [
                    "Business vehicles protection",
                    "Customer vehicle coverage",
                    "Test drive insurance",
                    "Dealer tag coverage"
                  ]
                },
                {
                  icon: Settings,
                  title: "General Liability",
                  features: [
                    "Premises liability",
                    "Operations coverage",
                    "Completed operations",
                    "Personal injury protection"
                  ]
                },
                {
                  icon: Star,
                  title: "Additional Benefits",
                  features: [
                    "Direct primary coverage",
                    "Flexible payment options",
                    "Expert claims handling",
                    "Risk management services"
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

      {/* Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Restoration Business</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide comprehensive protection for your restoration shop.
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
                  info: "Download application",
                  action: "/contact"
                }
              ].map((contact, index) => (
                <Link
                  key={index}
                  to={contact.action}
                  className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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