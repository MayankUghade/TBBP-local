import { Box, Paper, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import classes from "../styles.module.css";
import Link from "next/link";
import { GalleryCardProps } from "@/components/Gallery/Gallery";

const GalleryCard = ({ title, date, cover_img, id }: GalleryCardProps) => {
  return (
    <Paper
      className={classes.galleryCard}
      component={Link}
      href={`/gallery/${id}`}
    >
      <Stack className={classes.galleryHoverCard} justify="space-between">
        {/* icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          style={{ alignSelf: "end" }}
        >
          <path
            d="M34.8965 11.9338L5.50992 41.3204L0.681373 36.4918L30.0679 7.10529L4.16758 7.10529L4.16758 0.277728L41.724 0.277726L41.724 37.8342L34.8964 37.8342L34.8965 11.9338Z"
            fill="#EC1A1D"
          />
        </svg>
        {/* content */}
        <Stack gap={1}>
          <Title order={3} c="dark.8">
            {title}
          </Title>
          <Text size="xs" c="red" fw={600}>
            {new Date(date).toLocaleDateString("de-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
        </Stack>
      </Stack>
      <Paper className={classes.galleryImg}>
        <Image
          src={cover_img}
          fill={true}
          alt=" "
          className={classes.galleryImg}
        />
      </Paper>
    </Paper>
  );
};
export default GalleryCard;
