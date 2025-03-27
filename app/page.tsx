import ContactFooter from "MainComponents/ContactFooter/ContactFooter";
import HomeAbout from "MainComponents/HomeAbout/HomeAbout";
import Landing from "MainComponents/Landing/Landing";
import Services from "MainComponents/HomeServices/HomeServices";
import Statistics from "MainComponents/Statistics/Statistics";
import Faqs from "MainComponents/Faqs/Faqs";
import Testimonials from "MainComponents/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <Landing />
      <Statistics />
      <Services />
      <HomeAbout />
      <Testimonials />
      <Faqs />
      <ContactFooter />
    </>
  );
}
