import HomePage from "@/components/home";
import { generateStructuredData, generateOrganizationStructuredData } from "@/lib/seo";

export default function Home() {
  const structuredData = generateStructuredData();
  const organizationData = generateOrganizationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <HomePage />
    </>
  );
}
