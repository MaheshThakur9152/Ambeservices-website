import dynamic from 'next/dynamic';

import Header from '../components/Header';
import Hero from '../components/Hero';
import LazySections from '../components/LazySections';
import WhyAmbeService from '../components/WhyAmbeService';
import TrustedBySection from '../components/TrustedBySection';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Lazy-loaded client-only sections (Statistics, OurPeople, Testimonials) */}
        <LazySections />
        
        {/* Why Ambe Service Section */}
        <WhyAmbeService />
        
        {/* Trusted by Leading Companies Section */}
        <TrustedBySection />
        
        {/* Services Section */}
        <Services />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
