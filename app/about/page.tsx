import AboutHero from "Components/AboutHero/AboutHero";
import ContactFooter from "Components/ContactFooter/ContactFooter";
import Faqs from "Components/Faqs/Faqs";
import Mission from "Components/Mission/Mission";
import Vision from "Components/Mission/Vision";
import Statistics from "Components/Statistics/Statistics";
import OurValues from "Components/Values/OurValues";
import WhyUs from "Components/WhyUs/WhyUs";
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
