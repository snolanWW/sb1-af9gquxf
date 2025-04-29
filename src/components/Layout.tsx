import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import Logo from './Logo';
import { LogIn } from 'lucide-react';

const navigation = [
  {
    title: 'Collector Vehicle Program',
    path: '/collector-vehicle',
    submenu: [
      { title: 'Get a Quote', path: '/collector-vehicle/quote' },
      { title: 'Why Agreed Value', path: '/collector-vehicle/agreed-value' }
    ]
  },
  {
    title: 'Personal Insurance',
    path: '/personal',
    submenu: [
      { title: 'MVP', path: '/personal/mvp' },
      { 
        title: 'Private Client',
        path: '/personal/private-client',
        submenu: [
          { title: 'Auto Collections', path: '/personal/private-client/auto-collections' },
          { title: 'Homeowners', path: '/personal/private-client/homeowners' },
          { title: 'Excess Liability', path: '/personal/private-client/excess-liability' },
          { title: 'Car Collections', path: '/personal/private-client/car-collections' },
          { title: 'Special Collections', path: '/personal/private-client/collections' }
        ]
      },
      { title: 'Classic Boat', path: '/personal/classic-boat' }
    ]
  },
  {
    title: 'Commercial',
    path: '/commercial',
    submenu: [
      { title: 'Classic Car Dealers', path: '/commercial/dealers' },
      { title: 'Classic Car Museums', path: '/commercial/museums' },
      { title: 'Restoration Shops', path: '/commercial/restoration' }
    ]
  },
  {
    title: 'About Grundy',
    path: '/about',
    submenu: [
      { title: 'Our History', path: '/about/history' },
      { title: 'Meet the Team', path: '/about/team' },
      { title: 'Partners', path: '/about/partners' },
      { title: 'Testimonials', path: '/about/testimonials' },
      { title: 'Insurance 101', path: '/about/insurance-101' }
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
    submenu: [
      { title: 'Agent Information', path: '/contact/find-agent' },
      { title: 'Careers', path: '/contact/careers' },
      { title: 'File a Claim', path: '/contact/file-claim' },
      { title: 'Pay Premium', path: '/contact/pay-premium' },
      { title: 'Get a Quote', path: '/collector-vehicle/quote' }
    ]
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuEnter = (path: string) => {
    setActiveSubMenu(path);
  };

  const isActive = (item: any) => {
    const currentPath = location.pathname;
    if (currentPath === item.path) return true;
    if (item.submenu) {
      return item.submenu.some((subItem: any) => {
        if (currentPath === subItem.path) return true;
        if (subItem.submenu) {
          return subItem.submenu.some((grandChild: any) => currentPath === grandChild.path);
        }
        return false;
      });
    }
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md relative z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center">
              <ul className="flex space-x-6 mr-8">
                {navigation.map((item, index) => (
                  <li 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to={item.path}
                      className={`py-2 inline-block text-gray-700 hover:text-[#91202B] transition-colors ${
                        isActive(item) ? 'text-[#91202B] font-semibold' : ''
                      }`}
                    >
                      <span className="flex items-center">
                        {item.title}
                        {item.submenu && (
                          <svg 
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                              activeMenu === index ? 'transform rotate-180' : ''
                            }`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </Link>
                    {item.submenu && activeMenu === index && (
                      <div 
                        className="absolute left-0 mt-0 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-out"
                        style={{ 
                          transformOrigin: 'top',
                          animation: 'dropdown 0.2s ease-out'
                        }}
                      >
                        {item.submenu.map((subItem: any, subIndex: number) => (
                          <div
                            key={subIndex}
                            className="relative"
                            onMouseEnter={() => handleSubMenuEnter(subItem.path)}
                            onMouseLeave={() => setActiveSubMenu(null)}
                          >
                            <Link
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#91202B] transition-colors ${
                                location.pathname === subItem.path ? 'bg-gray-50 text-[#91202B] font-semibold' : ''
                              } ${subItem.submenu ? 'flex items-center justify-between' : ''}`}
                            >
                              {subItem.title}
                              {subItem.submenu && (
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </Link>
                            {subItem.submenu && activeSubMenu === subItem.path && (
                              <div 
                                className="absolute left-full top-0 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 -mt-1"
                                style={{ 
                                  transformOrigin: 'left',
                                  animation: 'dropdown 0.2s ease-out'
                                }}
                              >
                                {subItem.submenu.map((grandChild: any, grandChildIndex: number) => (
                                  <Link
                                    key={grandChildIndex}
                                    to={grandChild.path}
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#91202B] transition-colors ${
                                      location.pathname === grandChild.path ? 'bg-gray-50 text-[#91202B] font-semibold' : ''
                                    }`}
                                  >
                                    {grandChild.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                to="/login"
                className="inline-flex items-center bg-[#91202B] text-white px-4 py-2 rounded-md hover:bg-[#7a1b24] transition-colors"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            </div>
          </div>
        </nav>
        <div className="h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"></div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}