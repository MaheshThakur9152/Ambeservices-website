"use client";

import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              Ambe Service Facilities Pvt Ltd
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for professional facility management services. We provide comprehensive solutions for housekeeping, property management, and maintenance services across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919619607537" className="text-gray-300 hover:text-white transition-colors">
                  +91 9619607537
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+9197977018742" className="text-gray-300 hover:text-white transition-colors">
                  +91 7977018742
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+02245066566" className="text-gray-300 hover:text-white transition-colors">
                  +022 4506 6566
                </a>
              </div>
            </div>
              <div className="flex items-center gap-3 pt-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contact@ambeservice.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@ambeservice.com
                </a>
              </div>
              <div className="flex items-start gap-3 pt-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-ambe-service')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Why Us
                </button>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#housekeeping" className="text-gray-300 hover:text-white transition-colors">
                  Housekeeping
                </a>
              </li>
              <li>
                <a href="/services#pest-control" className="text-gray-300 hover:text-white transition-colors">
                  Pest Control
                </a>
              </li>
              <li>
                <a href="/services#tank-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Tank Cleaning
                </a>
              </li>
              <li>
                <a href="/services#catering" className="text-gray-300 hover:text-white transition-colors">
                  Catering & Pantry Management
                </a>
              </li>
              <li>
                <a href="/services#lift-operators" className="text-gray-300 hover:text-white transition-colors">
                  Lift Operators
                </a>
              </li>
              <li>
                <a href="/services#property-management" className="text-gray-300 hover:text-white transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="/services#storage" className="text-gray-300 hover:text-white transition-colors">
                  Storage Management
                </a>
              </li>
              <li>
                <a href="/services#office-boy" className="text-gray-300 hover:text-white transition-colors">
                  Office Boy
                </a>
              </li>
              <li>
                <a href="/services#car-cleaning" className="text-gray-300 hover:text-white transition-colors">
                  Car Cleaning
                </a>
              </li>
              <li>
                <a href="/services#vehicle-inspection" className="text-gray-300 hover:text-white transition-colors">
                  Vehicle Inspection Pit Cleaning
                </a>
              </li>
              <li>
                <a href="/services#civil" className="text-gray-300 hover:text-white transition-colors">
                  Civil & Concrete Management
                </a>
              </li>
              <li>
                <a href="/services#facade" className="text-gray-300 hover:text-white transition-colors">
                  Facade Cleaning
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 mr-4">Follow us:</span>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Ambe Service Facilities Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
