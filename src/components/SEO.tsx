import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, generateDescription, generateStructuredData, generateTitle, getKeywordsString } from '../utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  structuredDataType?: 'Organization' | 'WebSite' | 'Service';
}

export const SEO = ({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = SEO_CONFIG.siteUrl,
  type = 'website',
  structuredDataType = 'Organization'
}: SEOProps) => {
  const pageTitle = generateTitle(title);
  const pageDescription = generateDescription(description);
  const pageKeywords = getKeywordsString(keywords);
  const structuredData = generateStructuredData(structuredDataType);
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="CodeCraft Team" />
      <meta name="geo.region" content={SEO_CONFIG.location.region} />
      <meta name="geo.placename" content={SEO_CONFIG.location.city} />
      <meta name="geo.position" content={`${SEO_CONFIG.location.coordinates.latitude};${SEO_CONFIG.location.coordinates.longitude}`} />
      <meta name="ICBM" content={`${SEO_CONFIG.location.coordinates.latitude}, ${SEO_CONFIG.location.coordinates.longitude}`} />
      
      {/* Local Business SEO */}
      <meta name="DC.title" content={pageTitle} />
      <meta name="DC.creator" content={SEO_CONFIG.business.name} />
      <meta name="DC.subject" content="Criação de Sites, Desenvolvimento Web" />
      <meta name="DC.description" content={pageDescription} />
      <meta name="DC.coverage" content={`${SEO_CONFIG.location.city}, ${SEO_CONFIG.location.state}, ${SEO_CONFIG.location.country}`} />
      
      {/* Google Business specific */}
      <meta name="business:contact_data:locality" content={SEO_CONFIG.location.city} />
      <meta name="business:contact_data:region" content={SEO_CONFIG.location.state} />
      <meta name="business:contact_data:country_name" content={SEO_CONFIG.location.country} />
      
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}; 