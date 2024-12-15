"use client";
import { Box, Paper, Stack, Text, Title } from "@mantine/core";
import classes from "../styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
}

const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <motion.div
      className={classes.statCard}
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
      <Image
        src={icon}
        width={60}
        height={60}
        className={classes.icon}
        alt={`Illustration for ${value}`}
      />
      <Stack className={classes.statContent}>
        <Title order={2} c="brand" className={classes.statTitle}>
          {value}
        </Title>
        <Text className={classes.statDescription}>{label}</Text>
      </Stack>
    </motion.div>
  );
};

export default StatCard;
