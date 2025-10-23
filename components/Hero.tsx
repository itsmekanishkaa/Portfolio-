'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Organic Background Shapes */}
      <div
        className="organic-shape w-96 h-96 top-10 -left-20 hidden md:block"
        style={{ backgroundColor: 'var(--mint-green)' }}
      />
      <div
        className="organic-shape w-80 h-80 bottom-20 -right-10 hidden md:block"
        style={{ backgroundColor: 'var(--dusty-rose)' }}
      />
      <div
        className="organic-shape w-72 h-72 top-1/3 right-1/4 hidden lg:block"
        style={{ backgroundColor: 'var(--soft-lavender)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-4 md:space-y-6 px-2 md:px-0">
            <div className="inline-block animate-fade-in w-auto">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'var(--mint-green)',
                  color: 'var(--deep-sage)',
                }}
              >
                B.Sc. Home Science | Nutrition & Dietetics
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
              <span style={{ color: 'var(--charcoal)' }}>Nourishing the Body,</span>
              <br />
              <span className="gradient-text">Empowering the Soul</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-in-up delay-200"
              style={{ color: 'var(--charcoal)', opacity: 0.8 }}
            >
              Welcome to my space dedicated to health, balance, and mindful eating. As a qualified dietician and nutritionist,
              I am passionate about helping individuals discover the power of food as a healing tool. My mission is to support
              your journey toward a well-nourished life—where good nutrition feels natural, personalized, and joyful.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-center"
                style={{
                  background: 'linear-gradient(135deg, var(--sage-green), var(--deep-sage))',
                }}
              >
                Start Your Journey
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-center"
                style={{
                  borderColor: 'var(--sage-green)',
                  color: 'var(--deep-sage)',
                  backgroundColor: 'transparent',
                }}
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-8 justify-center md:justify-start animate-fade-in delay-400">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">✓</span>
                <span className="text-sm md:text-base" style={{ color: 'var(--charcoal)' }}>Personalized Diet Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">✓</span>
                <span className="text-sm md:text-base" style={{ color: 'var(--charcoal)' }}>Mindful Eating Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">✓</span>
                <span className="text-sm md:text-base" style={{ color: 'var(--charcoal)' }}>Holistic Wellness</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in delay-200 mt-8 md:mt-0 max-w-lg mx-auto md:max-w-none">
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src="/images/hero-wellness.jpg"
                alt="Healthy wellness lifestyle with nutritious food"
                width={600}
                height={700}
                className="w-full h-auto object-cover aspect-[4/5]"
                priority
              />

              {/* Floating Card */}
              <div
                className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass rounded-xl md:rounded-2xl p-4 md:p-6 animate-float"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                    style={{ backgroundColor: 'var(--mint-green)' }}
                  >
                    🌱
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base md:text-lg"
                      style={{ color: 'var(--deep-sage)' }}
                    >
                      Natural Healing
                    </h3>
                    <p
                      className="text-xs md:text-sm"
                      style={{ color: 'var(--charcoal)', opacity: 0.8 }}
                    >
                      Nourish your body, mind & soul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 rounded-full animate-float hidden sm:block"
              style={{ backgroundColor: 'var(--dusty-rose)', opacity: 0.6 }}
            />
            <div
              className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-14 h-14 md:w-20 md:h-20 rounded-full animate-float delay-200 hidden sm:block"
              style={{ backgroundColor: 'var(--soft-lavender)', opacity: 0.6 }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
          <Link href="#about" className="flex flex-col items-center gap-2">
            <span className="text-sm" style={{ color: 'var(--sage-green)' }}>
              Discover More
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: 'var(--sage-green)' }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
