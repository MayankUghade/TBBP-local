import AboutHero from "@/components/AboutHero/AboutHero";
import ContactFooter from "@/components/ContactFooter/ContactFooter";
import Faqs from "@/components/Faqs/Faqs";
import Mission from "@/components/Mission/Mission";
import Vision from "@/components/Mission/Vision";
import Statistics from "@/components/Statistics/Statistics";
import OurValues from "@/components/Values/OurValues";
import WhyUs from "@/components/WhyUs/WhyUs";
import { Metadata } from "next";

const aboutPageKeywords = {
  primaryKeywords: [
    "experienced career mentors",
    "professional education counselors",
    "student guidance experts",
  ],

  secondaryKeywords: [
    "gap academia and industry",
    "provide skill development programs",
    "empowering students",
    "student success rate",
  ],

  longTailKeywords: [
    "why choose us for career guidance",
    "our approach to student mentorship",
    "career counseling expertise and background",
  ],
};

export const metadata: Metadata = {
  title: "About",
  keywords: [
    ...aboutPageKeywords.primaryKeywords,
    ...aboutPageKeywords.secondaryKeywords,
    ...aboutPageKeywords.longTailKeywords,
  ],
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
