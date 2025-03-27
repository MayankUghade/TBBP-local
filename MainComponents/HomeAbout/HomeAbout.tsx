import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Subheading from "../UI/Subheading";
import image from "../../assets/about.svg";
import Image from "next/image";
import classes from "./styles.module.css";
import LandingCTA from "../Landing/ContactCTA";
import { missiongVisionData } from "lib/data/home";

type MisionVisionType = keyof typeof missiongVisionData;

const HomeAbout = () => {
  return (
    <Container size="lg">
      <Group className={classes.container} justify="center" wrap="wrap" my="xl">
        <Image
          src={image}
          alt="About Us placeholder image"
          width={500}
          height={500}
          className={classes.aboutImage}
        />
        <Stack className={classes.rightSection}>
          <Stack className={classes.section}>
            {Object.keys(missiongVisionData).map((value, index) => (
              <Stack key={index + value}>
                <Title order={2} fw={600} c="indigo.6">
                  {missiongVisionData[value as MisionVisionType].title}
                </Title>
                <Text size="md" c="brand" className={classes.description}>
                  {missiongVisionData[value as MisionVisionType].content}
                </Text>
              </Stack>
            ))}
          </Stack>
          {/* <Group mt={30}>
            <Button size="md">Register Now</Button>
            <Button variant="outline" size="md">
              Contact Us
            </Button>
          </Group> */}
          {/* <LandingCTA /> */}
        </Stack>
      </Group>
    </Container>
  );
};
export default HomeAbout;
