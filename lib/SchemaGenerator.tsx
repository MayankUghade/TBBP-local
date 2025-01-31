// components/JsonLd.tsx
import React from "react";

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 *
 * @param data JSON-LD data object for schema.org
 * @returns JSON-LD script tag
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 *
 * @param orgData Schema data for type 'EducationalOrganization'
 * @returns Generated schema object
 */
export const generateAcademicOrgSchema = (orgData: {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: orgData.name,
    description: orgData.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: orgData.address.street,
      addressLocality: orgData.address.city,
      addressRegion: orgData.address.state,
      postalCode: orgData.address.postalCode,
      addressCountry: orgData.address.country,
    },
  };
};

/**
 *
 * @param serviceData Schema data for type 'Service'
 * @returns Schema object for 'Service'
 */
export const generateServiceSchema = (serviceData: {
  name: string;
  description: string;
  orgName: string;
  area: string;
  price?: string;
  currency?: string;
  audience?: string;
  logo?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mentorship Service",
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      "@type": "EducationalOrganization",
      name: serviceData.orgName,
    },
    areaServed: serviceData.area,
    audience: serviceData.audience,
    logo: serviceData.logo,
  };
};
