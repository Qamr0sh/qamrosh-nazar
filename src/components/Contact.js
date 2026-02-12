'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (data) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n\n` +
      `Message:\n${data.message}`
    );

    const mailtoUrl = `mailto:qamrosh55@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoUrl;

    return { success: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage('Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitMessage('Opening your email client... Please send the email to complete your message.');
        // Don't reset form since user needs to send from their email client
      } else {
        setSubmitMessage('Unable to open email client. Please contact qamrosh55@gmail.com directly.');
      }
    } catch (error) {
      setSubmitMessage('Unable to open email client. Please contact qamrosh55@gmail.com directly.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background via-background/98 to-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base font-space-grotesk text-blue-500 font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-foreground/60 font-inter text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-6">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-foreground/70 font-inter leading-relaxed mb-8">
                Whether you need a mobile app, IoT solution, enterprise software, or creative design work,
                I&apos;m here to help bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-space-grotesk font-semibold text-foreground">Email</p>
                  <p className="text-sm text-foreground/60">qamrosh55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-space-grotesk font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-foreground/60">+966 56 982 9451</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-space-grotesk font-semibold text-foreground">Location</p>
                  <p className="text-sm text-foreground/60">Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/qamr0sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/linkedIn_icon.svg"
                      alt="LinkedIn"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/qamr0sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/instagram_icon.svg"
                      alt="Instagram"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100012883470553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/facebook_icon.svg"
                      alt="Facebook"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="https://www.pinterest.com/QamroshNazar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/Pinterest_icon.svg"
                      alt="Pinterest"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="https://discord.com/users/1098012603005009951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/discord_icon.svg"
                      alt="Discord"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="http://t.me/qamr0sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/telegram_icon.svg"
                      alt="Telegram"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
                <a
                  href="https://wa.me/966569829451?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 border border-white/10 hover:-translate-y-1"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/social_media_icon/whatsapp_icon.svg"
                      alt="WhatsApp"
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8">
            <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground/40 ${errors.name ? 'border-red-500' : 'border-foreground/20'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground/40 ${errors.email ? 'border-red-500' : 'border-foreground/20'
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground/40 ${errors.subject ? 'border-red-500' : 'border-foreground/20'
                    }`}
                  placeholder="Project Discussion"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder-foreground/40 resize-none ${errors.message ? 'border-red-500' : 'border-foreground/20'
                    }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('successfully')
                  ? 'bg-green-500/10 border border-green-500/20 text-green-600'
                  : 'bg-red-500/10 border border-red-500/20 text-red-500'
                  }`}>
                  <p className="text-sm">{submitMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 font-space-grotesk font-semibold rounded-lg transition-all duration-300 ${isSubmitting
                  ? 'bg-foreground/20 text-foreground/60 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
