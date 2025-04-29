import React from 'react';
import { Link } from 'react-router-dom';
import { Bot as Boat, Shield, Award, Clock, Check, Star, Phone, MapPin, FileText, Anchor, Compass, PenTool as Tool, Waves as Wave } from 'lucide-react';

export default function ClassicBoat() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Specialized Coverage
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Classic Boat Insurance</h1>
            <p className="text-xl mb-8 text-gray-200">
              Protecting your maritime heritage with specialized coverage designed for classic and vintage watercraft.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Your Quote
              </Link>
              <a 
                href="tel:1-888-GRUNDY1"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                1-888-GRUNDY1
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Agreed Value Coverage",
                  description: "Your classic boat is insured for a guaranteed amount agreed upon by you and Grundy.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Wave,
                  title: "Navigation Coverage",
                  description: "Flexible navigation limits to accommodate your boating lifestyle.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: Tool,
                  title: "Restoration Coverage",
                  description: "Protection during repairs and restorations at your chosen facility.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`${feature.gradient} p-8 rounded-xl text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <feature.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligible Vessels */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Eligible Vessels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Classic Runabouts",
                  description: "Vintage wooden boats from makers like Chris-Craft and Gar Wood",
                  image: "https://plus.unsplash.com/premium_photo-1677327623679-a3d951d52111?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVuYWJvdXQlMjBib2F0fGVufDB8fDB8fHww"
                },
                {
                  title: "Antique Sailboats",
                  description: "Historic sailing vessels with traditional rigging",
                  image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Classic Yachts",
                  description: "Preserved motor yachts of distinguished pedigree",
                  image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Traditional Craft",
                  description: "Historic working boats and traditional designs",
                  image: "https://plus.unsplash.com/premium_photo-1668723712079-7665d7a2d524?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ].map((vessel, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${vessel.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{vessel.title}</h3>
                    <p className="text-gray-600">{vessel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Details */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Comprehensive Protection</h2>
                <p className="text-gray-600 mb-8">
                  Our classic boat insurance goes beyond standard coverage to protect your maritime investment with specialized features designed for vintage vessels.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Agreed Value Guarantee",
                      description: "No depreciation or reduction in value over time"
                    },
                    {
                      title: "Original Parts Coverage",
                      description: "Coverage for hard-to-find vintage components"
                    },
                    {
                      title: "Marine Expertise",
                      description: "Access to specialized marine surveyors and craftsmen"
                    },
                    {
                      title: "Flexible Usage",
                      description: "Coverage for shows, exhibitions, and pleasure cruising"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542397284385-6010376c5337?auto=format&fit=crop&q=80&w=2070"
                  alt="Classic Boat Detail"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Classic Vessel</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide specialized protection for your classic boat.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "1-888-GRUNDY1",
                  action: "tel:1-888-478-6391"
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}