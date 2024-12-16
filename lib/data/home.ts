import { SlGlobe } from "react-icons/sl";
import { StaticImageData } from "next/image";
import { FaSchool } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { BsBriefcaseFill, BsFillAirplaneFill } from "react-icons/bs";
import { CONTACT_URL } from "./constants";

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
    phone: "+91-7093116004",
    email: "hello@tbbp.in",
    address:
      "2nd floor, Manvins building, Near Panjim Church, Panjim, Goa, India (403001)",
    map: "https://maps.app.goo.gl/NhyFDbL3be4z6sYT6",
  },
};

export const serviceCategories = [
  {
    id: "grade-8-12",
    name: "Grade (8th – 12th)",
    icon: FaSchool,
  },
  {
    id: "ug-pg",
    name: "Undergraduate & Postgraduate",
    icon: IoMdSchool,
  },
  {
    id: "career-transition",
    name: "Career Transition",
    icon: BsBriefcaseFill,
  },
  {
    id: "international-education-assitance",
    name: "International Education Assistance",
    icon: SlGlobe,
  },
  {
    id: "aviation-career-program",
    name: "Aviation Career Program",
    icon: BsFillAirplaneFill,
  },
];
