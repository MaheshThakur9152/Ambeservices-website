import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { src: '/logos/ajmera-realty-seeklogo.png', alt: 'Ajmera Realty' },
  { src: '/logos/AMSlogo.svg', alt: 'AMS' },
  { src: '/logos/arshiya logo_20160617141033.png', alt: 'Arshiya' },
  { src: '/logos/Bp infra.webp', alt: 'BP Infra' },
  { src: '/logos/Ed.jpg', alt: 'EPC' },
  { src: '/logos/Febal Casa_idMZe6I0IW_0.png', alt: 'Febal Casa' },
  { src: '/logos/Kosmos.png', alt: 'Kosmos' },
  { src: '/logos/logonew.png', alt: 'Ruparel' },
  { src: '/logos/lokhandwala-kataria-construction-18236-4700.avif', alt: 'Lokhandwala Kataria' },
  { src: '/logos/Minerva.png', alt: 'Minerva' },
  { src: '/logos/piramal-realty-logo-png_seeklogo-613311.png', alt: 'Piramal Realty' },
  { src: '/logos/Sanjay-Puri-5.jpg', alt: 'Sanjay Puri' },
  { src: '/logos/Shapoorji_Pallonji_Group_logo.svg.png', alt: 'Shapoorji Pallonji' },
];

export default function TrustedBySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const isMobile = window.innerWidth < 768;
    const logoWidth = isMobile ? 80 : 128;
    const gap = isMobile ? 24 : 48;
    const setWidth = logos.length * (logoWidth + gap) - gap;
    const speed = isMobile ? 1 : 2; // Pixels per frame for smooth scroll

    let position = 0;

    const animate = () => {
      position += speed;
      if (position >= setWidth) position -= setWidth;
      scrollElement.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // No need to cancel since it's infinite
    };
  }, []);

  return (
    <section className="py-8 md:py-12 bg-white border-t border-gray-100" aria-label="Trusted Companies">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
        </div>
        
        <div className="relative overflow-hidden" role="region" aria-live="off">
          <div ref={scrollRef} className="flex gap-6 md:gap-12">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain w-20 h-10 md:w-32 md:h-16"
                  sizes="(max-width: 768px) 80px, 128px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
