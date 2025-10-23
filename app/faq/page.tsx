'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is holistic nutrition?',
      answer: 'Holistic nutrition focuses on the whole person — body, mind, and spirit — rather than just counting calories. It considers your unique biochemistry, lifestyle, and emotional well-being to create a personalized approach that works for you.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary based on individual goals. Many clients notice improvements in energy levels and digestion within 2-4 weeks. For long-term goals like weight management or managing health conditions, significant changes typically appear within 2-3 months with consistent effort.',
    },
    {
      question: 'Do I need to follow a strict diet?',
      answer: 'Not at all! I believe in balance and sustainability, not deprivation. We focus on adding nourishing foods and making mindful choices rather than strict restrictions. The goal is to create a healthy relationship with food that you can maintain for life.',
    },
    {
      question: 'What does a consultation include?',
      answer: 'Your first consultation includes a comprehensive health assessment, detailed discussion of your goals and challenges, personalized nutrition plan tailored to your lifestyle, meal suggestions and recipes, and a follow-up schedule to track progress and make adjustments.',
    },
    {
      question: 'Are sessions available online?',
      answer: 'Yes! I offer both online and in-person consultations for maximum flexibility. Online sessions are conducted via video call, making it convenient for you to get expert guidance from the comfort of your home.',
    },
    {
      question: 'Can you help with specific health conditions?',
      answer: 'Yes, I work with various health conditions including PCOS, thyroid disorders, diabetes, digestive issues, and more. I create evidence-based nutrition plans that complement your medical treatment and help manage symptoms naturally.',
    },
    {
      question: 'Do you provide meal plans?',
      answer: 'Absolutely! I provide personalized meal plans based on your preferences, lifestyle, and nutritional needs. The plans include practical, easy-to-follow recipes using real, whole foods that fit into your daily routine.',
    },
    {
      question: 'How often do I need follow-up sessions?',
      answer: 'Follow-up frequency depends on your goals. Typically, I recommend bi-weekly or monthly check-ins initially to monitor progress and make necessary adjustments. As you become more confident, we can reduce the frequency.',
    },
    {
      question: 'What is your approach to weight management?',
      answer: 'My approach to weight management is holistic and sustainable. Rather than focusing solely on calories, I address underlying factors like metabolism, hormonal balance, stress, and sleep. The goal is healthy, gradual weight loss that you can maintain long-term without feeling deprived.',
    },
    {
      question: 'Do you work with pregnant and lactating mothers?',
      answer: 'Yes! I specialize in pregnancy and lactation nutrition, providing guidance on meeting increased nutritional needs, managing pregnancy symptoms, and supporting optimal milk production while ensuring both mother and baby thrive.',
    },
  ];

  return (
    <div className="page-transition">
      <section className="py-16 min-h-[85vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Common questions about nutrition and wellness
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
