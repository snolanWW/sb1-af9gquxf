import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Shield, Award, Clock, Check, Star, Phone, MapPin, FileText, Umbrella, PenTool as Tool, Zap } from 'lucide-react';

export default function Homeowners() {
  const testimonials = [
    {
      quote: "Grundy's understanding of high-value homes is exceptional. Their coverage for our historic property gives us complete peace of mind.",
      author: "Elizabeth R.",
      property: "Historic Victorian Estate"
    },
    {
      quote: "The claims process was seamless. Their expertise in handling unique architectural features made all the difference.",
      author: "William M.",
      property: "Coastal Luxury Home"
    },
    {
      quote: "Their risk management services have been invaluable in protecting our collection of homes.",
      author: "Thomas P.",
      property: "Multiple Luxury Properties"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Premium Property Protection
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Exceptional Homeowners Coverage</h1>
            <p className="text-2xl mb-4 text-gray-200">
              Guaranteed Replacement Cost • Special Collections • Risk Management
            </p>
            <p className="text-xl mb-8 text-gray-300">
              Comprehensive protection for distinctive homes and estates.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Your Quote
              </Link>
              <a 
                href="tel:1-866-338-4006"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                1-866-338-4006
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Property Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Specialized Coverage for Every Home</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070",
                  title: "Primary Residences",
                  description: "Comprehensive coverage for your main residence with guaranteed replacement cost and custom features protection."
                },
                {
                  image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2070",
                  title: "Waterfront Properties",
                  description: "Specialized protection for coastal homes including flood coverage and specific waterfront risk management."
                },
                {
                  image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2070",
                  title: "Historic Homes",
                  description: "Expert coverage for historic properties including period-specific materials and craftsmanship restoration."
                }
              ].map((property, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${property.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
                  </div>
                  <div className="relative p-8 h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-3 text-white">{property.title}</h3>
                    <p className="text-gray-200">{property.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Features */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Premium Coverage Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our homeowners insurance goes beyond standard coverage to protect your distinctive property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Guaranteed Replacement Cost",
                  description: "We'll rebuild your home to its original specifications, even if the cost exceeds your policy limits.",
                  features: [
                    "No depreciation deductions",
                    "Original materials and craftsmanship",
                    "Modern building code upgrades",
                    "No coverage caps"
                  ]
                },
                {
                  icon: Umbrella,
                  title: "Extended Protection",
                  description: "Comprehensive coverage for all aspects of your property and lifestyle.",
                  features: [
                    "Other structures coverage",
                    "Landscaping protection",
                    "Water backup coverage",
                    "Equipment breakdown"
                  ]
                },
                {
                  icon: Tool,
                  title: "Risk Management Services",
                  description: "Proactive protection to prevent losses before they occur.",
                  features: [
                    "Property inspections",
                    "Security system evaluation",
                    "Weather protection planning",
                    "Maintenance guidance"
                  ]
                },
                {
                  icon: Star,
                  title: "Additional Living Expenses",
                  description: "Maintain your lifestyle if your home becomes uninhabitable.",
                  features: [
                    "Comparable housing",
                    "Temporary relocation costs",
                    "Pet boarding expenses",
                    "Storage fees coverage"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <feature.icon className="w-12 h-12 text-[#91202B] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-[#91202B] mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Special Collections Protection */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Special Collections Protection</h2>
                <p className="text-gray-600 mb-8">
                  When you insure your home with Grundy, we can protect your valuable collections with specialized coverage that goes beyond typical personal property protection.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Fine Art",
                      description: "Coverage for paintings, sculptures, and other artwork"
                    },
                    {
                      title: "Wine Collections",
                      description: "Protection for your wine cellar including temperature control"
                    },
                    {
                      title: "Jewelry & Watches",
                      description: "Worldwide coverage for your precious items"
                    },
                    {
                      title: "Antique Furnishings",
                      description: "Specialized protection for period furniture and decor"
                    }
                  ].map((collection, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{collection.title}</h4>
                        <p className="text-gray-600">{collection.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2070"
                  alt="Luxury Home Interior"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-[#91202B] to-[#7a1b24] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-white/80">{testimonial.property}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Home Today</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide comprehensive protection for your home and valuable collections.
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}