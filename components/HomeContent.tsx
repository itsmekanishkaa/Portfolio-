'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Immediately hide content on mount
    setIsMounted(true);

    // Show content after loader completes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until mounted (prevents SSR flash)
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }} />;
  }

  return (
    <div className={`transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`} style={{ willChange: 'opacity, transform' }}>
      {/* Hero Section - Modern Minimal */}
      <section className="relative min-h-screen sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Nourishing
                <br />
                <span className="text-primary">the Body,</span>
                <br />
                Empowering
                <br />
                <span className="text-primary">the Soul</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Certified dietician and nutritionist helping you discover the healing power of food through
                personalized nutrition plans and holistic wellness.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Book Consultation
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-[rgb(var(--border))] font-medium hover:bg-muted transition-colors text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] animate-fade-in delay-200 order-first lg:order-last">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-wellness.jpg"
                  alt="Healthy nutrition"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive nutrition services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Plans',
                description: 'Custom nutrition strategies designed for your goals',
                icon: '📋',
              },
              {
                title: 'Weight Management',
                description: 'Sustainable approaches to healthy weight',
                icon: '⚖️',
              },
              {
                title: 'Holistic Wellness',
                description: 'Complete mind-body-spirit integration',
                icon: '🌱',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your journey towards balanced nutrition and holistic wellness today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
