import ContactFooter from "Components/ContactFooter/ContactFooter";
import HomeAbout from "Components/HomeAbout/HomeAbout";
import Landing from "Components/Landing/Landing";
import Services from "Components/HomeServices/HomeServices";
import Statistics from "Components/Statistics/Statistics";
import Faqs from "Components/Faqs/Faqs";
import Testimonials from "Components/Testimonials/Testimonials";

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
