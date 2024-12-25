/* eslint-disable react/no-unescaped-entities */
import {
  Anchor,
  Box,
  Container,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./styles.module.css";
import Socials from "./Socials";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Link from "next/link";
import { contactFooterData, contactUrl } from "lib/data/home";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactFooter = () => {
  return (
    <Box className={classes.box}>
      <Container size="lg">
        <Group className={classes.group}>
          {/* left section */}
          <Stack className={classes.leftSection}>
            <Socials />
            <Box>
              <Text className={classes.heading}>
                {contactFooterData.heading}
              </Text>
              <Text c="gray.8">{contactFooterData.content}</Text>
            </Box>

            <Paper className={classes.contacts} radius="lg">
              <Group gap={16} justify="start" align="start">
                <FaPhoneAlt
                  style={{ fontSize: "20px", color: `var(--brand-blue)` }}
                />
                <Text fw={600}>{contactFooterData.contacts.phone}</Text>
              </Group>
              <Group gap={16} justify="start" align="start">
                <IoMdMail
                  style={{ fontSize: "20px", color: `var(--brand-blue)` }}
                />
                <Anchor
                  href="mailto:hello@tbbp.in"
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                    fontWeight: 600,
                  }}
                >
                  {contactFooterData.contacts.email}
                </Anchor>
              </Group>
              <Group gap={16} justify="start" align="start" wrap="nowrap">
                <FaLocationDot
                  style={{
                    fontSize: "20px",
                    color: `var(--brand-blue)`,
                    flexShrink: 0,
                  }}
                />
                <Anchor
                  href={contactFooterData.contacts.map}
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                    fontWeight: 600,
                  }}
                >
                  {contactFooterData.contacts.address}
                </Anchor>
              </Group>
            </Paper>

            <Link
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cta}
            >
              <PrimaryBtn variant="filled" size="md">
                <FaWhatsapp fontSize={20} style={{ marginRight: "10px" }} />
                {contactFooterData.cta}
              </PrimaryBtn>
            </Link>
          </Stack>

          {/* right section */}
          <Stack className={classes.rightSection} gap={20}>
            <iframe
              title="Our address on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3844.721290839657!2d73.8286111!3d15.499416700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI5JzU3LjkiTiA3M8KwNDknNDMuMCJF!5e0!3m2!1sen!2sin!4v1734200907821!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
            ></iframe>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
};
export default ContactFooter;
