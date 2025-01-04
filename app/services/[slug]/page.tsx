import ContactFooter from "@/components/ContactFooter/ContactFooter";
import ServiceCategory from "@/components/Services/ServiceCategory";
import { Metadata } from "next";
import servicesData from "../../../lib/data/services.json";

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
  const serviceKeywords =
    servicesData.metadata[slug as keyof typeof servicesData.metadata];

  return {
    title: serviceTitle,
    keywords: serviceKeywords,
  };
}

// Component
const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ServiceCategory slug={params.slug} />
      <ContactFooter />
    </>
  );
};
export default page;
