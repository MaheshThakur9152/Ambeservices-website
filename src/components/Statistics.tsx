'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Statistics() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100+", label: "Properties Serviced" },
    { number: "50+", label: "Service Locations" }
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setIsPlaying(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setIsInView(true);
            setHasPlayed(true);
            // Ensure the browser starts fetching and play when possible
            try {
              // Instruct the browser to load resources sooner
              video.load();
            } catch (e) {
              /* ignore */
            }
            video.play().catch((error) => {
              console.warn('Video autoplay failed:', error);
            });
          }
        });
      },
      {
        threshold: 0.0, // Trigger immediately when any part is visible
        rootMargin: '200px' // Start loading well before entering viewport
      }
    );

    video.addEventListener('playing', onPlaying);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('playing', onPlaying);
    };
  }, [hasPlayed]);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          
          {/* Right: Video - Larger (First on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full order-1 lg:order-2"
          >
            <div className="h-48 sm:h-64 md:h-80 lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                // preload more aggressively so the first frame is available quickly
                preload={isInView ? "auto" : "metadata"}
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: isPlaying ? 1 : 0 }}
                poster="https://res.cloudinary.com/di9eeahdy/image/upload/f_auto,q_auto,w_1600/v1767581872/hero-1_l5ssox.webp"
                onError={(e) => console.error('Video failed to load:', e)}
              >
                <source src="https://res.cloudinary.com/di9eeahdy/video/upload/f_auto,q_auto,w_1280/v1767580923/ambe-service-video_lx4faz.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
          
          {/* Left: Text Content - Reduced Size (Second on mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5 order-2 lg:order-1"
          >
            {/* Heading - Smaller */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Quality-driven solutions.<br />
              Customer-first approach.<br />
              Proven reliability.
            </h2>
            
            {/* Description - Smaller */}
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              At Ambe Service, we deliver comprehensive facility management across residential and commercial properties – combining experienced professionals, dedicated service, and customer-centric operations to keep your spaces running smoothly.
            </p>
            
            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-t-2 border-blue-600 pt-3"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1 font-serif">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-900 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}