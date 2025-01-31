import ContactFooter from "@/components/ContactFooter/ContactFooter";
import ServiceCategory from "@/components/Services/ServiceCategory";
import { Metadata } from "next";
import servicesData from "../../../lib/data/services.json";
import SEO_DATA from "lib/data/seo-data";
import { generateServiceSchema, JsonLd } from "lib/SchemaGenerator";
import { ADDRESS } from "lib/data/constants";

type Props = {
  params: { slug: string };
};

// Dynamic route metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const serviceTitle =
    servicesData.categories[slug as keyof typeof servicesData.categories]
      .name || "Services";
  const serviceDesc =
    servicesData.categories[slug as keyof typeof servicesData.categories]
      .description || SEO_DATA.description;
  const serviceKeywords =
    servicesData.metadata[slug as keyof typeof servicesData.metadata];

  return {
    title: serviceTitle,
    description: serviceDesc,
    keywords: serviceKeywords,
    alternates: {
      canonical: `/${params.slug}`,
    },
  };
}

// Component
const page = ({ params }: { params: { slug: string } }) => {
  const pageService =
    servicesData.categories[
      params.slug as keyof typeof servicesData.categories
    ];

  // Schema.org Service
  const serviceSchema = generateServiceSchema({
    name: pageService.name,
    description: pageService.description,
    orgName: SEO_DATA.shortName,
    area: ADDRESS.country,
    logo: "/logo.svg",
  });

  return (
    <>
      <ServiceCategory slug={params.slug} />
      <ContactFooter />
      <JsonLd data={serviceSchema} />
    </>
  );
};
export default page;
