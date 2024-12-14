"use client";
import { Container, Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <Container size="lg" mt="xl">
      <Paper
        className={classes.paper}
        component={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        viewport={{ once: true, amount: "some" }}
      >
        <Title order={2} className={classes.title}>
          Our{" "}
          <span
            style={{
              color: "var(--brand-maroon)",
            }}
          >
            {" "}
            Mission
          </span>
        </Title>
        <Text size="lg" mt={20} className={classes.description}>
          Big Brother is dedicated to bridge the gap between academia and
          industry by providing them with comprehensive mentorship,
          industry-relevant skill development programs, and a valuable
          professional network. We equip students with the knowledge, skills,
          and connections they need to navigate the workforce with confidence
          and achieve a thriving future.
        </Text>
      </Paper>
    </Container>
  );
};
export default Mission;
