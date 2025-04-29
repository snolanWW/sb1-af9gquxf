import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Car, Home as HomeIcon, Umbrella, Gem, ChevronRight, Award, Clock, Heart, Phone, Mail, MapPin, Star, Quote, ArrowRight, Building2, Users } from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedInsurance, setSelectedInsurance] = useState('mvp'); // Default to MVP

  // Content for each insurance type
  const insuranceContent = {
    collector: {
      title: "Protecting Your Classic Car Legacy",
      description: "Specialized coverage designed specifically for collector vehicles, offering agreed value protection and flexible usage terms that understand the unique needs of classic car enthusiasts.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Car-Collection-Sidebar-1-1.jpg",
      features: [
        {
          title: "Agreed Value Coverage",
          description: "Your vehicle is protected at its full agreed value with no depreciation."
        },
        {
          title: "Flexible Usage",
          description: "No mileage restrictions - enjoy your classic car on your terms."
        },
        {
          title: "Choice of Shop",
          description: "Freedom to choose your preferred repair facility for your classic vehicle."
        },
        {
          title: "Specialized Claims",
          description: "Expert claims handling by classic car specialists who understand your vehicle's value."
        }
      ]
    },
    mvp: {
      title: "With Grundy, One Is All You Need!",
      description: "The Motor Vehicle Program by Grundy makes it possible to combine all of your vehicles on one policy and insure them at their agreed value! Get 100% of the Agreed Value of your car guaranteed, with no gaps in coverage.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/2013_Bentley_Continental_GT.06.jpg",
      features: [
        {
          title: "Coverage For All Vehicle Types",
          description: "MVP can insure all types of vehicles licensed for the road including Collector Cars, Regular-Use Vehicles, Pickup Trucks, Trailers, Motor Homes, Exotics, Electric Vehicles, Motor Cycles/ATVs, and more!"
        },
        {
          title: "Agreed Value Protection",
          description: "We work with you to determine the value of your vehicle(s). If a total loss occurs, you'll receive that agreed-upon amount, regardless of market depreciation."
        },
        {
          title: "150% Replacement",
          description: "If a loss occurs and the item's current market value exceeds your coverage limit, you can be reimbursed for up to 150% of the insured amount.*"
        },
        {
          title: "Breakdown Assistance",
          description: "We cover the cost to tow your vehicle to the repair shop of your choice and cover labor costs for emergency roadside assistance, with no deductible."
        }
      ]
    },
    commercial: {
      title: "Commercial Insurance Solutions",
      description: "Comprehensive coverage designed for businesses in the classic car industry, from dealerships to restoration shops and museums.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Museums-Top-Panel.jpg",
      features: [
        {
          title: "Dealer Coverage",
          description: "Specialized protection for classic car dealerships and their inventory."
        },
        {
          title: "Restoration Shop Protection",
          description: "Coverage for vehicles under restoration and shop operations."
        },
        {
          title: "Museum Solutions",
          description: "Comprehensive protection for classic car museums and their collections."
        },
        {
          title: "Business Liability",
          description: "Complete liability coverage for all aspects of your classic car business."
        }
      ]
    }
  };

  const testimonials = [
    {
      quote: "Grundy's understanding of collector vehicles is unmatched. Their agreed value policy gives me complete peace of mind.",
      author: "James Mitchell",
      role: "Classic Car Collector",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The attention to detail in protecting our estate and collections demonstrates why Grundy is the leader in premium insurance.",
      author: "Elizabeth Reynolds",
      role: "Private Client",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Their expertise in handling unique assets and understanding of collector needs sets them apart in the industry.",
      author: "Robert Anderson",
      role: "Art Collector",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Get current content based on selection
  const currentContent = insuranceContent[selectedInsurance];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[800px] flex items-center py-20">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between gap-16">
            {/* Text Content */}
            <div className="w-1/2 pr-16">
              <div className="inline-flex items-center space-x-3 text-gray-500 mb-12">
                <span className="h-px w-12 bg-gray-300"></span>
                <span className="text-sm font-light tracking-wider">SINCE 1947</span>
              </div>
              
              <h1 className="text-6xl font-serif font-light leading-tight mb-10">
                <span className="block mb-4">Grundy Insurance:</span>
                <span className="block font-medium">Protecting What Matters Most</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-16">
                For over 75 years, we've protected the world's finest collections with unparalleled expertise and personalized service.
              </p>

              <Link 
                to="/collector-vehicle/quote"
                className="relative group inline-flex items-center"
              >
                <span className="absolute inset-0 translate-y-[1.4rem] h-px bg-gradient-to-r from-gray-200 via-gray-900 to-gray-200 transform origin-left transition-transform group-hover:scale-x-100"></span>
                <span className="relative text-lg font-medium">Get Your Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Image Section */}
            <div className="w-1/2 px-4">
              <div className="relative w-[600px] h-[600px]">
                {/* Gradient Box Shadow */}
                <div className="hero-offset-box"></div>
                
                {/* Main Image */}
                <div className="relative z-10 overflow-hidden h-full">
                  <img 
                    src="https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/2014-Pebble-Beach-Tour-dElegance-Photos-21.jpg"
                    alt="Luxury Collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-light text-center mb-16">Insurance Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 'collector',
                  title: "Collector Vehicle Program",
                  description: "Specialized coverage for classic, vintage, and collector vehicles with agreed value protection.",
                  image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Automobile-Collections-Top-Panel.jpg",
                  link: "/collector-vehicle"
                },
                {
                  id: 'mvp',
                  title: "Motor Vehicle Program",
                  description: "Comprehensive coverage for your daily drivers and modern vehicles with flexible terms.",
                  image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Collector-Ins-Sidebar.jpg",
                  link: "/personal/mvp"
                },
                {
                  id: 'commercial',
                  title: "Commercial Insurance",
                  description: "Tailored solutions for businesses, from classic car dealers to restoration shops.",
                  image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Com-Switch-Top-Panel.jpg",
                  link: "/commercial"
                }
              ].map((category, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                    selectedInsurance === category.id ? 'wavy-gradient-border' : ''
                  }`}
                  onClick={() => setSelectedInsurance(category.id)}
                >
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-serif font-light mb-2 transition-transform duration-500 group-hover:translate-y-[-0.5rem]">
                      {category.title}
                    </h3>

                    {/* Description Container */}
                    <div className="relative overflow-hidden">
                      {/* Description - Hidden by default, slides up on hover */}
                      <p className="text-gray-600 font-light transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 mb-4">
                        {category.description}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <Link 
                      to={category.link}
                      className="inline-flex items-center text-[#91202B] font-medium group-hover:text-[#7a1b24] transition-all duration-500 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              
              {/* Image Side */}
              <div className="relative">
                {/* Gradient Offset Box */}
                <div className="absolute top-6 left-6 w-full h-[700px] hero-offset-box"></div>

                {/* Main Image Container */}
                <div className="relative z-10 overflow-hidden">
                  <img 
                    src={currentContent.image}
                    alt="Insurance Coverage"
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <h2 className="text-4xl font-serif mb-8">{currentContent.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {currentContent.description}
                </p>
                <div className="space-y-8">
                  {currentContent.features.map((feature, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                      {feature.note && (
                        <p className="text-sm text-gray-500 mt-2">{feature.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto bg-white shadow-xl overflow-hidden wavy-gradient-border">
            <div className="flex flex-col md:flex-row">
              {/* Left Column - Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="max-w-xl">
                  <div className="inline-flex items-center space-x-3 text-gray-500 mb-8">
                    <span className="h-px w-8 bg-gray-300"></span>
                    <span className="text-sm font-light tracking-wider">WHY CHOOSE US</span>
                  </div>
                  
                  <h2 className="text-4xl font-serif font-light mb-8">Experience the Grundy Difference</h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
                    Discover why collectors and enthusiasts have trusted us with their most valued possessions for over 75 years.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-[#91202B]/10 p-3 mr-4">
                        <Shield className="w-6 h-6 text-[#91202B]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif mb-2">Bespoke Solutions</h3>
                        <p className="text-gray-600 text-sm font-light">Tailored coverage for discerning collectors.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#91202B]/10 p-3 mr-4">
                        <Award className="w-6 h-6 text-[#91202B]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif mb-2">Legacy of Trust</h3>
                        <p className="text-gray-600 text-sm font-light">75 years of expertise and excellence.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#91202B]/10 p-3 mr-4">
                        <Star className="w-6 h-6 text-[#91202B]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif mb-2">Elite Protection</h3>
                        <p className="text-gray-600 text-sm font-light">Comprehensive coverage for your assets.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#91202B]/10 p-3 mr-4">
                        <Heart className="w-6 h-6 text-[#91202B]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif mb-2">Personal Service</h3>
                        <p className="text-gray-600 text-sm font-light">Dedicated support for every client.</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/collector-vehicle/quote"
                    className="relative group inline-flex items-center"
                  >
                    <span className="absolute inset-0 translate-y-[1.4rem] h-px bg-gradient-to-r from-gray-200 via-gray-900 to-gray-200 transform origin-left transition-transform group-hover:scale-x-100"></span>
                    <span className="relative text-lg font-medium">Get Your Quote</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Testimonials */}
              <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
                <div className="w-full max-w-lg space-y-8">
                  {/* Featured Testimonial */}
                  <div className="bg-white p-8 shadow-lg">
                    <div className="flex justify-center">
                      <Quote className="w-10 h-10 text-[#91202B] mb-4" />
                    </div>
                    <p className="text-xl font-serif font-light italic text-gray-700 mb-6 leading-relaxed text-center">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].author}
                        className="w-12 h-12 object-cover mr-4"
                      />
                      <div>
                        <div className="font-serif">{testimonials[currentTestimonial].author}</div>
                        <div className="text-gray-600 text-sm font-light">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Navigation */}
                  <div className="flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 transition-colors ${
                          currentTestimonial === index ? 'bg-[#91202B]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}