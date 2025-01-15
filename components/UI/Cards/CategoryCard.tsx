"use client";
import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "../styles.module.css";
import Image from "next/image";

const CategoryCard = ({ name, link, icon, description }: any) => {
  let hrefLink = `/services/${link}`;
  if (link === "#") hrefLink = "/#";

  return (
    <Link href={hrefLink} className={classes.categoryCard}>
      <Image src={icon} width={60} height={60} alt={name + " icon"} />
      <Stack
        gap={16}
        style={{
          alignItems: "flex-start",
        }}
      >
        <Title order={3} fw={600} c="indigo.5" size="24px">
          {name}
        </Title>
        <Text c="dark" size="sm">
          {description}
        </Text>
      </Stack>
    </Link>
  );
};
export default CategoryCard;
