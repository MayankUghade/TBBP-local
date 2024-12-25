import ContactFooter from "@/components/ContactFooter/ContactFooter";
import ServiceCategory from "@/components/Services/ServiceCategory";
import { Metadata } from "next";
import servicesData from "../../../lib/data/services.json";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const serviceTitle =
    servicesData.categories[slug as keyof typeof servicesData.categories]
      .name || "Services";

  return {
    title: serviceTitle,
  };
}

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ServiceCategory slug={params.slug} />
      <ContactFooter />
    </>
  );
};
export default page;
