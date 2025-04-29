import React from 'react';
import { Shield, Award, Clock, Star, Building2, Car, Users, PenTool as Tool } from 'lucide-react';

export default function History() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">The Invention of Agreed Value Insurance</h1>
            <p className="text-xl text-gray-200">
              A Grundy Family History
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* The Beginning */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">The Pullman Legacy</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="prose prose-lg">
                  <p className="text-gray-600">
                    At the turn of the last century, Colonel Sam Bally was a Philadelphia businessman who saw that the automobile was going to replace the horse as the primary means of transportation. He and several of his associates founded the Pullman Automobile Company in York, PA, and manufactured stylish, powerful, and expensive touring cars.
                  </p>
                  <p className="text-gray-600">
                    His son Sam raced Pullmans as a way of promoting the brand to the public. Sam was involved in a racing accident, and the injuries forced him to stop competing. Colonel Sam sold out his portion of the business at its peak and moved on to other endeavors.
                  </p>
                </div>
                <div className="p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.grundy.com/wp-content/uploads/Grundy-Colonel-BaileyF6F3A-300x233.jpg" 
                      alt="Vintage Car"
                      className="w-full h-auto"
                    />
                    <p className="text-[14px] text-[#666666] mt-2.5 p-4 text-center">
                      Colonel Sam Bally with an early Pullman automobile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The First Restoration */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">The Birth of Classic Car Restoration</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.grundy.com/wp-content/uploads/grundyhistoryhomepgimgfinal-1-300x190.png" 
                      alt="Classic Car Restoration"
                      className="w-full h-auto"
                    />
                    <p className="text-[14px] text-[#666666] mt-2.5 p-4 text-center">
                      Patty Bally at 18 years of age with her dad Sam. Patty is our Jim's mother.
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg">
                  <p className="text-gray-600">
                    Son Sam was determined to remain in automotive manufacturing however, and built refrigerated truck bodies near Philadelphia. He built all of the Grundy Ice Cream truck bodies, for example. This business generated a good deal of scrap, which Sam would take to Philadelphia and sell.
                  </p>
                  <p className="text-gray-600">
                    On one of those trips, he spotted a 1909 Pierce Arrow on the pile, destined to be broken up. He recognized the beauty of the car and the importance of preserving the history of early automobiles. So, he traded his load of scrap for it and hauled it back to the factory where he and his men restored it. This is the very first documented automobile restoration for historic purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* The Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">The Birth of Agreed Value Insurance</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="prose prose-lg">
                  <p className="text-gray-600">
                    Now, Sam had a daughter Patty who was wooed and wed by James A. Grundy, Sr. after he returned from World War II. Using money from the GI Bill, he started an insurance business that offered all types of insurance. He was keenly interested in insuring Sam's factory, and Sam agreed as long as James could meet certain conditions.
                  </p>
                  <p className="text-gray-600">
                    Sam stipulated that for his son-in-law to insure his factory, he had to figure out a way to insure Sam's car collection at low cost. Also, he wanted the cars insured for their full value because he had spent a considerable amount of money to restore them and they were increasing in value.
                  </p>
                </div>
                <div className="p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.grundy.com/wp-content/uploads/FAMILY1-300x241.jpg" 
                      alt="Classic Car Show"
                      className="w-full h-auto"
                    />
                    <p className="text-[14px] text-[#666666] mt-2.5 p-4 text-center">
                      The Grundy family setting off on an early Glidden Tour
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Legacy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">A Lasting Innovation</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="p-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.grundy.com/wp-content/uploads/grundy-ads-003-243x300.jpg" 
                      alt="Modern Classic Car"
                      className="w-full h-auto"
                    />
                    <p className="text-[14px] text-[#666666] mt-2.5 p-4 text-center">
                      Sam and Mabel Baily in the first automobile documented to be restored for historic purposes
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg">
                  <p className="text-gray-600">
                    James Grundy, Sr. responded to these stipulations by inventing Agreed Value Insurance that is very low cost, yet insures an automobile at its full value forever. Another innovation that he added was providing liability protection for multiple cars but only charging for one, because he reasoned that you only drive one antique car at a time.
                  </p>
                  <p className="text-gray-600">
                    Today, Grundy Insurance protects well over a million individual vehicles and a number of major collections, and is the largest insurer of several categories of collector cars. We have recently extended the concept of agreed value to include not only collector cars, but also regular-use vehicles with our Motor Vehicle Program.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Milestones</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#91202B] rounded-full p-2 mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1947</h3>
                    <p className="text-gray-600">James A. Grundy Sr. establishes Grundy Insurance and invents Agreed Value coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#91202B] rounded-full p-2 mr-4 mt-1">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">First Restoration</h3>
                    <p className="text-gray-600">Sam Bally's 1909 Pierce Arrow becomes the first documented classic car restoration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#91202B] rounded-full p-2 mr-4 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Growing Community</h3>
                    <p className="text-gray-600">Formation of the Antique Automobile Club of America in Hershey, PA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#91202B] rounded-full p-2 mr-4 mt-1">
                    <Tool className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Today</h3>
                    <p className="text-gray-600">Protecting over a million vehicles with innovative insurance solutions</p>
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