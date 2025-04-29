import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Home as HomeIcon, Umbrella, Gem, ChevronRight, Award, Clock, Heart, Phone, Mail, MapPin, Star, Users, Settings, FileText } from 'lucide-react';

export default function PrivateClientHome() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

        {/* Animated Lines Overlay */}
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
                <span className="text-white text-sm uppercase tracking-wider">Elite Protection</span>
              </div>
              
              <h1 className="text-7xl font-bold text-white leading-tight">
                Private Client
                <span className="block text-[#91202B]">Services</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                Experience unparalleled protection for your most valued assets with our comprehensive suite of premium insurance solutions.
              </p>

              <div className="pt-8 flex flex-wrap gap-6">
                <Link 
                  to="/contact"
                  className="bg-[#91202B] text-white px-8 py-4 rounded-md hover:bg-[#7a1b24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Request a Consultation
                </Link>
                <Link 
                  to="/collector-vehicle/quote"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/20"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="pt-16 grid grid-cols-3 gap-8 max-w-2xl">
                <div>
                  <div className="text-3xl font-bold text-white">75+</div>
                  <div className="text-gray-400 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50</div>
                  <div className="text-gray-400 mt-1">States Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-400 mt-1">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Overview */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Comprehensive Coverage Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our Private Client program offers tailored insurance solutions designed to protect your unique lifestyle and valuable assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Car,
                  title: "Automobile Collections",
                  description: "Specialized coverage for classic, exotic, and luxury vehicles with agreed value protection.",
                  features: [
                    "Agreed Value Coverage",
                    "Flexible Usage Terms",
                    "Choice of Repair Shops",
                    "Worldwide Coverage Available"
                  ],
                  link: "/personal/private-client/auto-collections",
                  bgImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=2070"
                },
                {
                  icon: HomeIcon,
                  title: "Homeowners",
                  description: "Premium protection for luxury homes, vacation properties, and high-value estates.",
                  features: [
                    "Extended Replacement Cost",
                    "Cash Settlement Option",
                    "Risk Management Services",
                    "Personal Property Coverage"
                  ],
                  link: "/personal/private-client/homeowners",
                  bgImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070"
                },
                {
                  icon: Umbrella,
                  title: "Personal Excess Liability",
                  description: "Additional liability protection to safeguard your assets and future earnings.",
                  features: [
                    "High Coverage Limits",
                    "Worldwide Protection",
                    "Defense Cost Coverage",
                    "Reputation Management"
                  ],
                  link: "/personal/private-client/excess-liability",
                  bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"
                },
                {
                  icon: Gem,
                  title: "Car Collections (Special Collections)",
                  description: "Expert protection for rare and specialized vehicle collections.",
                  features: [
                    "Collection Valuation",
                    "Storage Requirements",
                    "Transportation Coverage",
                    "Exhibition Protection"
                  ],
                  link: "/personal/private-client/car-collections",
                  bgImage: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718d?auto=format&fit=crop&q=80&w=2070"
                }
              ].map((coverage, index) => (
                <div 
                  key={index}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${coverage.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>
                  </div>
                  <div className="relative p-8">
                    <coverage.icon className="w-12 h-12 text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{coverage.title}</h3>
                    <p className="text-gray-200 mb-6">{coverage.description}</p>
                    <ul className="space-y-3 mb-8">
                      {coverage.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-white">
                          <ChevronRight className="w-5 h-5 text-[#91202B] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={coverage.link}
                      className="inline-flex items-center text-white hover:text-[#91202B] font-semibold transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 bg-gradient-to-br from-[#91202B] to-[#7a1b24] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Grundy Private Client?</h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Experience the difference of working with a dedicated team that understands your unique needs.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Dedicated Team",
                  description: "Your personal risk advisor and service team"
                },
                {
                  icon: Shield,
                  title: "Superior Coverage",
                  description: "Comprehensive protection for all your assets"
                },
                {
                  icon: Clock,
                  title: "24/7 Service",
                  description: "Round-the-clock claims and support"
                },
                {
                  icon: Star,
                  title: "VIP Experience",
                  description: "Exclusive benefits and priority service"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures you receive the protection you need with the service you deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Initial Consultation",
                  description: "Connect with a private client advisor to discuss your needs"
                },
                {
                  icon: FileText,
                  title: "Coverage Review",
                  description: "Comprehensive analysis of your current coverage and risks"
                },
                {
                  icon: Settings,
                  title: "Tailored Solution",
                  description: "Custom program design based on your specific requirements"
                },
                {
                  icon: Shield,
                  title: "Ongoing Support",
                  description: "Dedicated team for claims and service needs"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-gray-50 rounded-full mb-6">
                      <step.icon className="w-8 h-8 text-[#91202B]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#91202B] to-transparent -z-10 transform -translate-x-1/2" />
                  )}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-12">
              Contact us today to learn more about our Private Client program and discover how we can protect what matters most to you.
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
                  icon: Mail,
                  title: "Email Us",
                  info: "privateclient@grundy.com",
                  action: "mailto:privateclient@grundy.com"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "Find a local advisor",
                  action: "/contact"
                }
              ].map((contact, index) => (
                <Link
                  key={index}
                  to={contact.action}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
                to="/collector-vehicle/quote"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-300 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}