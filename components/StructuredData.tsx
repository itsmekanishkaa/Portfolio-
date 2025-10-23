export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kanishkathapliyal.com/#person",
        "name": "Kanishka Thapliyal",
        "jobTitle": "Certified Dietician & Nutritionist",
        "description": "Certified dietician and nutritionist with B.Sc. in Home Science (Nutrition & Dietetics), specializing in personalized nutrition plans, weight management, and holistic wellness.",
        "url": "https://kanishkathapliyal.com",
        "sameAs": [
          "https://linktr.ee/itsmekanishka"
        ],
        "email": "kanishkathapliyal2@gmail.com",
        "telephone": "+91-9599701972",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "B.Sc. Home Science (Nutrition & Dietetics)"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kanishkathapliyal.com/#service",
        "name": "Kanishka Thapliyal Nutrition & Wellness",
        "description": "Expert nutrition and dietetics services including personalized diet plans, weight management, PCOS/thyroid support, pregnancy nutrition, and holistic wellness programs.",
        "url": "https://kanishkathapliyal.com",
        "telephone": "+91-9599701972",
        "email": "kanishkathapliyal2@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Nutrition Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Personalized Diet Plans",
                "description": "Custom-tailored nutrition strategies designed around your unique health goals, lifestyle, and preferences"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Weight Management",
                "description": "Nutrition counseling for healthy, sustainable weight management without deprivation or restrictive diets"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pregnancy & Lactation Nutrition",
                "description": "Specialized nutrition support for expecting and nursing mothers to ensure optimal health for mother and baby"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Holistic Wellness Programs",
                "description": "Comprehensive programs addressing digestion, hormonal balance, energy levels, and overall vitality"
              }
            }
          ]
        },
        "provider": {
          "@id": "https://kanishkathapliyal.com/#person"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kanishkathapliyal.com/#website",
        "url": "https://kanishkathapliyal.com",
        "name": "Kanishka Thapliyal - Nutrition & Wellness",
        "description": "Transform your health with expert nutrition services. Personalized diet plans, weight management & holistic wellness.",
        "publisher": {
          "@id": "https://kanishkathapliyal.com/#person"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://kanishkathapliyal.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://kanishkathapliyal.com/#webpage",
        "url": "https://kanishkathapliyal.com",
        "name": "Kanishka Thapliyal | Certified Dietician & Nutritionist",
        "isPartOf": {
          "@id": "https://kanishkathapliyal.com/#website"
        },
        "about": {
          "@id": "https://kanishkathapliyal.com/#person"
        },
        "description": "Transform your health with Kanishka Thapliyal, certified dietician & nutritionist. Expert in personalized nutrition, weight management, PCOS, thyroid, pregnancy nutrition & holistic wellness."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
