import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, Shield, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2074)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">
              We're here to help with all your insurance needs. Reach out to us through any of our contact channels.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Phone className="w-10 h-10 text-[#91202B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Available Monday-Friday, 8am-6pm EST</p>
                <a 
                  href="tel:1-888-478-6391" 
                  className="text-[#91202B] font-bold text-lg hover:text-[#7a1b24] transition-colors"
                >
                  1-888-GRUNDY1
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Mail className="w-10 h-10 text-[#91202B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
                <a 
                  href="mailto:contact@grundy.com" 
                  className="text-[#91202B] font-bold text-lg hover:text-[#7a1b24] transition-colors"
                >
                  contact@grundy.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <MapPin className="w-10 h-10 text-[#91202B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our Main Office</p>
                <address className="not-italic text-[#91202B] font-bold">
                  400 Horsham Road<br />
                  P.O. Box 1957<br />
                  Horsham, PA 19044
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="claim">File a Claim</option>
                  <option value="policy">Policy Question</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#91202B]"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      className="mr-2"
                      checked={formData.preferredContact === 'email'}
                      onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      className="mr-2"
                      checked={formData.preferredContact === 'phone'}
                      onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                    />
                    Phone
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#91202B] text-white py-3 rounded-md hover:bg-[#7a1b24] transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Business Hours",
                  info: [
                    "Monday-Friday: 8am-6pm EST",
                    "Saturday-Sunday: Closed",
                    "Holidays: Closed"
                  ]
                },
                {
                  icon: MessageSquare,
                  title: "Customer Support",
                  info: [
                    "24/7 Claims Service",
                    "Online Policy Access",
                    "Live Chat Support"
                  ]
                },
                {
                  icon: Globe,
                  title: "Coverage Area",
                  info: [
                    "Licensed in all 50 states",
                    "International coverage available",
                    "Worldwide support"
                  ]
                },
                {
                  icon: Shield,
                  title: "Emergency Service",
                  info: [
                    "24/7 Claims Hotline",
                    "Roadside Assistance",
                    "Emergency Support"
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                    <item.icon className="w-8 h-8 text-[#91202B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.info.map((line, i) => (
                      <li key={i} className="text-gray-600">{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}