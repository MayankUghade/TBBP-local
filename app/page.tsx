import ContactFooter from "@/components/ContactFooter/ContactFooter";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import Landing from "@/components/Landing/Landing";
import Services from "@/components/HomeServices/HomeServices";
import Statistics from "@/components/Statistics/Statistics";
import Faqs from "@/components/Faqs/Faqs";

export default function HomePage() {
  return (
    <>
      <Landing />
      <Statistics />
      <Services />
      <HomeAbout />
      <Faqs />
      {/* <Testimonials /> */}
      <ContactFooter />
    </>
  );
}
