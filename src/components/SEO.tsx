import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'CodeCraft - Desenvolvimento Web Moderno',
  description = 'Serviços profissionais de desenvolvimento web utilizando tecnologias de ponta. Criamos aplicativos web atraentes, responsivos e de alto desempenho.',
  keywords = 'desenvolvimento web, react, typescript, frontend, desenvolvimento de sites, aplicações web, desenvolvimento responsivo, SEO, performance web',
  image = '/og-image.jpg',
  url = 'https://codecraft.social',
  type = 'website'
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CodeCraft" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="CodeCraft Team" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Feira de Santana" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}; 