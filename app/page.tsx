import PageLoader from '@/components/PageLoader';
import HomeContent from '@/components/HomeContent';

export const metadata = {
  title: 'Kanishka Thapliyal | Certified Dietician & Nutritionist',
  description: 'Expert dietician and nutritionist offering personalized nutrition plans, weight management, PCOS/thyroid support, pregnancy nutrition, and holistic wellness guidance.',
  keywords: 'dietician, nutritionist, nutrition consultant, diet plans, weight management, PCOS, thyroid, pregnancy nutrition, holistic wellness, meal planning',
  openGraph: {
    title: 'Kanishka Thapliyal | Certified Dietician & Nutritionist',
    description: 'Transform your health with personalized nutrition plans and holistic wellness guidance.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <PageLoader />
      <HomeContent />
    </>
  );
}
