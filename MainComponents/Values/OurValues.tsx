"use client";
import { Box, Container, Space, Text, Title } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { motion } from "framer-motion";
import Image from "next/image";
import classes from "./styles.module.css";
import { ourValues } from "lib/data/about";

const OurValues = () => {
  return (
    <Container size="lg" style={{ margin: "6rem auto" }}>
      <Box
        style={{
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        <Subheading title="Our Values" />
      </Box>
      <Space h="xl" />

      <Box className={classes.valuesContainer}>
        {ourValues.map((value, index) => (
          <motion.div
            key={value.title}
            className={classes.valueCard}
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
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};
export default OurValues;
