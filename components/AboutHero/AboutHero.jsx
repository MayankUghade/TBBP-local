import { Container, Title, Button, Group, Text } from "@mantine/core";
import image from "../../assets/about.svg";
import classes from "./styles.module.css";
import Image from "next/image";
import LandingImage from "../Landing/LandingImage";

const AboutHero = () => {
  return (
    <>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={`${classes.title} ${classes.highlight1}`}>
              Big Brother:
            </Title>
            <Title className={`${classes.title} ${classes.highlight2}`}>
              Your Guide to a
            </Title>
            <Title className={`${classes.title} ${classes.highlight3}`}>
              Brighter Future
            </Title>
            <Text c="dimmed" mt="md">
              Big Brother connects students with industry experts for
              personalized mentorship. Get the guidance and support you need to
              succeed at every step of your academic journey by your mentors.
            </Text>
          </div>
          <LandingImage imgUrl={image} width={450} height={450} />
        </div>
      </Container>
    </>
  );
};
export default AboutHero;
