import React from 'react';
import PartnerLogos from '../../components/PartnerLogos';
import { insurancePartners } from '../../data/partners';
import { Link } from 'react-router-dom';
import { Building2, Shield, Award, Star, Handshake, Globe, Wrench } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      category: "Insurance Carriers",
      description: "Our trusted insurance carrier partners, all rated A or better by AM Best.",
      partners: [
        {
          name: "Philadelphia Insurance Companies",
          description: "A++ rated carrier specializing in specialty insurance solutions",
          type: "Primary Carrier"
        },
        {
          name: "Chubb Insurance",
          description: "A++ rated carrier known for exceptional claims service",
          type: "Primary Carrier"
        },
        {
          name: "AIG Private Client Group",
          description: "A rated carrier focused on high-net-worth insurance solutions",
          type: "Primary Carrier"
        }
      ]
    },
    {
      category: "Automotive Organizations",
      description: "Leading automotive clubs and organizations we work with.",
      partners: [
        {
          name: "Antique Automobile Club of America",
          description: "America's premier resource for the collectible vehicle community",
          type: "Club Partner"
        },
        {
          name: "Classic Car Club of America",
          description: "Dedicated to the preservation and understanding of Classic cars",
          type: "Club Partner"
        },
        {
          name: "Vintage Motor Car Club of America",
          description: "Supporting the hobby since 1938",
          type: "Club Partner"
        }
      ]
    },
    {
      category: "Restoration Specialists",
      description: "Expert restoration shops we trust with our clients' vehicles.",
      partners: [
        {
          name: "Classic Car Restoration Network",
          description: "Network of certified restoration specialists",
          type: "Service Partner"
        },
        {
          name: "Heritage Vehicle Services",
          description: "Specializing in European classic restoration",
          type: "Service Partner"
        },
        {
          name: "Vintage Auto Specialists",
          description: "Expert restoration of American classics",
          type: "Service Partner"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Our Partners</h1>
            <p className="text-xl text-gray-200">
              Working with the best in the industry to provide exceptional service and protection for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Insurance Partners</h2>
            <PartnerLogos partners={insurancePartners} />
          </div>
        </div>
      </section>

      {/* Partners Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {partners.map((section, index) => (
              <div key={index} className="mb-20 last:mb-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{section.category}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {section.partners.map((partner, pIndex) => (
                    <div key={pIndex} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        {section.category === "Insurance Carriers" && <Shield className="w-8 h-8 text-[#91202B]" />}
                        {section.category === "Automotive Organizations" && <Building2 className="w-8 h-8 text-[#91202B]" />}
                        {section.category === "Restoration Specialists" && <Wrench className="w-8 h-8 text-[#91202B]" />}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-gray-600 mb-4">{partner.description}</p>
                      <span className="inline-block bg-[#91202B]/10 text-[#91202B] px-3 py-1 rounded-full text-sm">
                        {partner.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "All partners meet our strict quality and service standards"
                },
                {
                  icon: Award,
                  title: "Industry Leaders",
                  description: "Partnerships with top-rated companies and organizations"
                },
                {
                  icon: Star,
                  title: "Expert Service",
                  description: "Access to specialized knowledge and capabilities"
                },
                {
                  icon: Handshake,
                  title: "Trusted Relationships",
                  description: "Long-standing partnerships built on mutual trust"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                    <benefit.icon className="w-8 h-8 text-[#91202B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}