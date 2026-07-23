'use client';

import { useState } from 'react';

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
    const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n\n` +
      `Message:\n${data.message}`
    );

    const mailtoUrl = `mailto:qamrosh55@gmail.com?subject=${subject}&body=${body}`;
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

  const engagementPillars = [
    'Mobile Application Development (Flutter, Dart, Clean Architecture)',
    'IoT System Prototyping & Hardware Architecture (ESP32, Sensors, C++)',
    'Technical Consultations & Software Architecture Reviews',
  ];

  return (
    <section id="contact" className="relative w-full py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-white" />
            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-white">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-space-grotesk font-extrabold text-white leading-tight mb-4">
            Let&apos;s Build Something Solid
          </h2>

          <p className="text-slate-400 font-inter text-base leading-relaxed">
            Have a project opportunity, architectural inquiry, or software proposal? Drop me a line below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Engagement Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="exec-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <div>
                <p className="text-xs font-space-grotesk font-semibold text-slate-500 uppercase tracking-wider">Direct Email</p>
                <p className="font-space-grotesk font-bold text-base text-white mt-0.5">qamrosh55@gmail.com</p>
              </div>
            </div>

            <div className="exec-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-xl">
                💬
              </div>
              <div>
                <p className="text-xs font-space-grotesk font-semibold text-slate-500 uppercase tracking-wider">WhatsApp &amp; Direct Phone</p>
                <p className="font-space-grotesk font-bold text-base text-white mt-0.5">+92 316 8661 932</p>
              </div>
            </div>

            <div className="exec-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-xl">
                📍
              </div>
              <div>
                <p className="text-xs font-space-grotesk font-semibold text-slate-500 uppercase tracking-wider">Base Location</p>
                <p className="font-space-grotesk font-bold text-base text-white mt-0.5">Kotli AJK, Pakistan</p>
              </div>
            </div>

            {/* Engagement Scope List */}
            <div className="exec-card p-6 space-y-3">
              <p className="font-space-grotesk font-bold text-xs text-white uppercase tracking-wider">
                Collaboration Scope
              </p>
              <div className="space-y-2">
                {engagementPillars.map((item, index) => (
                  <div key={index} className="list-item-pro">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="exec-card p-8">
              <h3 className="text-xl font-space-grotesk font-bold text-white mb-6">
                Send Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-space-grotesk font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors text-sm font-inter"
                    />
                    {errors.name && <p className="text-rose-400 text-xs mt-1 font-inter">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-space-grotesk font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors text-sm font-inter"
                    />
                    {errors.email && <p className="text-rose-400 text-xs mt-1 font-inter">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-space-grotesk font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Flutter App Inquiry / IoT Architecture"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors text-sm font-inter"
                  />
                  {errors.subject && <p className="text-rose-400 text-xs mt-1 font-inter">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-space-grotesk font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, scope, timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors text-sm font-inter resize-none"
                  />
                  {errors.message && <p className="text-rose-400 text-xs mt-1 font-inter">{errors.message}</p>}
                </div>

                {submitMessage && (
                  <p className="text-xs font-inter text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-lg">
                    {submitMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-space-grotesk font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 cursor-pointer shadow-md"
                >
                  {isSubmitting ? 'Preparing Email...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
