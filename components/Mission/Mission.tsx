"use client";
import { Container, Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import { motion } from "framer-motion";
import { missiongVisionData } from "lib/data/home";

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
        viewport={{ amount: "some" }}
      >
        <Title order={2} className={classes.title}>
          {missiongVisionData.mission.title}
        </Title>
        <Text size="lg" mt={20} className={classes.description}>
          {missiongVisionData.mission.content}
        </Text>
      </Paper>
    </Container>
  );
};
export default Mission;
