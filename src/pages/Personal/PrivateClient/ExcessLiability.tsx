import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Umbrella, Building2, Globe, AlertTriangle, Scale, Check, Phone, MapPin, FileText, Users, Briefcase, Plane } from 'lucide-react';

export default function ExcessLiability() {
  const testimonials = [
    {
      quote: "Grundy's excess liability coverage gives us peace of mind knowing our assets are protected against unforeseen events.",
      author: "Richard M.",
      title: "Business Executive"
    },
    {
      quote: "Their expertise in handling complex liability situations made all the difference when we needed them.",
      author: "Patricia L.",
      title: "Non-Profit Board Member"
    },
    {
      quote: "The worldwide coverage has been invaluable for our lifestyle. We never worry when traveling.",
      author: "David K.",
      title: "International Traveler"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-[#91202B] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Comprehensive Protection
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Personal Excess Liability Insurance</h1>
            <p className="text-xl mb-8 text-gray-200">
              Protect yourself against the countless pitfalls modern life can present. Our comprehensive excess liability coverage safeguards your assets and future earnings.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                Get A Quote
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

      {/* Key Coverage Areas */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Expect the Unexpected</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our personal excess liability policies provide higher limits on your home and auto policies to protect you against unforeseen extreme losses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "Employment Practices Liability",
                  description: "Coverage for employment-related suits brought forward by private staff such as housekeepers and gardeners you hire that are not employed by a contractor.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#c13543]"
                },
                {
                  icon: Users,
                  title: "Worker's Compensation",
                  description: "Compensation coverage for domestic employees, similar to policies carried by businesses for workplace injuries.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#91202B]"
                },
                {
                  icon: AlertTriangle,
                  title: "Fraud Guard",
                  description: "Protection against losses from fraudulent schemes perpetrated by known or unknown individuals, including fraud, forgery, counterfeiting.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#91202B]"
                },
                {
                  icon: Building2,
                  title: "Non-For-Profit Board Liability",
                  description: "Protection while serving on non-profit organization boards, covering personal assets at risk from board decisions.",
                  gradient: "bg-gradient-to-br from-[#91202B] to-[#7a1b24]"
                },
                {
                  icon: Plane,
                  title: "Worldwide Travel Protection",
                  description: "Coverage for losses when circumstances beyond your control cause trip cancellations or require emergency medical treatment abroad.",
                  gradient: "bg-gradient-to-br from-[#7a1b24] to-[#c13543]"
                },
                {
                  icon: Scale,
                  title: "Legal Defense Coverage",
                  description: "Comprehensive coverage for legal defense costs, even if a suit is groundless, false, or fraudulent.",
                  gradient: "bg-gradient-to-br from-[#c13543] to-[#7a1b24]"
                }
              ].map((coverage, index) => (
                <div 
                  key={index}
                  className={`${coverage.gradient} p-8 rounded-xl text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <coverage.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{coverage.title}</h3>
                  <p className="text-white/90">{coverage.description}</p>
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Comprehensive Protection</h2>
                <p className="text-gray-600 mb-8">
                  Our personal excess liability insurance protects you from gaps in your current insurance. We offer coverage that goes beyond standard policies to protect against modern risks.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Higher Coverage Limits",
                      description: "Additional protection beyond your primary insurance policies"
                    },
                    {
                      title: "Worldwide Coverage",
                      description: "Protection that follows you anywhere in the world"
                    },
                    {
                      title: "Defense Costs",
                      description: "Coverage for legal fees and court costs"
                    },
                    {
                      title: "Personal Injury Protection",
                      description: "Coverage for libel, slander, and defamation claims"
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
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070"
                  alt="Professional Protection"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protection Scenarios */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">When You Need Protection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our excess liability coverage protects you in various scenarios where standard insurance may fall short.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Employment Practices",
                  description: "Protection against claims from household staff",
                  scenarios: [
                    "Wrongful termination",
                    "Discrimination claims",
                    "Harassment allegations",
                    "Wage disputes"
                  ]
                },
                {
                  title: "Personal Activities",
                  description: "Coverage for everyday life events",
                  scenarios: [
                    "Sports accidents",
                    "Social media incidents",
                    "Volunteer activities",
                    "Recreational events"
                  ]
                },
                {
                  title: "Property Incidents",
                  description: "Protection beyond standard policies",
                  scenarios: [
                    "Guest injuries",
                    "Property damage claims",
                    "Pet-related incidents",
                    "Construction accidents"
                  ]
                }
              ].map((scenario, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{scenario.title}</h3>
                  <p className="text-gray-600 mb-6">{scenario.description}</p>
                  <ul className="space-y-3">
                    {scenario.scenarios.map((item, sIndex) => (
                      <li key={sIndex} className="flex items-center">
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
                    <p className="text-white/80">{testimonial.title}</p>
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
            <h2 className="text-4xl font-bold mb-6">Get Protected Today</h2>
            <p className="text-gray-600 mb-12">
              Contact us to learn how our personal excess liability coverage can protect you and your assets.
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