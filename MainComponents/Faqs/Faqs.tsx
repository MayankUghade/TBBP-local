import { Container, Space } from "@mantine/core";
import Subheading from "../UI/Subheading";
import FaqAccordian from "./FaqAccordian";

const Faqs = () => {
  return (
    <Container size="lg" style={{ margin: "6rem auto" }}>
      <Subheading title="Frequently Asked Questions" />
      <Space h="xl" />
      <FaqAccordian />
    </Container>
  );
};

export default Faqs;
