import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Kanishka Thapliyal',
  description: 'Learn about Kanishka Thapliyal, certified dietician and nutritionist with B.Sc. in Home Science',
};

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero & Main Content Combined - Above the Fold */}
      <section className="py-16 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/holistic-balance.jpg"
                alt="Kanishka Thapliyal"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-5 order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
              <p className="text-sm text-primary font-medium">
                Certified Dietician & Nutritionist
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-2">Hello! I'm Kanishka</h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                I am a nutrition professional with a Bachelor's degree in Home Science (Nutrition and Dietetics).
                My work is rooted in evidence-based nutrition science and a deep belief that food is not just
                nourishment—it's a language of care, culture, and connection.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I believe in a holistic approach that goes beyond calorie counting. Every individual is unique,
                with different nutritional needs, lifestyle factors, and health goals. My mission is to create
                personalized nutrition plans that are sustainable, enjoyable, and effective.
              </p>

              <div className="flex gap-4 pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-[rgb(var(--border))] font-medium hover:bg-muted transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content - Below the Fold */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-16 max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With strong foundations in human physiology, diet therapy, food science, and community nutrition,
              my studies equipped me with both scientific understanding and practical skills to help others
              achieve optimal well-being.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're managing a health condition, seeking weight management support, navigating pregnancy
              and lactation, or simply wanting to improve your overall wellness, I'm here to guide you on your
              journey with compassion, expertise, and evidence-based strategies.
            </p>
          </div>

          {/* Philosophy */}
          <div className="card p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">My Philosophy</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              I believe nourishing your body starts with knowing yourself. Every person has unique nutritional needs
              shaped by lifestyle, culture, and emotions. My approach blends science with compassion—focusing on
              real foods, sustainable habits, and mindful choices.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Personalized Care',
                  description: 'Tailored nutrition plans that honor your unique needs',
                },
                {
                  title: 'Evidence-Based',
                  description: 'Grounded in scientific research and proven methods',
                },
                {
                  title: 'Holistic Approach',
                  description: 'Addressing body, mind, and lifestyle together',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
