import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Award, Clock, PenTool as Tool, Zap, Check, Star, Phone, MapPin, FileText, Info } from 'lucide-react';

export default function AutoCollections() {
  const testimonials = [
    {
      quote: "Grundy's understanding of collector cars is unmatched. Their agreed value policy gives me complete peace of mind.",
      author: "James R.",
      collection: "Vintage Ferrari Collection"
    },
    {
      quote: "The claims process was seamless. They truly understand the unique needs of car collectors.",
      author: "Michael S.",
      collection: "Classic American Muscle Cars"
    },
    {
      quote: "I've been with Grundy for over 15 years. Their expertise and service are second to none.",
      author: "Robert P.",
      collection: "Pre-war European Classics"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Premium Collection Coverage
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Protect Your Classic Car Collection</h1>
            <p className="text-2xl mb-4 text-gray-200">
              Agreed Value • Unlimited Mileage • Zero Deductible
            </p>
            <p className="text-xl mb-8 text-gray-300">
              Specialized coverage designed for automotive enthusiasts and collectors.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/collector-vehicle/quote"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a 
                href="tel:1-888-478-6391"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                1-888-GRUNDY1
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Agreed Value Guarantee",
                  description: "Your collection is insured for the full agreed value with no depreciation. In the event of a total loss, you'll receive 100% of your car's insured value.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Clock,
                  title: "Unlimited Mileage",
                  description: "Drive your classics as much as you like. We believe collector cars are meant to be enjoyed, not stored away.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: Award,
                  title: "Zero Deductible",
                  description: "No out-of-pocket expenses when you file a claim. We understand the value of your investment.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className={`${benefit.gradient} p-8 rounded-xl text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <benefit.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligible Vehicles Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Eligible Vehicles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Classic Cars",
                  description: "Vehicles 25 years or older",
                  image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Exotic & Sports Cars",
                  description: "Limited production vehicles",
                  image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Muscle Cars",
                  description: "High-performance classics",
                  image: "https://images.unsplash.com/photo-1718662513758-c3f18f714f92?q=80&w=4000&auto=format&fit=crop"
                },
                {
                  title: "Special Interest",
                  description: "Unique and modified vehicles",
                  image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&q=80&w=800"
                }
              ].map((vehicle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{vehicle.title}</h3>
                    <p className="text-gray-600">{vehicle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Protection</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Tool,
                  title: "Choice of Repair Shop",
                  features: [
                    "Use your preferred repair facility",
                    "Original manufacturer parts",
                    "Expert craftsmanship",
                    "Quality guaranteed"
                  ]
                },
                {
                  icon: Zap,
                  title: "Instant Coverage",
                  features: [
                    "Same-day policy issuance",
                    "Immediate protection",
                    "Simple documentation",
                    "Quick approval process"
                  ]
                },
                {
                  icon: Star,
                  title: "Premium Service",
                  features: [
                    "24/7 claims support",
                    "Dedicated specialists",
                    "Concierge service",
                    "Priority handling"
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

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-[#91202B] to-[#7a1b24] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Collectors Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-white/80">{testimonial.collection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Collection?</h2>
            <p className="text-gray-600 mb-12">
              Join thousands of satisfied collectors who trust Grundy with their prized possessions.
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
                  action: "/collector-vehicle/quote"
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
                to="/collector-vehicle/quote"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get Your Free Quote
              </Link>
              <Link 
                to="/contact"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                Contact an Agent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}