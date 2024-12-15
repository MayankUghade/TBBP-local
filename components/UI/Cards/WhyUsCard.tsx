"use client";
import { Box, Stack, Title, Text } from "@mantine/core";
import Image from "next/image";
import classes from "../styles.module.css";
import { motion } from "framer-motion";

interface WhyUsCardProps {
  label: string;
  desc: string;
  icon: string;
}

const WhyUsCard = ({ label, desc, icon }: WhyUsCardProps) => {
  return (
    <Box
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
      className={classes.whyUsCardWrapper}
    >
      <Box className={classes.whyUsCard}>
        <Image
          src={icon}
          width={60}
          height={60}
          className={classes.whyIcon}
          alt={`Illustration for --`}
        />
        <Stack>
          <Title order={4} c="brand" ta="center">
            {label}
          </Title>
          <Text c="grey.7" size="sm" ta="center">
            {desc}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
export default WhyUsCard;
