"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Bug, 
  Waves, 
  Coffee,
  Building2,
  Home,
  Package,
  FileText,
  Car,
  Wrench,
  HardHat,
  Building,
  ChevronDown
} from 'lucide-react';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const allServices = [
    {
      icon: Sparkles,
      title: "Housekeeping",
      description: "Immerse yourself in cleanliness with our Housekeeping Solutions. Our dedicated team ensures that your spaces are not just clean but meticulously cared for.",
      image: "/services/Gallery-1.jpg"
    },
    {
      icon: Bug,
      title: "Pest Control",
      description: "Defend your space against unwanted guests with our Pest Control services. Our experts employ advanced methods to identify, eliminate, and prevent pest infestations.",
      image: "/services/pest-control.jpg"
    },
    {
      icon: Waves,
      title: "Tank Cleaning",
      description: "Ensure the purity and safety of your water supply. Our thorough cleaning and disinfection processes adhere to stringent standards, promoting safety and well-being.",
      image: "/services/tank-cleaning.jpg"
    },
    {
      icon: Coffee,
      title: "Catering & Pantry Management",
      description: "Experience seamless workplace operations with our Catering and Pantry Management. From organizing supplies to offering essential assistance.",
      image: "/services/pantry-boy.jpg?v=3"
    },
    {
      icon: Building2,
      title: "Lift Operators",
      description: "Ensure the efficient operation of your lifts with our skilled Lift Operators. Our professionals are trained to handle lift operations, prioritizing safety.",
      image: "/services/lift-operator.jpg?v=3"
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Preserving and enhancing property value. Our property management services encompass meticulous oversight, from routine maintenance to strategic enhancements.",
      image: "/services/property-management.jpg?v=3"
    },
    {
      icon: Package,
      title: "Storage Management",
      description: "Optimize your inventory and streamline operations with our Store Management services. Our team ensures efficient management of your store.",
      image: "/services/storage-management.jpg?v=3"
    },
    {
      icon: FileText,
      title: "Office Boy",
      description: "Enhance workplace efficiency with our Office Boy services. From organizing workspaces to handling routine tasks, contributing to seamless operations.",
      image: "/services/office-boy.jpg?v=3"
    },
    {
      icon: Car,
      title: "Car Cleaning",
      description: "Give your vehicles the care they deserve with our Car Cleaning services. We go beyond the surface to ensure your cars shine inside and out.",
      image: "/services/car-cleaning.jpg?v=3"
    },
    {
      icon: Wrench,
      title: "Vehicle Inspection Pit Cleaning",
      description: "Revitalize your vehicle's undercarriage with Ambe Services Pit Cleaning. Our meticulous process removes grime and debris.",
      image: "/services/pit-cleaning.jpg"
    },
    {
      icon: HardHat,
      title: "Civil & Concrete Management",
      description: "Undertake construction projects with confidence using our Civil and Concrete Assistant Managers. Our experts provide assistance in managing projects.",
      image: "/services/civil.jpg?v=3"
    },
    {
      icon: Building,
      title: "Facade Cleaning",
      description: "Make a lasting impression with our Facade Cleaning services. Our specialized cleaning techniques enhance the aesthetics and longevity of your building's facade.",
      image: "/services/facade-cleaning.jpg?v=3"
    }
  ];

  const visibleServices = showAllServices ? allServices : allServices.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Provide Best Service
          </h2>
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive facility management solutions tailored to meet all your property and operational needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Service Image with enhanced positioning */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      service.title === 'Car Cleaning' ? 'object-center' :
                      service.title === 'Facade Cleaning' ? 'object-top' :
                      service.title === 'Office Boy' ? 'object-center' :
                      'object-center'
                    }`}
                    style={{
                      objectPosition: service.title === 'Facade Cleaning' ? 'center 30%' : 'center'
                    }}
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowAllServices(!showAllServices)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-sans font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllServices ? 'Show Less' : 'View More Services'}
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;