"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Bug, Building, Droplets, Utensils, ArrowUpDown, Car, Wrench, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  {
    title: "Housekeeping",
    description: "Professional cleaning services for residential and commercial spaces.",
    image: "/folders/Gallery1.jpeg",
    icon: Home,
    slug: "housekeeping"
  },
  {
    title: "Pest Control",
    description: "Effective pest management with safe, certified methods.",
    image: "/services/pest-control.jpg",
    icon: Bug,
    slug: "pest-control"
  },
  {
    title: "Property Management",
    description: "Comprehensive property maintenance and management services.",
    image: "/services/property-management.jpg",
    icon: Building,
    slug: "property-management"
  },
  {
    title: "Tank Cleaning",
    description: "Specialized water tank cleaning and maintenance services.",
    image: "/services/Blog-TankCleaning_HeaderImage.jpg",
    icon: Droplets,
    slug: "tank-cleaning"
  },
  {
    title: "Catering",
    description: "Quality catering services for events and offices.",
    image: "/services/pantry-boy.jpg",
    icon: Utensils,
    slug: "catering"
  },
  {
    title: "Lift Operations",
    description: "Professional lift maintenance and operation services.",
    image: "/services/lift-operator.jpg",
    icon: ArrowUpDown,
    slug: "lift-operations"
  },
  {
    title: "Car Cleaning",
    description: "Professional vehicle cleaning and detailing services.",
    image: "/services/car-cleaning.jpg",
    icon: Car,
    slug: "car-cleaning"
  },
  {
    title: "Technical Maintenance",
    description: "Comprehensive technical maintenance for electrical and plumbing systems.",
    image: "/services/civil.jpg",
    icon: Wrench,
    slug: "technical-maintenance"
  },
  {
    title: "Office Boy",
    description: "Comprehensive office support services including cleaning, maintenance, and management.",
    image: "/services/office-boy.jpg",
    icon: FileText,
    slug: "office-boy"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ willChange: 'transform' }}
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/header.jpg"
            fill={true}
            priority={true}
            alt="About Us Background"
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Our Services</h1>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of facility management services designed to keep your property running smoothly. Each service is delivered by our team of certified professionals using industry-leading techniques and eco-friendly practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <Link
                    href='/contact'
                    className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
