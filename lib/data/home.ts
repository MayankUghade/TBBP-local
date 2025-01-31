import servicesData from "./services.json";
import { ADDRESS, CONTACT_NUMBER, CONTACT_URL, MAP_URL } from "./constants";
import {
  aviation,
  careerTransition,
  ugPg,
  internationalEdu,
  grade8_12,
} from "assets/services";

export const landingSectionData = {
  title:
    "Empowering students to make informed career choices and become successful professionals.",
  cta: "Get started",
  image: {
    width: 400,
    height: 400,
  },
};

export const missiongVisionData = {
  mission: {
    title: "Our Mission",
    content:
      "Big Brother is dedicated to bridge the gap between academia and industry by providing them with comprehensive mentorship, industry-relevant skill development programs, and a valuable professional network. We equip students with the knowledge, skills, and connections they need to navigate the workforce with confidence and achieve a thriving future.",
  },
  vision: {
    title: "Our Vision",
    content:
      "To empower students to make informed career choices and become successful professionals who make valuable contributions to their chosen fields.",
  },
};

export const contactUrl = CONTACT_URL;

export const contactFooterData = {
  heading: "Take the Next Step.",
  content:
    "Ready to embark on your journey to success? Contact us today to learn more about our services.",
  cta: "enquire now",
  contactUrl: contactUrl,
  contacts: {
    phone: `+91 ${CONTACT_NUMBER}`,
    email: "info@tbbp.in",
    address: `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.landmark ?? ""}, ${
      ADDRESS.state
    }, ${ADDRESS.country} (${ADDRESS.postalCode})`,
    map: MAP_URL,
  },
};

const categories = servicesData.categories;

export const serviceCategories = [
  {
    id: categories["grade-8-12"].id,
    name: categories["grade-8-12"].name,
    description: categories["grade-8-12"].description,
    icon: grade8_12,
  },
  {
    id: categories["ug-pg"].id,
    name: categories["ug-pg"].name,
    description: categories["ug-pg"].description,
    icon: ugPg,
  },
  {
    id: categories["career-transition"].id,
    name: categories["career-transition"].name,
    description: categories["career-transition"].description,
    icon: careerTransition,
  },
  {
    id: categories["international-education-assitance"].id,
    name: categories["international-education-assitance"].name,
    description: categories["international-education-assitance"].description,
    icon: internationalEdu,
  },
  {
    id: categories["aviation-career-program"].id,
    name: categories["aviation-career-program"].name,
    description: categories["aviation-career-program"].description,
    icon: aviation,
  },
];
