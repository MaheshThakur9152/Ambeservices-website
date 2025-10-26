"use client";

import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import WhyAmbeService from '../components/WhyAmbeService';
import TrustedBySection from '../components/TrustedBySection';
import OurPeople from '../components/OurPeople';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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
