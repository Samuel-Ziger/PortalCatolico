import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical }) => {
  const defaultTitle = 'Portal Católico - Orações, Ensinamentos e Devoções';
  const defaultDescription = 'Portal Católico com orações tradicionais, ensinamentos da Igreja, devoções e recursos para fortalecer sua fé. Encontre orações como Pai Nosso, Ave Maria, Credo e muito mais.';
  const defaultKeywords = 'orações católicas, padre nosso, ave maria, credo, orações tradicionais, igreja católica, devoções, santos, ensinamentos católicos, fé católica';

  return (
    <Helmet>
      {/* Título */}
      <title>{title ? `${title} | Portal Católico` : defaultTitle}</title>
      <meta property="og:title" content={title ? `${title} | Portal Católico` : defaultTitle} />
      <meta name="twitter:title" content={title ? `${title} | Portal Católico` : defaultTitle} />

      {/* Descrição */}
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta name="twitter:description" content={description || defaultDescription} />

      {/* Palavras-chave */}
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content="/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical || window.location.href} />
      <meta name="twitter:image" content="/logo.png" />

      {/* Outras meta tags importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Portal Católico" />

      {/* Schema.org markup para Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Portal Católico",
          "url": canonical || window.location.href,
          "description": description || defaultDescription,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${window.location.origin}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 