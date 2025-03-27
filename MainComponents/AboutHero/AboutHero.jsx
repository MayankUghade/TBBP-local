import { Container, Title, Button, Group, Text, Stack } from "@mantine/core";
import image from "../../assets/about.svg";
import classes from "./styles.module.css";
import Image from "next/image";
import LandingImage from "../Landing/LandingImage";
import ColorGradeHeading from "../UI/typography/ColorGradeHeading";
import ContactCTA from "../Landing/ContactCTA";

const AboutHero = () => {
  return (
    <>
      <Container size="lg">
        <div className={classes.inner}>
          <Stack className={classes.content}>
            <ColorGradeHeading
              textBrand="Big brother:"
              textIndigo="your guide to"
              textRed="brighter future"
            />
            <Text c="gray.8" className={classes.description}>
              Big Brother connects students with industry experts for
              personalized mentorship. Get the guidance and support you need to
              succeed at every step of your academic journey by your mentors.
            </Text>
            <ContactCTA size="lg" />
          </Stack>
          <LandingImage imgUrl={image} width={450} height={450} />
        </div>
      </Container>
    </>
  );
};
export default AboutHero;
