"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Bug, Building, Droplets, Utensils, ArrowUpDown, Users, Car, Wrench, Briefcase } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const values = [
    {
      title: "Professional Excellence",
      tagline: "Skilled professionals, exceptional results",
      description: "Our 150+ trained staff members undergo rigorous training and certification to deliver consistent, high-quality facility management services across all touchpoints."
    },
    {
      title: "Transparent Communication",
      tagline: "Clear pricing, honest service",
      description: "We believe in transparent pricing and open communication, ensuring our clients always know what to expect from our services and billing."
    },
    {
      title: "Long-term Partnerships",
      tagline: "Building lasting relationships",
      description: "We focus on developing long-term partnerships with our clients, understanding their unique needs and growing together through consistent service excellence."
    }
  ];

  const services = [
    {
      icon: <Home size={32} />,
      title: "Housekeeping",
      description: "Professional cleaning services for residential and commercial spaces with eco-friendly products and trained staff."
    },
    {
      icon: <Bug size={32} />,
      title: "Pest Control",
      description: "Effective pest management solutions using safe, certified methods to protect your property from unwanted pests."
    },
    {
      icon: <Building size={32} />,
      title: "Property Management",
      description: "Comprehensive property maintenance and management services ensuring optimal property performance and value."
    },
    {
      icon: <Droplets size={32} />,
      title: "Tank Cleaning",
      description: "Specialized water tank cleaning and maintenance services to ensure clean, safe water supply."
    },
    {
      icon: <Utensils size={32} />,
      title: "Catering",
      description: "Quality catering services for events, offices, and special occasions with hygienic food preparation."
    },
    {
      icon: <ArrowUpDown size={32} />,
      title: "Lift Operations",
      description: "Professional lift maintenance and operation services ensuring safe and reliable vertical transportation."
    },
    {
      icon: <Car size={32} />,
      title: "Car Cleaning",
      description: "Professional vehicle cleaning and detailing services for personal and fleet vehicles."
    },
    {
      icon: <Wrench size={32} />,
      title: "Technical Maintenance",
      description: "Comprehensive technical maintenance services for electrical, plumbing, and mechanical systems."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
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
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ willChange: 'opacity' }}
            >
              A trusted facility management partner providing comprehensive property maintenance solutions across Mumbai and Maharashtra. At Ambe Service Facilities, we believe facility management is more than just cleaning - it's about skilled professionals, reliable systems, and exceptional service that keep your properties running smoothly. With 150+ trained staff members and a proven track record serving residential societies, commercial complexes, and corporate offices, we deliver quality housekeeping, pest control, property management, and technical maintenance services tailored to meet every client's unique needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our people-first approach guides everything we do, ensuring exceptional service and meaningful relationships with every client.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                style={{ borderRadius: '12px' }}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  {value.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facility management services tailored to meet diverse client needs across residential and commercial sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform' }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets Ambe Service Facilities apart in the facility management industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Trained Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                Our 150+ staff members undergo comprehensive training and certification programs to ensure consistent service excellence.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">24/7 Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Round-the-clock emergency support and responsive customer service to address your facility management needs anytime.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Local Employment Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We create job opportunities and support local communities while delivering professional facility management services.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                Industry-certified technicians and rigorous quality control processes ensure complete client satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Competitive Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Transparent pricing with no hidden costs, ensuring you get the best value for your facility management investment.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Background Verification</h3>
              <p className="text-gray-700 leading-relaxed">
                All our staff members undergo thorough background verification and security checks for your peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Mumbai's trusted facility management partner.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Our Company</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ambe Service Facilities was established with a clear mission: to revolutionize facility management in Mumbai and Maharashtra by combining skilled professionals with modern operational standards.
                </p>
                <p>
                  Starting as a small housekeeping service provider, we quickly recognized the need for comprehensive facility management solutions that go beyond basic cleaning services.
                </p>
                <p>
                  Today, we serve over 10 properties across Mumbai, from residential societies to corporate offices, delivering end-to-end facility management services with excellence and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-blue-600 mb-6">Key Milestones</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">2016</h5>
                      <p className="text-gray-600">Founded Ambe Service Facilities in Mumbai</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">2020</h5>
                      <p className="text-gray-600">Expanded services to include pest control and property management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">2022</h5>
                      <p className="text-gray-600">Reached 10+ properties serviced milestone</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">2024</h5>
                      <p className="text-gray-600">Achieved 98% client satisfaction rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality assurance, safety standards, and client satisfaction are at the heart of everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Training</h3>
              <p className="text-gray-600">Continuous skill development programs for all staff members</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">Rigorous quality assurance processes at every service level</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Standards</h3>
              <p className="text-gray-600">Adherence to highest safety protocols and industry standards</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">98% client satisfaction guarantee with responsive support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Orange background box with founder message (45% width) */}
            <motion.div 
              className="lg:col-span-5 bg-blue-600 rounded-2xl p-12 text-white min-h-[500px] flex flex-col justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">From Our Founder</h3>
              <p className="text-lg leading-relaxed mb-8">
                "At Ambe Service Facilities, we believe that exceptional facility management is built on trust, professionalism, and genuine care for our clients' properties. Our journey started with a simple vision: to provide Mumbai and Maharashtra with facility management services that exceed expectations. Today, we're proud to serve over 10 properties with our team of 150+ trained professionals, delivering quality services that make a real difference in how people live and work."
              </p>
              <div>
                <h4 className="text-2xl font-bold">Harishankar Thakur</h4>
                <p className="text-blue-100">Founder & Managing Director</p>
              </div>
            </motion.div>

            {/* Right - Founder photo (55% width) */}
            <motion.div 
              className="lg:col-span-7 order-first lg:order-last"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 p-6 rounded-2xl h-[600px] flex items-center justify-center overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Harishankar Thakur - Founder"
                    width={600}
                    height={600}
                    className="object-cover object-top rounded-xl w-full h-full grayscale transition-all duration-300"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}