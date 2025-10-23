'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[var(--sage-green)] to-[var(--deep-sage)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg md:text-xl font-bold">🌿</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-xl font-bold" style={{ color: 'var(--deep-sage)' }}>
                Kanishka Thapliyal
              </span>
              <span className="text-[10px] md:text-xs" style={{ color: 'var(--sage-green)' }}>
                Dietician & Nutritionist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative text-base font-medium transition-colors duration-300 hover:opacity-80 group"
                style={{ color: 'var(--charcoal)' }}
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--sage-green), var(--deep-sage))',
              }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{
              color: 'var(--deep-sage)',
              backgroundColor: isMobileMenuOpen ? 'var(--mint-green)' : 'transparent',
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 animate-fade-in"
            style={{ backgroundColor: 'var(--warm-cream)' }}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-3 px-4 text-base font-medium transition-colors duration-300 hover:bg-white/50 rounded-lg"
                style={{ color: 'var(--charcoal)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mt-4 mx-4 py-3 px-6 text-center rounded-full font-medium text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--sage-green), var(--deep-sage))',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
