"use client";
import { Box, Container, Paper, Space, Text, Title } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { motion } from "framer-motion";
import Image from "next/image";
import classes from "./styles.module.css";
import { values } from "./data.json";

const OurValues = () => {
  return (
    <Container size="lg" style={{ margin: "6rem auto" }}>
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <Subheading title="Our Values" />
      </Box>
      <Space h="xl" />
      <Space h="xl" />

      <Box className={classes.valuesContainer}>
        {values.map((value, index) => (
          <Paper
            key={value.title}
            radius="lg"
            className={classes.valueCard}
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
            <Image
              src={value.imageSrc}
              width={40}
              height={40}
              //   className={classes.icon}
              alt={`Illustration for ${value}`}
            />
            <Box className={classes.valueContent}>
              <Title order={3} className={classes.valueTitle}>
                {value.title}
              </Title>
              <Text size="sm">{value.description}</Text>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};
export default OurValues;
