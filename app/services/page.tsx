import ContactFooter from "@/components/ContactFooter/ContactFooter";
import Services from "@/components/Services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const page = () => {
  return (
    <>
      <Services />
      <ContactFooter />
    </>
  );
};
export default page;
