"use client";
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
  const latitude = 15.494652;
  const longitude = 73.825256;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3844.809941874043!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI5JzQwLjgiTiA3M8KwNDknMzAuOSJF!5e0!3m2!1sen!2sin!4v1738240409189!5m2!1sen!2sin`;

  const handleMapClick = () => {
    window.open(mapUrl, "_blank");
  };

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
                  href={`mailto:${contactFooterData.contacts.email}`}
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

          {/* right section - Google Map */}
          <Stack
            className={classes.rightSection}
            gap={20}
            style={{ position: "relative" }}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <button
                onClick={handleMapClick}
                className="absolute top-4 right-4 z-10 bg-white px-2 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center gap-1 text-xs"
              >
                <FaLocationDot className="text-lg text-red-500" />
                <span className="md:block hidden">Open Location</span>
              </button>
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Address on Google Maps"
              />
            </div>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
};

export default ContactFooter;
