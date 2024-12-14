"use client";

import { Anchor, Container, Group, Space, Text } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { IconMail, IconMapPin, IconPhoneCall } from "@tabler/icons-react";
import classes from "./styles.module.css";
import SimpleContactForm from "./Form";

const ContactusLayout = () => {
  return (
    <Container size="lg" style={{ margin: "6rem auto 8rem" }}>
      <Subheading
        title="contact us"
        desc="Our organization was founded on the belief that with the right guidance and support, every student can achieve their dreams."
      />
      <Space h="xl" />
      {/* grid */}
      <div className={classes.gridContainer}>
        <div className={classes.gridMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3844.7214920895735!2d73.82603837512411!3d15.499405885100488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI5JzU3LjkiTiA3M8KwNDknNDMuMCJF!5e0!3m2!1sen!2sin!4v1704432636512!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className={classes.gridForm}>
          <SimpleContactForm />
        </div>
        <div className={classes.gridContact}>
          <Group gap={5} justify="start" align="start">
            <IconPhoneCall />
            <Text style={{ fontSize: "16px" }}>+91-7093116004</Text>
          </Group>
          <Group gap={5} justify="start" align="start">
            <IconMail />
            <Anchor
              href="mailto:hello@tbbp.in"
              target="_blank"
              rel="noopener"
              style={{ fontSize: "16px" }}
            >
              hello@tbbp.in
            </Anchor>
          </Group>
          <Group gap={5} justify="start" align="start" wrap="nowrap">
            <IconMapPin style={{ flexShrink: 0 }} />
            <Anchor
              href="https://maps.app.goo.gl/NhyFDbL3be4z6sYT6"
              target="_blank"
              rel="noopener"
              style={{ fontSize: "16px" }}
            >
              2nd floor, Manvins building, Near Panjim Church, Panjim, Goa ,
              India (403001)
            </Anchor>
          </Group>
        </div>
      </div>
    </Container>
  );
};
export default ContactusLayout;
