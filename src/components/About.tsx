"use client";

import Image from 'next/image';
import { Users, Building2, Award, CheckCircle2, Target, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: "150+ Trained Professionals",
      description: "Our skilled workforce undergoes comprehensive training and certification to deliver exceptional facility management services with expertise and professionalism."
    },
    {
      icon: <Building2 size={24} />,
      title: "Comprehensive Solutions",
      description: "From housekeeping to property management, we offer end-to-end facility services tailored to meet diverse client needs across residential and commercial sectors."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Assurance",
      description: "Industry-certified technicians and rigorous quality control processes ensure consistent service excellence and complete client satisfaction."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Local Employment Focus",
      description: "We create job opportunities and support local communities while delivering professional facility management services across Mumbai and Maharashtra."
    }
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Our Mission",
      description: "To revolutionize facility management by combining trained professionals, modern technology, and client-focused service delivery, ensuring safe, clean, and well-maintained properties."
    },
    {
      icon: <Heart size={32} />,
      title: "Our Vision",
      description: "To become India's most trusted facility management partner, recognized for operational excellence, workforce development, and creating sustainable value for clients and communities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Ambe Service Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional facility management and comprehensive property services across India
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence in Facility Management
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Ambe Service Facilities is a leading facility management company dedicated to delivering exceptional property maintenance and management solutions. With a strong presence in Mumbai and across Maharashtra, we specialize in comprehensive services ranging from housekeeping and pest control to property management and technical maintenance.
              </p>
              
              <p>
                Our foundation is built on three core principles: <span className="font-semibold text-gray-900">skilled workforce</span>, <span className="font-semibold text-gray-900">operational excellence</span>, and <span className="font-semibold text-gray-900">client satisfaction</span>. Every member of our 150+ strong team undergoes rigorous training and certification to ensure consistent quality across all service touchpoints.
              </p>

              <p>
                We serve diverse clients including residential societies, commercial properties, industrial facilities, and corporate offices. Our integrated approach combines traditional facility management expertise with modern operational standards, ensuring properties remain safe, clean, and efficiently maintained.
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Ambe Service Facilities?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive service portfolio covering all facility management needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professionally trained and background-verified workforce</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Industry-certified technicians with specialized expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">24/7 emergency support and responsive customer service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Column - Smaller */}
          <div className="relative">
            <div className="relative h-72 lg:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-lg font-semibold">
                Company / Team Image
                <br />
                (Replace with actual photo)
              </div>
              
              <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-gray-600 text-sm">Properties Serviced</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Trained Staff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Properties Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
