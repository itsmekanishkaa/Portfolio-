import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ModernNav from "@/components/ModernNav";
import ModernFooter from "@/components/ModernFooter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kanishka Thapliyal - Certified Dietician & Nutritionist | Transform Your Health",
    template: "%s | Kanishka Thapliyal"
  },
  description: "Transform your health with Kanishka Thapliyal, certified dietician & nutritionist with B.Sc. in Home Science. Expert in personalized nutrition, weight management, PCOS, thyroid, pregnancy nutrition & holistic wellness. Book consultation now!",
  keywords: [
    "dietician near me",
    "nutritionist online",
    "Kanishka Thapliyal dietician",
    "certified nutritionist",
    "personalized diet plans",
    "weight management program",
    "pregnancy nutrition specialist",
    "lactation nutrition consultant",
    "holistic wellness coach",
    "mindful eating counseling",
    "nutrition counseling online",
    "B.Sc Home Science nutritionist",
    "PCOS nutrition expert",
    "thyroid diet specialist",
    "meal planning service",
    "nutrition consultant India",
    "virtual dietician consultation",
    "women's health nutrition",
    "hormonal balance diet",
    "evidence-based nutrition",
  ],
  authors: [{ name: "Kanishka Thapliyal", url: "https://linktr.ee/itsmekanishka" }],
  creator: "Kanishka Thapliyal",
  publisher: "Kanishka Thapliyal",
  metadataBase: new URL('https://kanishkathapliyal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kanishka Thapliyal | Certified Dietician & Nutritionist",
    description: "Nourishing the Body, Empowering the Soul. Expert nutrition services for optimal health and wellness. Book your personalized consultation today!",
    url: "https://kanishkathapliyal.com",
    type: "website",
    locale: "en_US",
    siteName: "Kanishka Thapliyal Nutrition & Wellness",
    images: [
      {
        url: '/images/hero-wellness.jpg',
        width: 1200,
        height: 630,
        alt: 'Kanishka Thapliyal - Certified Dietician & Nutritionist',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishka Thapliyal | Certified Dietician & Nutritionist",
    description: "Transform your health with expert nutrition services. Personalized diet plans, weight management & holistic wellness.",
    images: ['/images/hero-wellness.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Health & Wellness',
  classification: 'Nutrition & Dietetics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            window.addEventListener('beforeunload', () => {
              window.scrollTo(0, 0);
            });
            // Prevent content flash - hide body initially
            document.documentElement.classList.add('loading');
          `
        }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <ModernNav />
          <main className="flex-1 pt-14 sm:pt-16">{children}</main>
          <ModernFooter />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
