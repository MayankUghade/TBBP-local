import AboutHero from "@/components/AboutHero/AboutHero";
import ContactFooter from "@/components/ContactFooter/ContactFooter";
import Faqs from "@/components/Faqs/Faqs";
import Mission from "@/components/Mission/Mission";
import Vision from "@/components/Mission/Vision";
import Statistics from "@/components/Statistics/Statistics";
import OurValues from "@/components/Values/OurValues";
import WhyUs from "@/components/WhyUs/WhyUs";
import { ADDRESS } from "lib/data/constants";
import SEO_DATA from "lib/data/seo-data";
import { generateAcademicOrgSchema, JsonLd } from "lib/SchemaGenerator";
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
  description: SEO_DATA.description,
  keywords: [
    ...aboutPageKeywords.primaryKeywords,
    ...aboutPageKeywords.secondaryKeywords,
    ...aboutPageKeywords.longTailKeywords,
  ],
};

const page = () => {
  const orgSchema = generateAcademicOrgSchema({
    name: SEO_DATA.shortName,
    description: SEO_DATA.description,
    address: {
      street: ADDRESS.street,
      city: ADDRESS.city,
      state: ADDRESS.state,
      postalCode: ADDRESS.postalCode,
      country: ADDRESS.country,
    },
  });

  return (
    <>
      <AboutHero />
      <Mission />
      <Vision />
      <WhyUs />
      <OurValues />
      <Faqs />
      <ContactFooter />
      <JsonLd data={orgSchema} />
    </>
  );
};
export default page;
