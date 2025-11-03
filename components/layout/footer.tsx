"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled later with backend/CMS
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="bg-[#142337] text-white">
      {/* Main CTA Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4">
              Ready to engineer your next{" "}
              <span className="text-orange-500">29% growth?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Don&apos;t leave conversions to chance — let&apos;s fix your
              listing leaks today.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 py-4 px-8 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book My Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Form */}
          <div>
            <h3 className="text-2xl font-display mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your Amazon business..."
                ></textarea>
              </div>

              {/* Calendly Integration */}
              <div className="bg-white/5 border border-gray-600 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-3">
                  Or schedule a call directly:
                </p>
                <Link
                  href="https://calendly.com/merxpert/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                  Book via Calendly →
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Links & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-display mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audit"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Free Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-display mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <a
                    href="mailto:hello@merxpert.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    hello@merxpert.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300">
                    123 Amazon Street
                    <br />
                    Seattle, WA 98109
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Merxpert LLC © {new Date().getFullYear()} | Amazon Branding
              Experts
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
