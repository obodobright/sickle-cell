import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export const SEOHead = ({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords = []
}: SEOHeadProps) => {
  const siteName = 'Sickle Cell Walk Lagos';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription = description || 'Walking Together for Access to Treatment in Nigeria';
  const fullImage = image || '/sss.jpg';
  const fullUrl = url ? `https://sickle-cell.vercel.app${url}` : 'https://sicklecellwalklagos.com';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@sicklecellwalklagos" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#dc2626" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />

      {/* Geo Tags */}
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />

      {/* Event-specific meta tags */}
      <meta name="event:start_time" content="2026-03-14T08:00:00+01:00" />
      <meta name="event:end_time" content="2026-03-14T18:00:00+01:00" />
      <meta name="event:location" content="Third Mainland Bridge, Lagos, Nigeria" />
    </Head>
  );
};
