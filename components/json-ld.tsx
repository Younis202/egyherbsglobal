'use client';

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Egy Herbs Global",
    "alternateName": "Egyptian Herbs Global",
    "url": "https://egyherbsglobal.com",
    "logo": "https://egyherbsglobal-770136110.imgix.net/global/logo.png",
    "description": "Premium Egyptian herbs, spices, and seeds sourced directly from Egypt's fertile lands. Organic quality and sustainable farming practices since 2010.",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Mohamed Hawas"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Nazla",
      "addressLocality": "Ibshaway",
      "addressRegion": "Fayoum",
      "addressCountry": "Egypt"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+20-122-229-7357",
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/egy-herbs-global/",
      "https://www.facebook.com/egy.herbs.global",
      "https://www.instagram.com/egy.herbsglobal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Egyptian Herbs and Spices",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Herbs",
          "description": "Premium Egyptian herbs including chamomile, hibiscus, basil, and more"
        },
        {
          "@type": "OfferCatalog",
          "name": "Spices",
          "description": "Authentic Egyptian spices including turmeric, cinnamon, and traditional blends"
        },
        {
          "@type": "OfferCatalog",
          "name": "Seeds",
          "description": "High-quality seeds including sesame, fennel, and caraway"
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Egy Herbs Global",
    "url": "https://egyherbsglobal.com",
    "description": "Premium Egyptian herbs, spices, and seeds sourced directly from Egypt's fertile lands.",
    "publisher": {
      "@type": "Organization",
      "name": "Egy Herbs Global"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://egyherbsglobal.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://egyherbsglobal.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://egyherbsglobal.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://egyherbsglobal.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}