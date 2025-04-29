import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, Car, Home as HomeIcon, Umbrella, Anchor, Shield } from 'lucide-react';

export default function AgentInfo() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Agent Information</h1>
            <p className="text-xl text-gray-200">
              Access tools and information to better serve your clients with Grundy's specialized insurance solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* CVP Agent Login */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <LogIn className="w-12 h-12 text-[#91202B] mb-6" />
                <h2 className="text-2xl font-bold mb-4">CVP Agent Login</h2>
                <p className="text-gray-600 mb-6">
                  Grundy Insurance's Collector Vehicle Program is underwritten by Philadelphia Insurance Companies. To manage and review current policies for the collector vehicle program Login with the link below.
                </p>
                <a 
                  href="https://agents.grundy.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#91202B] text-white px-6 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
                >
                  Login
                </a>
              </div>

              {/* New Agent Sign-up */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <UserPlus className="w-12 h-12 text-[#91202B] mb-6" />
                <h2 className="text-2xl font-bold mb-4">New Agent Sign-up</h2>
                <p className="text-gray-600 mb-6">
                  To become a Grundy Agent please fill out the following forms and submit to: Newagents@grundy.com
                </p>
                <div className="space-y-4">
                  <a 
                    href="/agent-profile-form.pdf"
                    className="block bg-[#91202B] text-white px-6 py-3 rounded-md hover:bg-[#7a1b24] transition-colors text-center"
                  >
                    Agent Profile Form
                  </a>
                  <a 
                    href="/w9-form.pdf"
                    className="block bg-[#91202B] text-white px-6 py-3 rounded-md hover:bg-[#7a1b24] transition-colors text-center"
                  >
                    W9 Editable Form
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  A Grundy Representative will reach out to you shortly.
                </p>
              </div>
            </div>

            {/* Additional Resources Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Additional Personal Lines Agent Resources</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Car,
                    title: "MVP",
                    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=500",
                    path: "/personal/mvp"
                  },
                  {
                    icon: HomeIcon,
                    title: "Homeowners Insurance",
                    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=500",
                    path: "/personal/private-client/homeowners"
                  },
                  {
                    icon: Shield,
                    title: "Special Collections",
                    image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/Shotguns-Top-Panel.jpg",
                    path: "/personal/private-client/collections"
                  }
                ].map((resource, index) => (
                  <Link 
                    key={index}
                    to={resource.path}
                    className="group relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${resource.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
                    </div>
                    <div className="relative p-8 h-[300px] flex flex-col justify-end">
                      <resource.icon className="w-10 h-10 text-white mb-4" />
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {[
                  {
                    icon: Umbrella,
                    title: "Personal Excess Liability",
                    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
                    path: "/personal/private-client/excess-liability"
                  },
                  {
                    icon: Anchor,
                    title: "Watercraft & Classic Boat",
                    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800",
                    path: "/personal/classic-boat"
                  }
                ].map((resource, index) => (
                  <Link 
                    key={index}
                    to={resource.path}
                    className="group relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${resource.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
                    </div>
                    <div className="relative p-8 h-[300px] flex flex-col justify-end">
                      <resource.icon className="w-10 h-10 text-white mb-4" />
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}