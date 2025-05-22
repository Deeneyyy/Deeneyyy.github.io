
import React, { useState } from 'react';
import Section from './Section';
import { ContactFormData } from '../types';
import { CONTACT_EMAIL } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);
    setIsSuccess(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demonstration, always succeed. In a real app, you'd handle errors.
    // For example, using formspree.io or a backend.
    if (formData.name && formData.email && formData.message) {
        setFormMessage(`Thank you, ${formData.name}! Your message has been "sent". I'll be in touch soon via ${CONTACT_EMAIL} (if this were a real form!).`);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
        setFormMessage('Please fill out all fields.');
        setIsSuccess(false);
    }
    setIsSubmitting(false);
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-300 mb-8 text-lg">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and collaborations. You can also email me directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:underline">{CONTACT_EMAIL}</a>.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-700 p-8 rounded-xl shadow-2xl">
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-600 text-gray-100 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-600 text-gray-100 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-gray-600 text-gray-100 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {formMessage && (
          <p className={`mt-6 text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
            {formMessage}
          </p>
        )}
      </div>
    </Section>
  );
};

export default ContactSection;
