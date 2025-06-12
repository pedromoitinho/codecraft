// SEO constants and utilities for CodeCraft FSA
export const SEO_CONFIG = {
  // Basic site information
  siteName: 'CodeCraft FSA',
  siteUrl: 'https://codecraft.social',
  defaultTitle: 'CodeCraft FSA - Criação de Sites e Desenvolvimento Web | Soluções Digitais Online',
  defaultDescription: 'CodeCraft FSA - Especialistas em criação de sites e desenvolvimento web. Atendemos todo o Brasil com soluções digitais modernas, responsivas e profissionais para o seu negócio online.',
  
  // Keywords targeting
  primaryKeywords: [
    'criação de sites',
    'desenvolvimento web',
    'sites',
    'feira de santana',
    'codecraft',
    'codecraft fsa',
      'codecraft feira de santana',
      'criação de sites feira de santana'
    ],
  
  secondaryKeywords: [
    'web',
    'desenvolvimento web feira de santana',
    'sites feira de santana',
    'empresa de sites',
    'agência digital feira de santana',
    'design web',
    'sites responsivos',
    'landing pages',
    'e-commerce',
    'sistemas web',
    'negócio online',
    'presença digital',
    'marketing digital',
    'seo',
    'otimização web',
    'consultoria digital',
    'soluções web',
    'websites profissionais',
    'desenvolvimento remoto'
  ],
  
  // Location information
  location: {
    city: 'Feira de Santana',
    state: 'Bahia',
    country: 'Brasil',
    region: 'BR-BA',
    coordinates: {
      latitude: '-12.2664',
      longitude: '-38.9663'
    }
  },
  
  // Social media
  social: {
    instagram: '@cc_codecraft',
  },
  
  // Business information
  business: {
    type: 'Organization',
    name: 'CodeCraft',
    alternateName: 'CodeCraft FSA',
    priceRange: '$$',
    services: [
      'Criação de Sites',
      'Desenvolvimento Web',
      'Design Web',
      'Sites Responsivos',
      'E-commerce',
      'Landing Pages',
      'Sistemas Web',
      'Consultoria Digital',
      'Otimização SEO'
    ],
    operatingArea: 'Online - Brasil',
    serviceDelivery: 'Digital'
  }
};

// Generate keywords string
export const getKeywordsString = (additional: string[] = []): string => {
  const allKeywords = [
    ...SEO_CONFIG.primaryKeywords,
    ...SEO_CONFIG.secondaryKeywords,
    ...additional
  ];
  return allKeywords.join(', ');
};

// Generate page title with location
export const generateTitle = (pageTitle?: string): string => {
  if (!pageTitle) return SEO_CONFIG.defaultTitle;
  return `${pageTitle} | CodeCraft FSA - Feira de Santana`;
};

// Generate meta description with location
export const generateDescription = (customDescription?: string): string => {
  if (!customDescription) return SEO_CONFIG.defaultDescription;
  return `${customDescription} CodeCraft FSA em Feira de Santana - Soluções web profissionais.`;
};

// Generate structured data for different page types
export const generateStructuredData = (type: 'Organization' | 'WebSite' | 'Service' = 'Organization') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": SEO_CONFIG.business.name,
    "url": SEO_CONFIG.siteUrl,
    "description": SEO_CONFIG.defaultDescription,
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "serviceArea": {
      "@type": "Country", 
      "name": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "operatingStatus": "Active",
    "knowsAbout": SEO_CONFIG.business.services
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseData,
        "@type": "WebSite",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SEO_CONFIG.siteUrl}/busca?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    
    case 'Service':
      return {
        ...baseData,
        "@type": "Service",
        "serviceType": SEO_CONFIG.business.services,
        "provider": {
          "@type": "Organization",
          "name": SEO_CONFIG.business.name,
          "url": SEO_CONFIG.siteUrl
        },
        "category": "Web Development",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Desenvolvimento Web",
          "itemListElement": SEO_CONFIG.business.services.map((service) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service
            }
          }))
        }
      };
    
    default:
      return {
        ...baseData,
        "priceRange": SEO_CONFIG.business.priceRange,
        "makesOffer": SEO_CONFIG.business.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service,
            "category": "Web Development"
          }
        })),
        "founder": {
          "@type": "Person",
          "name": "CodeCraft Team"
        }
      };
  }
};
