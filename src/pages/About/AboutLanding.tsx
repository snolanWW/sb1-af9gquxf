import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Home as HomeIcon, Anchor, Gem, Users, History, Book, Star, ChevronRight } from 'lucide-react';

export default function AboutLanding() {
  const services = [
    {
      icon: Car,
      title: "Collectible Automobiles",
      description: "No one knows more about properly protecting collector cars than Grundy Insurance. From a client base of 10,000 collectors in 1995, by 1981 we had grown to 100,000,000 collector cars insured. Today, James Sr. is the only broker in the country to have valuation and underwriting authority extended to him personally by AIG.",
      link: "/collector-vehicle"
    },
    {
      icon: Car,
      title: "Regular-Use Automobiles",
      description: "Jim Grundy, Jr. has created an insurance product that also protects your regular-use vehicles on an agreed value basis. Our Motor Vehicle Program, or MVP by Grundy, insures your collector automobiles, daily drivers, trucks, trailers, motor homes, electric vehicles, and more – all on one policy and all at their agreed value.",
      link: "/personal/mvp"
    },
    {
      icon: Gem,
      title: "Valuable Collections",
      description: "Collectors and their brokers consider Grundy to be the preeminent agency for serving the serious collector. We protect collections of jewelry and watches, fine art, antique furniture, clocks, firearms, fine wine, and more. Our risk management specialists work closely with our clients to protect appreciating items of all types.",
      link: "/personal/private-client"
    },
    {
      icon: HomeIcon,
      title: "Fine Homes",
      description: "Grundy Special Client Services has the expertise and resources to meet the special insurance needs of distinctive homes. Because Grundy is licensed in all 50 states, you can insure multiple homes across the country through Grundy.",
      link: "/personal/private-client/homeowners"
    },
    {
      icon: Shield,
      title: "Comprehensive Casualty",
      description: "Grundy also protects you in a myriad of ways with our Personal Excess Liability coverage, our Fraud Safeguard insurance and Event Employment Liability policies. Grundy can manage all of your risk so that you can enjoy your life.",
      link: "/personal/private-client/excess-liability"
    },
    {
      icon: Anchor,
      title: "Classic Boats",
      description: "Last but not least, Grundy Marine Insurance protects classic boats on an Agreed Value basis as well. Jim Grundy, an avid lifelong sailor, personally created this insurance product for the classic boat collector. We insure the hull, equipment, and engines for their full value in the event of a total loss.",
      link: "/personal/classic-boat"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070)',
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
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-[#91202B]"></div>
                <span className="text-white text-sm uppercase tracking-wider">Since 1947</span>
              </div>
              
              <h1 className="text-7xl font-bold text-white leading-tight">
                About
                <span className="block text-[#91202B]">Grundy Insurance</span>
              </h1>
              
              <p className="text-xl text-gray-300">
                The James A. Grundy Agency, Inc. began as a small insurance company with a special knack for innovation. Since 1947, we have grown to be the premier provider of specialized insurance not only for collector vehicles, but for everything that is important to you.
              </p>

              <div className="pt-8 flex flex-wrap gap-6">
                <Link 
                  to="/about/history"
                  className="flex items-center bg-[#91202B] text-white px-8 py-4 rounded-md hover:bg-[#7a1b24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <History className="w-5 h-5 mr-2" />
                  Our History
                </Link>
                <Link 
                  to="/about/insurance-101"
                  className="flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-white/20"
                >
                  <Book className="w-5 h-5 mr-2" />
                  Insurance 101
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Grundy Protects Everything Important To You</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="group bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <service.icon className="w-12 h-12 text-[#91202B] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-[#91202B] group-hover:translate-x-2 transition-transform">
                    <span className="mr-2">Learn more</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Link 
                to="/about/history"
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <History className="w-12 h-12 text-[#91202B] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our History</h3>
                <p className="text-gray-600">Discover our journey from 1947 to becoming the premier provider of specialized insurance.</p>
              </Link>

              <Link 
                to="/about/testimonials"
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Star className="w-12 h-12 text-[#91202B] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
                <p className="text-gray-600">Read what our valued clients have to say about their experience with Grundy Insurance.</p>
              </Link>

              <Link 
                to="/about/insurance-101"
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Book className="w-12 h-12 text-[#91202B] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Insurance 101</h3>
                <p className="text-gray-600">Learn the fundamentals of collector vehicle insurance and specialized coverage.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}