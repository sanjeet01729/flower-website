import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    /* Simulate API call */
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (formData.name && formData.email && formData.message) {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitMessage('Please fill in all fields.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-violet-50 to-pink-50 p-8 rounded-3xl shadow-xl shadow-violet-100">
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Have a question or just want to share your love for flowers? We'd love to hear from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 pl-12 rounded-xl border-2 border-violet-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  required
                  disabled={isSubmitting}
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-violet-400" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 pl-12 rounded-xl border-2 border-violet-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200 text-gray-800 placeholder-gray-500"
                  required
                  disabled={isSubmitting}
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-violet-400" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border-2 border-violet-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200 text-gray-800 placeholder-gray-500"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>
            {submitMessage && (
              <p className={`mt-4 text-center font-medium ${submitMessage.includes('Thank you') ? 'text-emerald-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
