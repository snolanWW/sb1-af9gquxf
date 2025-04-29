import React from 'react';
import { Check, Shield, Award, Clock, Star } from 'lucide-react';
import Modal from './Modal';

interface MVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MVPModal({ isOpen, onClose }: MVPModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Motor Vehicle Program (MVP)"
    >
      <div className="space-y-8">
        {/* Program Overview */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-[#91202B]">Program Overview</h3>
          <p className="text-gray-600 mb-4">
            The Motor Vehicle Program (MVP) represents the evolution of Grundy's commitment to exceptional insurance coverage. Building on our expertise in collector vehicles, MVP extends our premium protection to your daily drivers and modern vehicles.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Agreed Value coverage for all vehicles",
              "No mileage restrictions",
              "Choice of repair shops",
              "OEM parts guarantee"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-[#91202B] mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-[#91202B]">Key Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Comprehensive Coverage",
                description: "Full protection including collision, comprehensive, and liability coverage"
              },
              {
                icon: Award,
                title: "Premium Service",
                description: "24/7 claims support and dedicated customer service team"
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                description: "Customizable policies to match your specific needs"
              },
              {
                icon: Star,
                title: "Added Value",
                description: "Roadside assistance and rental car coverage included"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <benefit.icon className="w-6 h-6 text-[#91202B] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-[#91202B]">Eligibility Requirements</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3">
              {[
                "Valid driver's license for all listed drivers",
                "Clean driving record (no major violations in past 3 years)",
                "Vehicles must be in good condition and regularly maintained",
                "Primary residence in covered territory",
                "Vehicles must be stored in a secure location"
              ].map((requirement, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-[#91202B] mr-2" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application Process */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-[#91202B]">Application Process</h3>
          <div className="space-y-4">
            {[
              {
                step: "1. Initial Consultation",
                description: "Speak with our insurance specialists to discuss your needs"
              },
              {
                step: "2. Vehicle Assessment",
                description: "Provide details about your vehicles and driving history"
              },
              {
                step: "3. Coverage Selection",
                description: "Choose your coverage options and customize your policy"
              },
              {
                step: "4. Policy Activation",
                description: "Complete documentation and activate your coverage"
              }
            ].map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#91202B] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold">{process.step}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section>
          <h3 className="text-xl font-bold mb-4 text-[#91202B]">Program Success</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: "98%",
                label: "Client Satisfaction",
                description: "Based on post-claim surveys"
              },
              {
                metric: "24/7",
                label: "Claims Support",
                description: "Round-the-clock assistance"
              },
              {
                metric: "95%",
                label: "Claims Resolution",
                description: "Within 14 days or less"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-[#91202B] mb-2">{metric.metric}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Modal>
  );
}