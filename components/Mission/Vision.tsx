"use client";
import { Container, Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import { motion } from "framer-motion";
import { missiongVisionData } from "lib/data/home";

const Vision = () => {
  return (
    <Container size="lg" mt="xl">
      <motion.div
        className={classes.paperVision}
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
          {missiongVisionData.vision.title}
        </Title>
        <Text size="lg" mt={20} className={classes.visionDescription}>
          {missiongVisionData.vision.content}
        </Text>
      </motion.div>
    </Container>
  );
};
export default Vision;
