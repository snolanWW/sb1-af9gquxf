import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, FileText, Users, Heart, Shield, Star, Briefcase, GraduationCap, Clock, DollarSign } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage for you and your family"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off to help you maintain a healthy balance"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Excellent salary and bonus opportunities based on performance"
    },
    {
      icon: GraduationCap,
      title: "Growth Opportunities",
      description: "Professional development and career advancement paths"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">Careers at Grundy</h1>
            <p className="text-xl text-gray-200 mb-8">
              Join one of the nation's largest privately managed insurance marketing companies, specializing in programs distributed through advertising. Experience a stable, congenial workplace with excellent benefits and opportunities for growth.
            </p>
            <div className="flex gap-4">
              <a 
                href="#opportunities"
                className="bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                View Opportunities
              </a>
              <Link 
                to="/about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Grundy */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Join Grundy?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Grundy, we believe in creating an environment where employees can thrive. Our team members enjoy competitive benefits, opportunities for growth, and a supportive culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <benefit.icon className="w-12 h-12 text-[#91202B] mb-6" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Opportunities */}
      <div id="opportunities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Employment Opportunities</h2>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 mb-6">
                  Grundy Insurance is not filling any in-office positions at this time. We appreciate your interest in joining our team, please check back at a later date for updates.
                </p>
                <p className="text-gray-600">
                  Visit the <Link to="/about" className="text-[#91202B] hover:text-[#7a1b24]">About Grundy</Link> page to learn more about who we are and our culture.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="font-bold mb-4">Email Us</h3>
                <a 
                  href="mailto:careers@grundy.com"
                  className="text-[#91202B] hover:text-[#7a1b24] flex flex-col items-center"
                >
                  <Mail className="w-8 h-8 mb-2" />
                  careers@grundy.com
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-4">Call Us</h3>
                <a 
                  href="tel:+18663384006"
                  className="text-[#91202B] hover:text-[#7a1b24] flex flex-col items-center"
                >
                  <Phone className="w-8 h-8 mb-2" />
                  +1 (866) 338-4006
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-4">Fax Us</h3>
                <span className="text-gray-600 flex flex-col items-center">
                  <FileText className="w-8 h-8 mb-2" />
                  +1 (215) 674-1099
                </span>
              </div>
              <div>
                <h3 className="font-bold mb-4">Message Us</h3>
                <Link 
                  to="/contact"
                  className="text-[#91202B] hover:text-[#7a1b24] flex flex-col items-center"
                >
                  <Mail className="w-8 h-8 mb-2" />
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-8">
                  At Grundy, we foster a culture of excellence, innovation, and mutual respect. Our employees are salaried, and no high-pressure sales are required. We believe in sustained growth that creates new positions in various departments.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Collaborative Environment",
                      description: "Work with talented professionals who share your passion for excellence"
                    },
                    {
                      icon: Shield,
                      title: "Stability & Security",
                      description: "Join a company with a 75+ year history of success and growth"
                    },
                    {
                      icon: Star,
                      title: "Recognition & Rewards",
                      description: "Your contributions are valued and rewarded appropriately"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <item.icon className="w-6 h-6 text-[#91202B] mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}