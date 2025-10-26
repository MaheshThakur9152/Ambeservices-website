"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-blue-900">
              Ambe Service Facilities
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-ambe-service')}
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
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sans text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Number */}
          <div className="hidden md:flex items-center space-x-2 text-blue-600">
            <Phone size={20} />
            <span className="font-semibold">+91 9876543210</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-ambe-service')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Why Us
              </button>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 px-3 py-2 text-blue-600">
                <Phone size={20} />
                <span className="font-semibold">+91 9876543210</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;