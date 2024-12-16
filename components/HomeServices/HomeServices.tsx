"use client";
import { Box, Container, Group } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { serviceCategories } from "lib/data/home";
import CategoryCard from "../UI/Cards/CategoryCard";
import classes from "./styles.module.css";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HomeServices = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box mx="sm" style={{ margin: "8rem auto 10rem" }}>
      <Container size="lg" style={{ textAlign: "center" }}>
        <Subheading
          title="Our Services"
          desc="Select the categories you want to explore!"
        />
      </Container>
      {/* Services Carousel */}
      <div className={classes.carouselContainer}>
        <Carousel
          slideSize="33%"
          height={"100%"}
          slideGap="lg"
          loop
          withControls={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          style={{ flex: 1 }}
        >
          {/* ...slides */}
          {serviceCategories.map((category) => (
            <CarouselSlide key={category.id} style={{ height: "auto" }}>
              <CategoryCard
                name={category.name}
                link={category.id}
                icon={category.icon}
                description={category.description}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
      {/* <Group className={classes.categoriesContainer}>
          {serviceCategories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              link={category.id}
              icon={category.icon}
              description={category.description}
            />
          ))}
        </Group> */}
    </Box>
  );
};

export default HomeServices;
