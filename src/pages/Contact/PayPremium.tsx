import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Bot as Boat, Shield, Clock, Phone, Mail, Building2, Wrench, FileText, DollarSign } from 'lucide-react';

export default function PayPremium() {
  const paymentTypes = [
    {
      icon: Car,
      title: "Collector Car Payments",
      description: "For policies beginning with PHCV & GD",
      contact: {
        phone: "1 (800) 765-9749",
        email: "claimsreport@phly.com"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/phila_ins_btn.png",
          link: "https://www.phly.com/myphly/pay-online.aspx",
          alt: "Philadelphia Insurance Companies"
        }
      ],
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Car,
      title: "Motor Vehicle Program Payments",
      contact: {
        phone: "866-338-4006",
        phoneExt: "1"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/safeco_btn.png",
          link: "http://www.safeco.com/claims-center",
          alt: "Safeco Insurance"
        }
      ],
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Car,
      title: "Car Collections Payments",
      contact: {
        phone: "215-674-1856"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        }
      ],
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Shield,
      title: "Special Collections Payments",
      contact: {
        phone: "215-674-1856"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/safeco_btn.png",
          link: "http://www.safeco.com/claims-center",
          alt: "Safeco Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/travelers_btn.png",
          link: "https://www.travelers.com/claims/report-claim/index.aspx",
          alt: "Travelers"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/pure_btn.png",
          link: "https://www.pureinsurance.com/toolkit/report_claim",
          alt: "Pure Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/chubb_btn.png",
          link: "http://www.chubb.com/claims/report-a-claim.html",
          alt: "Chubb Group of Insurance Companies"
        }
      ],
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: HomeIcon,
      title: "Homeowners Payments",
      contact: {
        phone: "215-674-1856"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/safeco_btn.png",
          link: "http://www.safeco.com/claims-center",
          alt: "Safeco Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/travelers_btn.png",
          link: "https://www.travelers.com/claims/report-claim/index.aspx",
          alt: "Travelers"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/pure_btn.png",
          link: "https://www.pureinsurance.com/toolkit/report_claim",
          alt: "Pure Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/chubb_btn.png",
          link: "http://www.chubb.com/claims/report-a-claim.html",
          alt: "Chubb Group of Insurance Companies"
        }
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Boat,
      title: "Classic Yacht Payments",
      contact: {
        phone: "215-674-1856",
        phoneExt: "114"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/safeco_btn.png",
          link: "http://www.safeco.com/claims-center",
          alt: "Safeco Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/pure_btn.png",
          link: "https://www.pureinsurance.com/toolkit/report_claim",
          alt: "Pure Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/chubb_btn.png",
          link: "http://www.chubb.com/claims/report-a-claim.html",
          alt: "Chubb Group of Insurance Companies"
        }
      ],
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Shield,
      title: "Personal Excess Liability Payments",
      contact: {
        phone: "215-674-1856"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/aig_btn.png",
          link: "http://www.aig.com/claims/individual-claims?cmpid=KNC-Google-Brand-a.i.g",
          alt: "AIG"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/safeco_btn.png",
          link: "http://www.safeco.com/claims-center",
          alt: "Safeco Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/travelers_btn.png",
          link: "https://www.travelers.com/claims/report-claim/index.aspx",
          alt: "Travelers"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/pure_btn.png",
          link: "https://www.pureinsurance.com/toolkit/report_claim",
          alt: "Pure Insurance"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/chubb_btn.png",
          link: "http://www.chubb.com/claims/report-a-claim.html",
          alt: "Chubb Group of Insurance Companies"
        }
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  const commercialPayments = [
    {
      icon: Wrench,
      title: "Restoration Shops Program Payments",
      contact: {
        email: "diana@grundy.com",
        phone: "866-338-4006",
        phoneExt: "163"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_8.jpg",
      mailingAddresses: {
        standard: {
          title: "Standard Mail",
          address: "P.O. Box 1957\nHorsham PA 19044"
        },
        overnight: {
          title: "Overnight Mail",
          address: "410 Horsham Rd, Suite 100\nHorsham PA 19044"
        }
      }
    },
    {
      icon: Car,
      title: "Custom Car Builder Payments",
      contact: {
        email: "diana@grundy.com",
        phone: "866-338-4006",
        phoneExt: "163"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_9.jpg",
      mailingAddresses: {
        standard: {
          title: "Standard Mail",
          address: "P.O. Box 1957\nHorsham PA 19044"
        },
        overnight: {
          title: "Overnight Mail",
          address: "410 Horsham Rd, Suite 100\nHorsham PA 19044"
        }
      }
    },
    {
      icon: Car,
      title: "Classic Car Dealer Payments",
      contact: {
        email: "sean@grundy.com",
        phone: "866-338-4006",
        phoneExt: "160"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_10.jpg",
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/phila_ins_btn.png",
          link: "https://www.phly.com/Claims/AutoReportClaim.aspx",
          alt: "Philadelphia Insurance Companies"
        }
      ]
    },
    {
      icon: Building2,
      title: "Car Museum Payments",
      contact: {
        email: "sean@grundy.com",
        phone: "866-338-4006",
        phoneExt: "160"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_11.jpg",
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/phila_ins_btn.png",
          link: "https://www.phly.com/Claims/AutoReportClaim.aspx",
          alt: "Philadelphia Insurance Companies"
        },
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/chubb_btn.png",
          link: "http://www.chubb.com/claims/report-a-claim.html",
          alt: "Chubb Group of Insurance Companies"
        }
      ]
    }
  ];

  const allPayments = [...paymentTypes, ...commercialPayments];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">Pay Premium</h1>
            <p className="text-xl text-gray-200 mb-8">
              Manage your insurance premiums easily with our secure online payment options or contact our customer service team for assistance.
            </p>
            <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <DollarSign className="w-8 h-8 text-white mr-4 flex-shrink-0" />
              <p className="text-white">
                Multiple payment options available including credit card, ACH, and check payments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Notice */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4 text-gray-600">
            <Clock className="w-6 h-6 text-[#91202B]" />
            <p>Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST</p>
          </div>
        </div>
      </div>

      {/* Combined Payments Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Insurance Payments</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPayments.map((payment, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${payment.image})` }}
                    >
                      <div className="h-full bg-gradient-to-b from-black/60 to-black/20 p-6">
                        <payment.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{payment.title}</h3>
                    {payment.description && (
                      <p className="text-gray-600 mb-4">{payment.description}</p>
                    )}
                    
                    {/* Partner Logos Section */}
                    {payment.partnerLogos && payment.partnerLogos.length > 0 && (
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-500 mb-2">Pay premium with:</p>
                        <div className={`grid ${payment.partnerLogos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 items-center`}>
                          {payment.partnerLogos.map((logo, logoIndex) => (
                            <a
                              key={logoIndex}
                              href={logo.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors h-16"
                            >
                              <img 
                                src={logo.url}
                                alt={logo.alt}
                                className="max-h-8 w-auto object-contain"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {payment.businessHours && (
                      <div className="mt-4">
                        <p className="text-gray-600 text-sm">{payment.businessHours}</p>
                      </div>
                    )}

                    {payment.mailingAddresses && (
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm text-gray-700">{payment.mailingAddresses.standard.title}</p>
                            <p className="text-gray-600 whitespace-pre-line text-sm">{payment.mailingAddresses.standard.address}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-gray-700">{payment.mailingAddresses.overnight.title}</p>
                            <p className="text-gray-600 whitespace-pre-line text-sm">{payment.mailingAddresses.overnight.address}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <DollarSign className="w-16 h-16 text-[#91202B] mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
              <p className="text-gray-600 mb-6">
                We accept various payment methods including credit cards, ACH transfers, and checks. For assistance with your payment, our customer service team is here to help.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="tel:888-647-8639"
                  className="bg-[#91202B] text-white px-6 py-3 rounded-md hover:bg-[#7a1b24] transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  888-647-8639
                </a>
                <Link 
                  to="/contact"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}