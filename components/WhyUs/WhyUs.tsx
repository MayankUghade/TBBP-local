import { Box, Container } from "@mantine/core";
import Subheading from "../UI/Subheading";
import classes from "./styles.module.css";
import { whyUsData } from "lib/data/about";
import WhyUsCard from "../UI/Cards/WhyUsCard";
const WhyUs = () => {
  return (
    <Container size="lg" my="6rem">
      <Box style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Subheading title="Why Choose Us?" />
      </Box>
      {/* cards */}
      <Box className={classes.dataGrid}>
        {whyUsData.map((data) => (
          <WhyUsCard
            key={data.title}
            label={data.title}
            desc={data.description}
            icon={data.icon}
          />
        ))}
      </Box>
    </Container>
  );
};
export default WhyUs;
