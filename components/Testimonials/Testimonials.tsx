import { Box, Container } from "@mantine/core";
import Subheading from "../UI/Subheading";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <Box mx="sm" style={{ margin: "8rem 0" }} className="testimonials">
      <Container size="lg" style={{ marginBottom: "3rem" }}>
        <Subheading
          title="why choose us?"
          desc="Discover what our students have to say about us. Let their stories inspire and guide you on your own path to success."
        />
      </Container>
      <TestimonialCarousel />
    </Box>
  );
};
export default Testimonials;
