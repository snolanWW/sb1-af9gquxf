import React from 'react';
import { Users, Shield, Award, Star } from 'lucide-react';
import DepartmentSlider from '../../components/DepartmentSlider';

export default function Team() {
  const executives = [
    {
      name: "Jim Grundy",
      title: "Chief Executive Officer",
      image: "https://www.grundy.com/wp-content/uploads/jim-grundy.jpg",
      bio: "Leading Grundy Insurance's continued innovation in specialized insurance solutions."
    },
    {
      name: "Sam Grundy",
      title: "President/Principal Officer",
      image: "https://www.grundy.com/wp-content/uploads/sam-grundy.jpg",
      bio: "Overseeing operations and strategic direction of the company."
    },
    {
      name: "Josh Grundy",
      title: "Chief Marketing Officer",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/josh-grundy.jpg",
      bio: "Directing marketing initiatives and brand development."
    },
    {
      name: "Heather Marr",
      title: "Chief Operations Officer",
      image: "https://www.grundy.com/wp-content/uploads/heather-marr.jpg",
      bio: "Managing day-to-day operations and organizational efficiency."
    }
  ];

  const leadership = [
    {
      name: "Bill Rinnier",
      title: "VP Collector Vehicle Program",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/bill-rinnier.jpg"
    },
    {
      name: "Anne Wolfe",
      title: "Chief Data Officer",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/anne-wolfe.jpg"
    },
    {
      name: "Clint Deiley",
      title: "President Utility Division",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/clint-deiley-1.jpg"
    },
    {
      name: "Jen Hathaway",
      title: "Chief Accounting Officer",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/jennifer-hathaway.jpg"
    },
    {
      name: "Bethanne Mitchell",
      title: "VP Private Client",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/bethanne-michael.jpg"
    },
    {
      name: "Gwendalyn Bobeck",
      title: "President Marine Division",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/gwendalyn-bobeck-1.jpg"
    },
    {
      name: "Michael Victorino",
      title: "President Restorer & Builder",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/michael-victorino-1.jpg"
    },
    {
      name: "Sarah Weiss",
      title: "VP Personal Lines",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/sarah-weiss.jpg"
    },
    {
      name: "Elizabeth Illg",
      title: "Event Coordinator",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/elizabeth-illg.jpg"
    }
  ];

  const departments = [
    {
      name: "Private Client Team",
      image: "https://www.grundy.com/wp-content/uploads/private-client-team.jpg"
    },
    {
      name: "Mater Utility Program",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/commercial-utility-team.jpg"
    },
    {
      name: "Collector Vehicle Program - New Business Team",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/new-business-team.jpg"
    },
    {
      name: "Customer Service Team",
      image: "https://www.grundy.com/wp-content/uploads/customer-service-team.jpg"
    },
    {
      name: "Collector Vehicle Program - Data Team",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/data-team.jpg"
    },
    {
      name: "Collector Vehicle Program Payment Team",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/payments-team.jpg"
    },
    {
      name: "Restorer & Builder Team",
      image: "https://marvel-b1-cdn.bc0a.com/f00000000200059/www.grundy.com/wp-content/uploads/restorer-builder-team.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-200">
              Dedicated professionals with deep expertise in specialized insurance solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Leadership */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Executive Leadership</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((executive, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    className="w-full h-64 object-cover"
                    src={executive.image}
                    alt={executive.name}
                  />
                  <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-[#91202B] font-semibold">
                      {executive.title}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{executive.name}</h3>
                    <p className="mt-2 text-gray-600">{executive.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.slice(0, -1).map((leader, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    className="w-full h-64 object-cover"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-[#91202B] mt-2">{leader.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Elizabeth Illg centered */}
            <div className="mt-8 flex justify-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[300px]">
                <img 
                  className="w-full h-64 object-cover"
                  src={leadership[leadership.length - 1].image}
                  alt={leadership[leadership.length - 1].name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{leadership[leadership.length - 1].name}</h3>
                  <p className="text-[#91202B] mt-2">{leadership[leadership.length - 1].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Slider */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Departments</h2>
            <DepartmentSlider departments={departments} />
          </div>
        </div>
      </div>
    </div>
  );
}