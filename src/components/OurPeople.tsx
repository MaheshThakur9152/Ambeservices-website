'use client';

import { motion } from 'framer-motion';

export default function OurPeople() {
  const peopleFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "150+ Trained Staff",
      description: "Professionally trained team members ensuring quality service delivery"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Certified Professionals",
      description: "Industry-certified technicians with verified credentials and expertise"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Local Employment Focus",
      description: "Creating job opportunities and supporting local communities"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Continuous Training Programs",
      description: "Regular upskilling and development initiatives for our workforce"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-3 border-b-2 border-gray-900 pb-3 inline-block">
            Our People, Our Strength
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-600 mt-4">
            Trained, certified and empowered. Our workforce is the backbone of our delivery model.
          </p>
        </div>
        
        {/* 2x2 Grid with Consistent Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {peopleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center mb-3 flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}