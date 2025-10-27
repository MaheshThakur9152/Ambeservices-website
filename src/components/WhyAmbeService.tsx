"use client";

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

const WhyAmbeService = () => {
  const usps = [
    {
      number: "01",
      title: "All-in-One Facility Solutions",
      description: "From housekeeping to property management, we offer 12+ specialized services under one roof. No need for multiple vendors—we handle everything seamlessly."
    },
    {
      number: "02",
      title: "Always Available When You Need Us",
      description: "Round-the-clock availability for urgent facility needs. Our dedicated emergency response team ensures your operations never face unexpected disruptions."
    },
    {
      number: "03",
      title: "Expert Staff You Can Trust",
      description: "Our team undergoes rigorous training and certification programs. Every service is delivered by qualified professionals who prioritize quality and safety."
    },
    {
      number: "04",
      title: "Tailored to Your Unique Needs",
      description: "We don't believe in one-size-fits-all solutions. Our flexible service packages are designed specifically for your property type, size, and requirements."
    },
    {
      number: "05",
      title: "Smart Facility Operations",
      description: "Advanced scheduling, real-time tracking, and digital reporting systems ensure transparent, efficient service delivery with complete visibility."
    },
    {
      number: "06",
      title: "Premium Quality, Fair Pricing",
      description: "Competitive rates without compromising on service quality. We optimize resources to deliver maximum value while maintaining the highest standards."
    }
  ];

  return (
    <section id="why-ambe-service" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Ambe Service?
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive facility management solutions with a commitment to quality, reliability, and customer satisfaction.
          </p>
        </motion.div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-blue-500 transition-all duration-300 border-2 border-gray-200 bg-white p-6 h-full hover:shadow-lg">
                <div className="flex flex-col gap-4">
                  <div className="font-serif text-4xl font-bold text-blue-600 opacity-50">
                    {usp.number}.
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                      {usp.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmbeService;