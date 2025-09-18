import { Metadata } from "next";

export const siteConfig = {
  name: "Sickle Cell Walk Lagos",
  description: "Walking Together for Access to Treatment in Nigeria",
  url: "https://sickle-cell.vercel.app",
  ogImage: "/sss.jpg",
  links: {
    twitter: "https://twitter.com/sicklecellwalklagos",
    facebook: "https://facebook.com/sicklecellwalklagos",
    instagram: "https://instagram.com/sicklecellwalklagos",
  },
  keywords: [
    "sickle cell walk",
    "Lagos 2026",
    "sickle cell awareness",
    "Nigeria healthcare",
    "Third Mainland Bridge",
    "sickle cell treatment",
    "health advocacy",
    "charity walk",
    "medical access",
    "healthcare equity",
    "sickle cell disease",
    "health awareness",
    "charity event",
    "Lagos health walk",
    "medical advocacy",
  ],
  event: {
    name: "Sickle Cell Walk Lagos 2026",
    date: "2026-03-14",
    location: "Third Mainland Bridge, Lagos, Nigeria",
    description:
      "Join us for a 11km walk to raise awareness and funds for sickle cell treatment access in Nigeria",
    organizer: "Sickle Cell Walk Lagos",
    fundraisingGoal: "£165,000,000",
    expectedParticipants: "1000+",
  },
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const fullImage = image || siteConfig.ogImage;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other"
        | undefined,
      locale: "en_NG",
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
      creator: "@sicklecellwalklagos",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: siteConfig.event.name,
    description: siteConfig.event.description,
    startDate: siteConfig.event.date,
    endDate: siteConfig.event.date,
    location: {
      "@type": "Place",
      name: siteConfig.event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.event.organizer,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.facebook, siteConfig.links.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };
}
