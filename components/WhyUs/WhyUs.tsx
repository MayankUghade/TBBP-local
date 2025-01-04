"use client";
import { Box, Container } from "@mantine/core";
import Subheading from "../UI/Subheading";
import classes from "./styles.module.css";
import { whyUsData } from "lib/data/about";
import WhyUsCard from "../UI/Cards/WhyUsCard";
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05, // Stagger children by .3 seconds
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const WhyUs = () => {
  return (
    <Container size="lg" my="6rem">
      <Box style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Subheading title="Why Choose Us?" />
      </Box>
      {/* cards */}
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        variants={list}
        className={classes.dataGrid}
      >
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
