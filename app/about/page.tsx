import AboutHero from "@/components/AboutHero/AboutHero";
import ContactFooter from "@/components/ContactFooter/ContactFooter";
import Faqs from "@/components/Faqs/Faqs";
import Mission from "@/components/Mission/Mission";
import Vision from "@/components/Mission/Vision";
import Statistics from "@/components/Statistics/Statistics";
import Testimonials from "@/components/Testimonials/Testimonials";
import OurValues from "@/components/Values/OurValues";
import WhyUs from "@/components/WhyUs/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Vision />
      <WhyUs />
      <OurValues />
      <Faqs />
      <ContactFooter />
    </>
  );
};
export default page;
