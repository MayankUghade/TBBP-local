import { Avatar, Box, Group, Paper, Text } from "@mantine/core";
import classes from "../styles.module.css";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  title: string;
  designation: string;
  comment: string;
  img: string;
}

const TestimonialCard = ({
  title,
  designation,
  comment,
  img,
}: TestimonialCardProps) => {
  return (
    <Paper
      p="xl"
      radius="lg"
      className={classes.testimonialCard}
      component={motion.div}
      whileHover={{ scale: 1.02 }}
    >
      <Group mb="xl">
        <Avatar variant="filled" radius="xl" size="md" src={img} />
        <Box>
          <Text fw="bold" size="sm">
            {title}
          </Text>
          <Text c="dimmed" size="sm">
            {designation}
          </Text>
        </Box>
      </Group>
      <Text size="lg">&quot;{comment}&quot;</Text>
    </Paper>
  );
};
export default TestimonialCard;
