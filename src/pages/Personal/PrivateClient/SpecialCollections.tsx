import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gem, Star, Check, FileText, Phone, MapPin, Clock, DollarSign, Lock } from 'lucide-react';

export default function SpecialCollections() {
  const collections = [
    {
      title: "Collector Cars",
      icon: "🚗"
    },
    {
      title: "Jewelry & Watches",
      icon: "💎"
    },
    {
      title: "Fine Wine",
      icon: "🍷"
    },
    {
      title: "Stamps",
      icon: "📬"
    },
    {
      title: "Coins",
      icon: "🪙"
    },
    {
      title: "Antiques",
      icon: "🏺"
    },
    {
      title: "Rare Books",
      icon: "📚"
    },
    {
      title: "Fine Art",
      icon: "🎨"
    },
    {
      title: "Dolls",
      icon: "🧸"
    },
    {
      title: "Porcelain",
      icon: "🏺"
    },
    {
      title: "Firearms",
      icon: "🎯"
    },
    {
      title: "Musical Instruments",
      icon: "🎻"
    },
    {
      title: "Antique Furniture",
      icon: "🪑"
    },
    {
      title: "Classic Toys",
      icon: "🎲"
    },
    {
      title: "Toy Trains",
      icon: "🚂"
    },
    {
      title: "Autographs",
      icon: "✍️"
    },
    {
      title: "Silverware",
      icon: "🍽️"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Shotguns-Top-Panel.jpg)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4 text-white">
              Expert Protection
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">Special Collections Insurance</h1>
            <p className="text-xl mb-8 text-gray-200">
              During our more than 65 years of insuring collectibles, Grundy Insurance has found that many active car collectors have more than just one type of collection. Whether you collect fine art, wine, antiques, rare books, or any other fine memorabilia, Grundy can insure them all.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get A Quote
              </Link>
              <a 
                href="tel:+18663384006"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (866) 338-4006
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Expert Protection For Fine Collections Of All Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Comprehensive Coverage",
                  description: "Custom policies catered to those who already insure their homes with Grundy Insurance.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: DollarSign,
                  title: "Predetermined Value",
                  description: "Your valuables are protected at a predetermined value which provides expedited claims settlement.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: Lock,
                  title: "Full Value Protection",
                  description: "Most policies are written with no deductible, ensuring complete protection for your collection.",
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

      {/* Collections Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">We Protect Collections of All Types</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              We have the expertise to protect collections as diverse as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {collections.map((collection, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-3">{collection.icon}</div>
                  <div className="font-medium text-gray-900">{collection.title}</div>
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
                  If you have chosen to insure your homes with Grundy, you should take precautions to protect the treasures they contain from damage or loss. Grundy's knowledgeable risk management specialists stand ready to work with you to protect even the most rare or unique treasures.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Custom Policies",
                      description: "Tailored coverage for your specific collection needs"
                    },
                    {
                      title: "Easy Appraisal Process",
                      description: "In most cases, an appraisal is not required"
                    },
                    {
                      title: "Expedited Claims",
                      description: "Quick and efficient claims settlement process"
                    },
                    {
                      title: "Risk Management",
                      description: "Expert guidance on protecting your collection"
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
                  src="https://media.architecturaldigest.com/photos/5792d7949c0c50fa7ccebf4f/master/pass/Ocean_Blu_Photo_Moritz_House_13.jpg"
                  alt="Fine Wine Collection"
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
            <h2 className="text-4xl font-bold mb-6">Protect Your Collection</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how we can provide comprehensive protection for your valuable collections.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "(866) 338-4006",
                  action: "tel:+18663384006"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "Find a local advisor",
                  action: "/contact"
                },
                {
                  icon: FileText,
                  title: "Email Us",
                  info: "specialclientservices@grundy.com",
                  action: "mailto:specialclientservices@grundy.com"
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