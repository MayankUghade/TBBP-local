"use client";
import { Box, Container, Group, Text, Title } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { serviceCategories } from "lib/data/home";
import CategoryCard from "../UI/Cards/CategoryCard";
import classes from "./styles.module.css";

const HomeServices = () => {
  return (
    <Box mx="sm" style={{ margin: "8rem auto" }}>
      <Container size="lg" style={{ textAlign: "center" }}>
        <Subheading
          title="Our Services"
          desc="Select the categories you want to explore!"
        />
        {/* Services Carousel */}

        <Group className={classes.categoriesContainer}>
          {serviceCategories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              link={category.id}
              icon={category.icon}
            />
          ))}
        </Group>
      </Container>
    </Box>
  );
};

export default HomeServices;
