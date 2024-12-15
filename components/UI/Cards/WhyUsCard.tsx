import { Box, Stack, Title, Text } from "@mantine/core";
import Image from "next/image";
import classes from "../styles.module.css";

interface WhyUsCardProps {
  label: string;
  desc: string;
  icon: string;
}

const WhyUsCard = ({ label, desc, icon }: WhyUsCardProps) => {
  return (
    <Box className={classes.whyUsCardWrapper}>
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
