import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ModernNav from "@/components/ModernNav";
import ModernFooter from "@/components/ModernFooter";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kanishka Thapliyal - Nutrition & Wellness",
    template: "%s | Kanishka"
  },
  description: "Expert dietician and nutritionist with B.Sc. in Home Science (Nutrition & Dietetics). Personalized nutrition plans, weight management, PCOS/thyroid support, pregnancy nutrition, and holistic wellness guidance.",
  keywords: [
    "dietician",
    "nutritionist",
    "Kanishka Thapliyal",
    "personalized diet plans",
    "weight management",
    "pregnancy nutrition",
    "lactation nutrition",
    "holistic wellness",
    "mindful eating",
    "nutrition counseling",
    "B.Sc Home Science",
    "PCOS nutrition",
    "thyroid diet",
    "meal planning",
    "nutrition consultant",
  ],
  authors: [{ name: "Kanishka Thapliyal" }],
  creator: "Kanishka Thapliyal",
  publisher: "Kanishka Thapliyal",
  metadataBase: new URL('https://kanishkathapliyal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kanishka Thapliyal | Certified Dietician & Nutritionist",
    description: "Nourishing the Body, Empowering the Soul. Expert nutrition services for optimal health and wellness.",
    type: "website",
    locale: "en_US",
    siteName: "Kanishka Thapliyal Nutrition",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishka Thapliyal | Certified Dietician & Nutritionist",
    description: "Expert nutrition services for optimal health and wellness.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
          <ModernNav />
          <main className="flex-1 pt-16">{children}</main>
          <ModernFooter />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
