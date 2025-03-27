import { Box, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import CTA from "./CTA";

const RegisterSection = () => {
  return (
    <Box className={classes.section}>
      <Title order={1} c="white">
        Interested in joining us?
      </Title>
      <Text
        size="sm"
        c="white"
        fw={300}
        my="md"
        style={{ width: "80%", margin: "auto" }}
      >
        Register with us to get started asap. Explore your potential, make
        informed decisions, and step into A Bright future with us!{" "}
      </Text>
      <CTA />
    </Box>
  );
};
export default RegisterSection;
