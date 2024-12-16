import { Container, Title, Button, Group, Text, Stack } from "@mantine/core";
import classes from "./styles.module.css";
import ContactCTA from "./ContactCTA";
import LandingImage from "./LandingImage";
import image from "../../assets/landing-page.svg";
import ColorGradeHeading from "../UI/typography/ColorGradeHeading";
import { landingSectionData } from "lib/data/home";

const Landing = () => {
  return (
    <Container size="lg" id="home">
      <div className={classes.inner}>
        <Stack className={classes.content} gap="md">
          <ColorGradeHeading />
          <Text c="gray.8" className={classes.description}>
            {landingSectionData.title}
          </Text>
          <ContactCTA size="lg" />
        </Stack>
        <LandingImage
          imgUrl={image}
          width={landingSectionData.image.width}
          height={landingSectionData.image.height}
        />
      </div>
    </Container>
  );
};

export default Landing;
