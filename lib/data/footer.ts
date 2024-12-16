import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { INSTAGRAM_URL, LINKEDIN_URL } from "./constants";
import servicesData from "./services.json";

const categories = servicesData.categories;

const footerNav = {
  title: "Quick Links",
  links: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    ...Object.values(categories).map((category) => ({
      label: category.name,
      link: `/services/${category.id}`,
    })),
    // { label: "Gallery", link: "/gallery" },
  ],
};

const footerContact = {
  title: "Get In Touch",
  links: [
    { label: "Contact Us", link: "/contactus" },
    // { label: "Write a Review", link: "/user-review" },
  ],
};

const footerSocials = {
  title: "Follow Us",
  links: [
    {
      label: "Instagram",
      link: INSTAGRAM_URL,
      icon: AiFillInstagram({ fontSize: 24 }),
    },
    {
      label: "LinkedIn",
      link: LINKEDIN_URL,
      icon: FaLinkedinIn({ fontSize: 24 }),
    },
  ],
};

const footerDesc =
  " We are your dedicated partners in journey towards career success and personal development.";

export { footerNav, footerContact, footerSocials, footerDesc };
