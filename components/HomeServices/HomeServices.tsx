import { Box, Container, Text, Title } from "@mantine/core";
import ServicesCarousel from "./ServicesCarousel";
import Subheading from "../UI/Subheading";

const HomeServices = () => {
  return (
    <Box mx="sm">
      <Container
        size="lg"
        style={{ margin: "8rem auto 3rem", textAlign: "center" }}
      >
        <Subheading
          title="Services"
          desc="
          Welcome to the Big Brother Mentorship Program"
        />
      </Container>
      <ServicesCarousel />
    </Box>
  );
};

export default HomeServices;
