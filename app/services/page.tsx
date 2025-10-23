import Link from 'next/link';

export const metadata = {
  title: 'Services | Kanishka Thapliyal',
  description: 'Personalized nutrition services including diet plans, weight management, and holistic wellness programs',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Personalized Diet Plans',
      description: 'Custom-tailored nutrition strategies designed around your unique health goals, lifestyle, and preferences.',
      features: ['Tailored to Goals', 'Lifestyle Fit', 'Natural & Practical', 'Ongoing Support'],
    },
    {
      title: 'Weight Management',
      description: 'Nutrition counseling for healthy, sustainable weight management without deprivation or restrictive diets.',
      features: ['Sustainable Methods', 'No Crash Diets', 'Balanced Approach', 'Long-term Results'],
    },
    {
      title: 'Pregnancy & Lactation Nutrition',
      description: 'Specialized nutrition support for expecting and nursing mothers to ensure optimal health for mother and baby.',
      features: ['Maternal Health', 'Baby Development', 'Safe & Nourishing', 'Expert Guidance'],
    },
    {
      title: 'Holistic Wellness Programs',
      description: 'Comprehensive programs addressing digestion, hormonal balance, energy levels, and overall vitality.',
      features: ['Digestive Health', 'Hormonal Balance', 'Energy Boost', 'Complete Wellness'],
    },
    {
      title: 'Lifestyle & Mindful Eating',
      description: 'Guidance on building sustainable healthy habits, mindful food choices, and positive relationship with food.',
      features: ['Mindful Practices', 'Sustainable Habits', 'No Guilt or Shame', 'Joyful Eating'],
    },
    {
      title: 'Meal Planning & Ideas',
      description: 'Easy, practical meal ideas and planning guidance that fit seamlessly into your busy life.',
      features: ['Simple Recipes', 'Busy-Life Friendly', 'Real Foods', 'Cultural Sensitivity'],
    },
  ];

  return (
    <div className="page-transition">
      <section className="py-16 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive nutrition services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              Book a Service
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
