import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Car, Home as HomeIcon, Bot as Boat } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I wanted to compliment Grundy for the courteous, helpful service I received. I called late on a Friday afternoon and needed to bind coverage on a car and needed the proof of Insurance form ASAP. Grundy bent over backwards to be helpful, and I received the forms minutes later. WOW! Talk about Service!",
      author: "Alan & Terrylee Page",
      rating: 5
    },
    {
      quote: "Thank you for your excellent service. I can honestly say your company's service to me in the last two or three days is the best I have ever had the pleasure of dealing with. Now, I'm more convinced to buy more collector cars, and I will know who to send an e-mail to.",
      author: "Carmine Ricca",
      rating: 5
    },
    {
      quote: "I'm writing this morning to express my thanks and appreciation for the terrific job your staff did in helping me with my policy needs. They have been extremely responsive, helpful and prompt in responding to my requests. With this type of customer services its no wonder why Grundy has such a good reputation.",
      author: "Dan Evans",
      rating: 5
    },
    {
      quote: "I just wanted to thank you and everyone at Grundy for making the loss of my 1950 Mercury a little less painful.",
      author: "Dennis Nuremberg",
      rating: 5
    },
    {
      quote: "Thanks again for your help! You were courteous and professional on the phone today, and I appreciate your quick response. Grundy is obviously a good choice, and I will be moving other vehicles over to your company in part because of the way you treated me today.",
      author: "Doug Fox",
      rating: 4
    },
    {
      quote: "People said that your company is just like all the other insurance companies out there, they won't come through with this claim! How wrong those naysayers are! I am so pleased with all Grundy has done in this very difficult situation. Thank you so very much for being true to your advertising!",
      author: "Dr. K.D. Krieger",
      rating: 5
    },
    {
      quote: "I am very appreciative for all your hard work with my insurance on my 1965 F-100. With someone as nice as you handling my insurance, I would have paid double the amount. I think about you every time I get into my F-100, because you made it happen! Thank you again.",
      author: "Jason Mondello",
      rating: 5
    },
    {
      quote: "I knew all along that the coverage you provide would get us back safely. Thanks again for providing more time to enjoy life, less time spent on worry.",
      author: "Jerry Haley",
      rating: 5
    },
    {
      quote: "First of all, thank you so much for your help today. Thanks to you, I was able to register the car, and I'll be able to drive the car this weekend to a local car show. It may seem minor to you, but it's not often that people show the kind of effort you did for me. You were quick, courteous and you got the job done immediately. I hope your supervisor realizes how rare people such as yourself are in today's world. Thanks!",
      author: "Jim Elliott",
      rating: 5
    },
    {
      quote: "You have the best customer service I have ever had. I want to thank all of the people at Grundy that I had the chance to talk with. They made me feel like I was the most important person in the world.",
      author: "Larry Bellach",
      rating: 5
    },
    {
      quote: "I would like to thank all of you for the great, quick service you provided me after I wrecked my 1940 Ford Coupe at the 2004 Frog Follies in Evansville. Your claim service was prompt and very efficient. My car got fixed in a timely manor.",
      author: "Lee Kafoure",
      rating: 4
    },
    {
      quote: "One of the things that all of us who have classic cars, with hours of passion and sweat invested, worry about is: If I have an accident, will the insurance company give good service, as they advertise. Well, let me tell you that you folks at Grundy are tops in my book. I called on a Monday and, I received a settlement check in about 8 to ten days, following my initial contact. I am telling all my gearhead friends about your great service. Thanks for being there.",
      author: "Stephen C. Hovey",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-[#91202B] fill-current' : 'text-[#91202B] fill-transparent'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-8">Client Testimonials</h1>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Quote className="w-12 h-12 text-[#91202B] mb-4" />
              <p className="text-xl text-white italic mb-6">
                "You have the best customer service I have ever had. I want to thank all of the people at Grundy that I had the chance to talk with. They made me feel like I was the most important person in the world."
              </p>
              <p className="text-white font-semibold">– Larry Bellach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <Quote className="w-8 h-8 text-[#91202B] mb-4" />
                  {renderStars(testimonial.rating)}
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Grundy Difference</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of satisfied clients who trust Grundy Insurance with their valuable assets.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#91202B] text-white px-8 py-3 rounded-md hover:bg-[#7a1b24] transition-colors"
            >
              Get Your Quote Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}