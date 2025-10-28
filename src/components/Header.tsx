"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="pl-0 font-serif text-2xl font-bold text-blue-900">
              Ambe Service Facilities Pvt Ltd
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`font-sans text-base font-medium transition-colors ${
                pathname === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Services
            </Link>
            <button
              onClick={() => {
                if (pathname === '/') {
                  scrollToSection('why-ambe-service');
                } else {
                  window.location.href = '/#why-ambe-service';
                }
              }}
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Why Us
            </button>
            <Link
              href="/about"
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            {/* <Link
              href="/contact"
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link> */}
          </nav>

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Mail size={18} />
            <span>Contact Us</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',
              inset: 0,
              zIndex: 40
            }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: '#FFFFFF',
              opacity: 1,
              position: 'fixed',
              right: 0,
              top: 0,
              height: '100vh',
              width: '18rem',
              zIndex: 50,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              overflowY: 'auto'
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Menu Content */}
            <div className="pt-16 px-6">
              <nav className="space-y-4">
                <button
                  onClick={() => {
                    if (pathname === '/') {
                      scrollToSection('home');
                    } else {
                      window.location.href = '/';
                    }
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Home
                </button>
                <Link
                  href="/services"
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    pathname === '/services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => {
                    if (pathname === '/') {
                      scrollToSection('why-ambe-service');
                    } else {
                      window.location.href = '/#why-ambe-service';
                    }
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Why Us
                </button>
                <Link
                  href="/about"
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <button
                  onClick={() => {
                    if (pathname === '/') {
                      scrollToSection('testimonials');
                    } else {
                      window.location.href = '/#testimonials';
                    }
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Testimonials
                </button>
                <Link
                  href="/contact"
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;