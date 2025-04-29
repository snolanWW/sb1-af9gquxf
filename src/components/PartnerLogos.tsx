import React from 'react';

interface PartnerLogo {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  description?: string;
}

interface PartnerLogosProps {
  partners: PartnerLogo[];
  className?: string;
}

export default function PartnerLogos({ partners, className = '' }: PartnerLogosProps) {
  const sortedPartners = [...partners].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {sortedPartners.map((partner) => (
        <div 
          key={partner.name}
          className="flex flex-col items-center"
        >
          <a
            href={partner.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
          >
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 aspect-[2/1] flex items-center justify-center">
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className="max-w-[200px] max-h-[100px] w-auto h-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-gray-900 hover:text-[#91202B] transition-colors">
                {partner.name}
              </p>
              {partner.description && (
                <p className="text-xs text-gray-500 mt-1">
                  {partner.description}
                </p>
              )}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}