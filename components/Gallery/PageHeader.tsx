import { Box, Paper, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import Image from "next/image";

interface GalleryHeaderProps {
  heading: string;
  desc: string;
  date: string;
  image: string;
}

const PageHeader = ({ heading, desc, date, image }: GalleryHeaderProps) => {
  return (
    <Paper className={classes.galleryHeader}>
      {/* gradient overlay with content */}
      <Box className={classes.galleryHeaderContent}>
        <Title ta="center" className={classes.title}>
          {heading}
        </Title>
        <Text mt="sm" size="md" ta="center" className={classes.galleryDesc}>
          {desc}
        </Text>
        <Text mt="md" size="xs" ta="center" c="red.7" fw={700}>
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Text>
      </Box>
      {/* background image */}
      <Box className={classes.galleryHeaderImgContainer}>
        <Image
          src={image}
          fill={true}
          className={classes.galleryHeaderImg}
          alt=" "
        />
      </Box>
    </Paper>
  );
};
export default PageHeader;
