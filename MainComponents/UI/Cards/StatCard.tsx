"use client";
import { Stack, Text } from "@mantine/core";
import classes from "../styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "lib/animations/AnimateNumberCounter";

interface StatCardProps {
  label: string;
  icon: string;
  numberSuffix: string;
  from: number;
  to: number;
}

const StatCard = ({ label, icon, from, to, numberSuffix }: StatCardProps) => {
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
        alt={`Illustration for ${label}`}
      />
      <Stack className={classes.statContent}>
        <Text c="brand" className={classes.statTitle}>
          <AnimatedCounter from={from} to={to} />
          {numberSuffix}
        </Text>
        <Text className={classes.statDescription}>{label}</Text>
      </Stack>
    </motion.div>
  );
};

export default StatCard;
