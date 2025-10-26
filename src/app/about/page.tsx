"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const values = [
    {
      title: "Proactive",
      tagline: "Stay ahead of the game",
      description: "We anticipate challenges and opportunities, taking initiative to deliver solutions before problems arise."
    },
    {
      title: "Honest",
      tagline: "Transparency is the foundation",
      description: "We build trust through open communication, fair practices, and transparent business relationships."
    },
    {
      title: "Developing Relationships",
      tagline: "Make every interaction count",
      description: "We invest in long-term partnerships, ensuring every client interaction strengthens our mutual success."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/pexels-pixabay-302769.jpg"
            fill={true}
            priority={true}
            alt="About Us Background"
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              An entrepreneurial real estate platform-unifying development and services. At SILA, we believe real estate is more than structures, it's about the people, systems, and ideas that shape how we live and work. With a team of 30,000+ skilled professionals, a strong presence in key locations across India and the support of blue-chip private equity funds, we prioritize delivering exceptional services and projects to our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our people-first approach guides everything we do, ensuring exceptional service and meaningful relationships with every client.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
                style={{ borderRadius: '12px' }}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  {value.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Orange background box with founder message (45% width) */}
            <motion.div 
              className="lg:col-span-5 bg-orange-500 rounded-2xl p-12 text-white min-h-[500px] flex flex-col justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">From Our Founder</h3>
              <p className="text-lg leading-relaxed mb-8">
                "Our vision is to transform how people experience real estate and facility management. We're not just providing services – we're building lasting relationships and creating environments where communities thrive. Every project we undertake reflects our commitment to excellence and our belief in the power of innovation."
              </p>
              <div>
                <h4 className="text-2xl font-bold">Harishankar Thakur</h4>
                <p className="text-orange-100">Founder & Managing Director</p>
              </div>
            </motion.div>

            {/* Right - Founder photo (55% width) */}
            <motion.div 
              className="lg:col-span-7 order-first lg:order-last"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 p-6 rounded-2xl h-[600px] flex items-center justify-center overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Harishankar Thakur - Founder"
                    width={600}
                    height={600}
                    className="object-cover object-top rounded-xl w-full h-full"
                    quality={90}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}