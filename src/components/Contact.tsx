"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Housekeeping',
    'Pest Control',
    'Tank Cleaning',
    'Catering & Pantry Management',
    'Lift Operators',
    'Property Management',
    'Storage Management',
    'Office Boy',
    'Car Cleaning',
    'Vehicle Inspection Pit Cleaning',
    'Civil & Concrete Management',
    'Facade Cleaning'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll contact you soon.');
      setFormData({ name: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to book a service? Contact us today for fast, reliable solutions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`} placeholder="Enter your full name" />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`} placeholder="Enter your phone number" />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange} className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}>
                  <option value="">Select a service</option>
                  {services.map((service) => (<option key={service} value={service}>{service}</option>))}
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`} placeholder="Describe your service requirements..." />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>

              {submitMessage && (<div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">{submitMessage}</div>)}
            </form>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 9619607537</p>
                <p className="text-gray-600">+91 7977018742</p>
                <p className="text-gray-600">022 4506 6566</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:contact@ambeservice.com" className="text-blue-600 hover:underline">contact@ambeservice.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600">Shop No. 49A, Ground Floor,<br />Pooja Enclave CHS Ltd, Ganesh Nagar,<br />Kandivali West, Mumbai 400067</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-blue-600" /></div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sunday: 9:00 AM - 6:00 PM</p>
                <p className="text-blue-600 font-medium mt-2">24/7 Emergency Services Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
