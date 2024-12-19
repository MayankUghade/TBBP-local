"use client";
import { Stack, Text } from "@mantine/core";
import Link from "next/link";
import classes from "../styles.module.css";
import Image from "next/image";

const CategoryCard = ({ name, link, icon, description }: any) => {
  let hrefLink = `/services/${link}`;
  if (link === "#") hrefLink = "/#";

  return (
    <Link
      href={hrefLink}
      style={{ textDecoration: "none", height: "100%", display: "flex" }}
    >
      <div className={classes.categoryCard}>
        <Image src={icon} width={60} height={60} alt={name + " icon"} />
        <Stack
          gap={16}
          style={{
            alignItems: "flex-start",
          }}
        >
          <Text fw={600} c="indigo.5" size="24px">
            {name}
          </Text>
          <Text c="dark" size="sm">
            {description}
          </Text>
        </Stack>
      </div>
    </Link>
  );
};
export default CategoryCard;
