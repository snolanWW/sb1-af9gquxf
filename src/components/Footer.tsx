import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, Facebook, Twitter, Instagram, Linkedin, ChevronRight, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#91202B] text-white">
      {/* Main Footer Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Top Section with Logo and Description */}
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="mb-6">
                  <img 
                    src="https://www.grundy.com/wp-content/uploads/Grundy_Final_Animated_logo_300x118.gif"
                    alt="Grundy Insurance"
                    className="h-12"
                  />
                </div>
                <p className="text-gray-200 mb-8">
                  Protecting what matters most since 1947. Specialized insurance solutions for collectors and enthusiasts, backed by decades of expertise and personalized service.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                      aria-label={`Follow us on ${Icon.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'About Us', path: '/about' },
                    { label: 'Contact', path: '/contact' },
                    { label: 'Careers', path: '/contact/careers' },
                    { label: 'File a Claim', path: '/contact/file-claim' }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="hover:text-gray-200 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insurance Products */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-6">Insurance Products</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Collector Vehicle Program', path: '/collector-vehicle' },
                    { label: 'Motor Vehicle Program', path: '/personal/mvp' },
                    { label: 'Private Client Services', path: '/personal/private-client' },
                    { label: 'Classic Boat Insurance', path: '/personal/classic-boat' },
                    { label: 'Commercial Programs', path: '/commercial' }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="hover:text-gray-200 transition-colors flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <a href="tel:1-888-478-6391" className="hover:text-gray-200 transition-colors">1-888-GRUNDY1 (478-6391)</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <a href="mailto:contact@grundy.com" className="hover:text-gray-200 transition-colors">contact@grundy.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <address className="not-italic">
                        400 Horsham Road<br />
                        P.O. Box 1957<br />
                        Horsham, PA 19044
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p>Mon - Fri: 8:30am - 4:45pm EST</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Awards and Certifications */}
            <div className="border-t border-white/10 pt-12 pb-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "75+", label: "Years of Excellence" },
                  { number: "1M+", label: "Vehicles Protected" },
                  { number: "50", label: "States Covered" },
                  { number: "24/7", label: "Claims Support" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 bg-[#7a1b24]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Grundy Insurance. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Privacy Policy
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Terms of Service
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Sitemap
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}