import { Button, ButtonProps } from "@mantine/core";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Link from "next/link";

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
      href="https://api.whatsapp.com/send?phone=917028161277"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "fit-content",
      }}
    >
      <PrimaryBtn size={size}>{btnName}</PrimaryBtn>
    </Link>
  );
};
export default ContactCTA;
