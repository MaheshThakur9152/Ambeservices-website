import dynamic from 'next/dynamic';

import Header from '../components/Header';
import Hero from '../components/Hero';
const Statistics = dynamic(() => import('../components/Statistics'), { loading: () => <div /> });
const OurPeople = dynamic(() => import('../components/OurPeople'), { loading: () => <div /> });
const Testimonials = dynamic(() => import('../components/Testimonials'), { loading: () => <div /> });
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
        
        {/* Statistics Section */}
        <Statistics />
        
        {/* Why Ambe Service Section */}
        <WhyAmbeService />
        
        {/* Trusted by Leading Companies Section */}
        <TrustedBySection />
        
        {/* Our People, Our Strength Section */}
        <OurPeople />
        
        {/* Services Section */}
        <Services />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
