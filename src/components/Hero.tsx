"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/hero-1.jpg', '/hero-3.jpg'];
  
  // Individual positioning for each image to show team members properly
  const imagePositions: { [key: string]: string } = {
    '/hero-1.jpg': 'center 25%', // Works fine, keep as is
    '/hero-3.jpg': 'center 35%', // Adjust for Photo-3
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Auto-rotating Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: currentIndex === index ? 1 : 0,
            zIndex: currentIndex === index ? 1 : 0
          }}
        >
          <Image
            src={image}
            fill={true}
            priority={index === 0}
            alt={`Facility Management ${index + 1}`}
            className="object-cover"
            style={{
              objectPosition: imagePositions[image]
            }}
            quality={90}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Content - Bottom left aligned */}
      <div className="absolute inset-0 z-10 flex items-end pb-12">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
          <div className="max-w-3xl">
            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="#services">
                <motion.button 
                  className="bg-white text-black px-8 py-3 rounded-full font-sans font-medium hover:bg-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Facility Management
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;