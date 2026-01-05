'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Vijay Kulkarni',
      company: 'Thakur Builders',
      position: 'Engineer',
      rating: 4.2,
      review: 'Ambe Service has been exceptional in managing our residential properties. Their housekeeping and maintenance teams are professional, reliable, and always responsive.'
    },
    {
      name: 'Santosh Singh',
      company: 'Thakur Builders',
      position: 'Engineer',
      rating: 4.2,
      review: 'Outstanding facility management services! Their comprehensive approach to property maintenance has streamlined our operations significantly. The 24/7 support and trained staff make them invaluable.'
    },
    {
      name: 'Vikram Pille',
      company: 'Minerva',
      position: 'Engineer',
      rating: 4.2,
      review: 'We\'ve been working with Ambe Service for over a year now, and their attention to detail is remarkable. From lift operations to pest control, every service is delivered with precision and care.'
    },
    {
      name: 'Vipin Singh',
      company: 'BP Infra',
      position: 'Owner',
      rating: 4.2,
      review: 'Ambe Service transformed our property management operations. Their trained professionals handle everything from facade cleaning to tank maintenance with expertise. Cost-effective and reliable.'
    },
    {
      name: 'Suraj Pardeshi',
      company: 'Acme',
      position: 'Engineer',
      rating: 4.2,
      review: 'Excellent service quality across all touchpoints. Their facility management solutions have helped us maintain high standards while reducing operational hassles. Highly professional team.'
    }
  ];

  // Auto-loop testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const fullStars = Math.floor(currentTestimonial.rating);
  const hasHalfStar = currentTestimonial.rating % 1 !== 0;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div>
            <p className="font-sans text-sm text-gray-600 mb-4">Hear it from our clients</p>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-b-2 border-gray-900 pb-4 inline-block">
              Over <span className="text-orange-500">100+</span> clients have trusted us with their Facility Management needs
            </h2>
            
            <p className="font-sans text-base text-gray-700 leading-relaxed mb-6 italic">
              "{currentTestimonial.review}"
            </p>
            
            <div className="mb-4">
              <h4 className="font-serif text-lg font-bold text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="font-sans text-sm text-gray-600">
                {currentTestimonial.company}, {currentTestimonial.position}
              </p>
            </div>
            
            {/* Removed company logo */}
            
            {/* Dot Navigation */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right: Handshake Image with Reviews Badge */}
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/di9eeahdy/image/upload/v1767582755/handshake_m5v6dh.webp"
              alt="Customer testimonial"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full"
            />
            
            {/* Reviews Badge */}
            <div className="absolute top-6 right-6 bg-gray-800 text-white rounded-2xl p-4 shadow-2xl">
              <div className="text-2xl font-bold mb-1">4.2+</div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(fullStars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {hasHalfStar && (
                  <div className="relative">
                    <Star className="w-4 h-4 text-gray-300" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0" style={{clipPath: 'inset(0 50% 0 0)'}} />
                  </div>
                )}
              </div>
              <div className="text-sm font-semibold">100+ Reviews</div>
              <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                All Reviews
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}