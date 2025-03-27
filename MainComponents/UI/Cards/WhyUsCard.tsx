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

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.4,
    },
  },
};

const WhyUsCard = ({ label, desc, icon }: WhyUsCardProps) => {
  return (
    <Box
      component={motion.div}
      variants={item}
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
          <Title component="h3" order={4} c="brand" ta="center">
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
