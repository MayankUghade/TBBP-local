import { Container, Title, Accordion, Space } from "@mantine/core";
import classes from "./styles.module.css";
import Subheading from "../UI/Subheading";
import { IconPlus } from "@tabler/icons-react";
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
