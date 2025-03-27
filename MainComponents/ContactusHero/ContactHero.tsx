import { Container, Title, Button, Group, Text } from "@mantine/core";
import image from "../../assets/home-about.png";
import classes from "./styles.module.css";
import Image from "next/image";
import ContactCTA from "../Landing/ContactCTA";
import LandingImage from "../Landing/LandingImage";

const ContactHero = () => {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Reach out</span> to us
          </Title>
          <Text mt="md">
            Embark on a journey of self-discovery, growth, and success with our
            services at Big Brother. Let us be your guiding light as you
            navigate the exciting and trans-formative years of your education.
          </Text>
          <Text>
            Ready to take the first step? Register now, and open your doors to a
            future filled with opportunities!
          </Text>

          {/* Register and Contact modal */}
          {/* <Group mt={30} wrap="wrap" className={classes.cta}>
            <Button size="md" className={classes.control}>
              Register Now
            </Button>
            <Button variant="outline" size="md" className={classes.control}>
              Contact Us
            </Button>
          </Group> */}
          <ContactCTA />
        </div>
        <LandingImage imgUrl={image} width={400} height={400} />
      </div>
    </Container>
  );
};
export default ContactHero;
