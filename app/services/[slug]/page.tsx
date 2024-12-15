import ContactFooter from "@/components/ContactFooter/ContactFooter";
import ServiceCategory from "@/components/Services/ServiceCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ServiceCategory slug={params.slug} />
      <ContactFooter />
    </>
  );
};
export default page;
