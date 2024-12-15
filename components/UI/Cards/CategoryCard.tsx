"use client";
import { Box, Group, Text } from "@mantine/core";
import Link from "next/link";
import classes from "../styles.module.css";
import { color } from "framer-motion";

const CategoryCard = ({ name, link, icon }: any) => {
  let hrefLink = `/services/${link}`;
  if (link === "#") hrefLink = "/#";

  return (
    <Link href={hrefLink} style={{ textDecoration: "none" }}>
      <Group gap={10} className={classes.categoryCard}>
        <Box className={classes.categoryIcon}>
          {icon({ style: { fontSize: "1.4rem", color: "var(--brand-blue)" } })}
        </Box>
        <Text style={{ textDecoration: "none" }}>{name}</Text>
      </Group>
    </Link>
  );
};
export default CategoryCard;
