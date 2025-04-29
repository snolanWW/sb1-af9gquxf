import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Bot as Boat, Shield, Clock, Phone, Mail, Building2, Wrench, FileText, HelpCircle } from 'lucide-react';

export default function FileClaim() {
  const claimTypes = [
    {
      icon: Car,
      title: "Collector Car Claims",
      description: "For policies beginning with PHCV & GD",
      contact: {
        phone: "1 (800) 765-9749",
        email: "claimsreport@phly.com"
      },
      partnerLogos: [
        {
          url: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/phila_ins_btn.png",
          link: "https://www.phly.com/Claims/AutoReportClaim.aspx",
          alt: "Philadelphia Insurance Companies"
        },
      ],
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Car,
      title: "Motor Vehicle Program Claims",
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
      title: "Car Collections Claims",
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
      title: "Special Collections Claims",
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
      title: "Homeowners Claims",
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
      title: "Classic Yacht Claims",
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
      title: "Personal Excess Liability Claims",
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

  const allClaims = [
    ...claimTypes,
    {
      icon: Wrench,
      title: "Restoration Shops Program Claims",
      description: "If you have a loss to submit and you have an independent agent, please contact your agent directly.",
      contact: {
        email: "diana@grundy.com",
        phone: "866-338-4006",
        phoneExt: "163"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_8.jpg"
    },
    {
      icon: Car,
      title: "Custom Car Builder Claims",
      description: "If you have a loss to submit and you have an independent agent, please contact your agent directly.",
      contact: {
        email: "diana@grundy.com",
        phone: "866-338-4006",
        phoneExt: "163"
      },
      businessHours: "Our regular business hours are Monday – Friday from 8:30am to 4:45pm EST.",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/make_claim_9.jpg"
    },
    {
      icon: Car,
      title: "Classic Car Dealer Claims",
      description: "If you have a loss to submit and you have an independent agent, please contact your agent directly.",
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
      title: "Car Museum Claims",
      description: "If you have a loss to submit and you have an independent agent, please contact your agent directly.",
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
            <h1 className="text-5xl font-bold text-white mb-4">File a Claim</h1>
            <p className="text-xl text-gray-200">
              When the unthinkable happens, you can rely on Grundy and our trusted insurance partners. Our service is legendary in the industry for the ease and speed of obtaining claims settlements.
            </p>
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

      {/* Combined Claims Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Insurance Claims</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allClaims.map((claim, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#91202B] to-[#7a1b24] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow text-white"
                >
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${claim.image})` }}
                    >
                      <div className="h-full bg-gradient-to-b from-black/60 to-black/20 p-6">
                        <claim.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{claim.title}</h3>
                    {claim.description && (
                      <p className="text-white/90 mb-4">{claim.description}</p>
                    )}
                    
                    {/* Partner Logos Section */}
                    {claim.partnerLogos && claim.partnerLogos.length > 0 && (
                      <div className="border-t border-white/10 pt-4 mb-4">
                        <p className="text-sm text-white/80 mb-2">File a claim with:</p>
                        <div className={`grid ${claim.partnerLogos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 items-center`}>
                          {claim.partnerLogos.map((logo, logoIndex) => (
                            <a
                              key={logoIndex}
                              href={logo.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors h-16"
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

                    <div className="space-y-3">
                      {claim.businessHours && (
                        <p className="text-white/90 text-sm">{claim.businessHours}</p>
                      )}
                      {claim.contact.email && (
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-white/90 mr-2" />
                          <a 
                            href={`mailto:${claim.contact.email}`}
                            className="text-white/90 hover:text-white"
                          >
                            {claim.contact.email}
                          </a>
                        </div>
                      )}
                      {claim.contact.phone && (
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-white/90 mr-2" />
                          <a 
                            href={`tel:${claim.contact.phone.replace(/[^0-9]/g, '')}`}
                            className="text-white/90 hover:text-white"
                          >
                            {claim.contact.phone}
                            {claim.contact.phoneExt && ` ext. ${claim.contact.phoneExt}`}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <HelpCircle className="w-16 h-16 text-[#91202B] mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Need Additional Assistance?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about filing a claim, our customer service team is here to help.
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