import ContactusLayout from "@/components/ContactusForm/ContactusLayout";
import ContactHero from "@/components/ContactusHero/ContactHero";
import RegisterSection from "@/components/RegisterSection/RegisterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactusLayout />
      {/* <RegisterSection /> */}
    </>
  );
};
export default page;
