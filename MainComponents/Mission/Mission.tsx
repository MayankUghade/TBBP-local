"use client";
import { Container, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import { motion } from "framer-motion";
import { missiongVisionData } from "lib/data/home";

const Mission = () => {
  return (
    <Container size="lg" mt="xl">
      <motion.div
        className={classes.paperMission}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        whileHover={{
          scale: 1.05,
          translateY: -10,
        }}
        viewport={{ once: true, amount: "some" }}
      >
        <Title order={2} className={classes.title}>
          {missiongVisionData.mission.title}
        </Title>
        <Text size="lg" mt={20} className={classes.description}>
          {missiongVisionData.mission.content}
        </Text>
      </motion.div>
    </Container>
  );
};
export default Mission;
