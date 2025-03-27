import { ButtonProps } from "@mantine/core";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Link from "next/link";
import { contactUrl } from "lib/data/home";

// CTA button for the landing page that redirects to the WhatsApp chat
const ContactCTA = ({
  btnName = "Contact Us",
  size,
}: {
  btnName?: string;
  size?: ButtonProps["size"];
}) => {
  return (
    <Link
      href={contactUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "fit-content",
      }}
      aria-label="Contact Us on WhatsApp"
    >
      <PrimaryBtn size={size}>{btnName}</PrimaryBtn>
    </Link>
  );
};
export default ContactCTA;
