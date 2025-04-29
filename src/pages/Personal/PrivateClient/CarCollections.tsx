import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Award, Clock, Check, Star, Phone, MapPin, FileText, PenTool as Tool, Gem, Scale, Camera, Truck, Wrench } from 'lucide-react';

export default function CarCollections() {
  const testimonials = [
    {
      quote: "Grundy's expertise in handling high-value car collections is unmatched. Their attention to detail gives me complete confidence.",
      author: "Michael R.",
      collection: "Pre-War European Collection"
    },
    {
      quote: "The specialized coverage for my entire collection, including transportation and display events, is exactly what I needed.",
      author: "James S.",
      collection: "Vintage Racing Cars"
    },
    {
      quote: "Their understanding of collection valuation and market trends has been invaluable for protecting my investment.",
      author: "Robert P.",
      collection: "Rare Italian Sports Cars"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Elite Collection Coverage
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Car Collection Insurance</h1>
            <p className="text-2xl mb-4 text-gray-200">
              Specialized Protection for Extraordinary Collections
            </p>
            <p className="text-xl mb-8 text-gray-300">
              Expert coverage designed for serious collectors with multiple vehicles and unique needs.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Request a Consultation
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

      {/* Collection Types */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Specialized Coverage for Every Collection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you collect vintage racers, pre-war classics, or modern exotics, we offer tailored protection for your unique collection.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2070",
                  title: "Classic Collections",
                  description: "Comprehensive coverage for vintage and antique vehicle collections, including rare and historically significant automobiles.",
                  features: [
                    "Pre-war vehicles",
                    "Post-war classics",
                    "Vintage motorcycles",
                    "Historic racing cars"
                  ]
                },
                {
                  image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=2070",
                  title: "Exotic & Performance",
                  description: "Specialized protection for collections of high-performance and limited-production vehicles.",
                  features: [
                    "Modern supercars",
                    "Limited editions",
                    "Track-focused vehicles",
                    "Prototype cars"
                  ]
                },
                {
                  image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2070",
                  title: "Curated Collections",
                  description: "Tailored coverage for themed collections and museum-quality assemblages.",
                  features: [
                    "Marque-specific collections",
                    "Era collections",
                    "Racing heritage",
                    "Concours vehicles"
                  ]
                }
              ].map((collection, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
                  </div>
                  <div className="relative p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white">{collection.title}</h3>
                    <p className="text-gray-200 mb-6">{collection.description}</p>
                    <ul className="mt-auto space-y-2">
                      {collection.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-white/90">
                          <Check className="w-5 h-5 text-[#91202B] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Comprehensive Collection Protection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our specialized coverage goes beyond standard collector car insurance to protect your entire collection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Blanket Coverage",
                  description: "Single policy coverage for your entire collection with flexible limits that adjust as you acquire or sell vehicles.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Gem,
                  title: "Collection Valuation",
                  description: "Expert valuation services to ensure your collection is properly valued, including market trend analysis.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: Truck,
                  title: "Transportation Coverage",
                  description: "Protection during transit to shows, events, or between locations, including international shipping.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                },
                {
                  icon: Camera,
                  title: "Exhibition Coverage",
                  description: "Comprehensive protection during shows, concours events, and public displays.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#7a1b24]"
                },
                {
                  icon: Tool,
                  title: "Restoration Coverage",
                  description: "Protection during restoration projects, including parts and materials in process.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#c13543]"
                },
                {
                  icon: Scale,
                  title: "Market Value Protection",
                  description: "Coverage that adjusts with market appreciation to ensure your collection is always properly protected.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#7a1b24]"
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

      {/* Additional Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Collection Management Services</h2>
                <p className="text-gray-600 mb-8">
                  Beyond insurance, we offer comprehensive collection management services to help protect and preserve your automotive investments.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Collection Documentation",
                      description: "Professional documentation and inventory management services"
                    },
                    {
                      title: "Storage Consultation",
                      description: "Expert advice on facility requirements and climate control"
                    },
                    {
                      title: "Transportation Coordination",
                      description: "Arrangement of specialized transport services"
                    },
                    {
                      title: "Market Analysis",
                      description: "Regular updates on market trends and collection value"
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070"
                  alt="Luxury Car Collection"
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
            <h2 className="text-4xl font-bold text-center mb-16">Collector Testimonials</h2>
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

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Collection</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide comprehensive protection for your valuable car collection.
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
                  info: "Collection evaluation",
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