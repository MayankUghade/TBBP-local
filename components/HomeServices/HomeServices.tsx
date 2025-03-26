"use client";

import * as React from "react";
import { Box, Container } from "@mantine/core";
import Subheading from "../UI/Subheading";
import { serviceCategories } from "lib/data/home";
import CategoryCard from "../UI/Cards/CategoryCard";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const HomeServices = () => {
  const [api, setApi] = useState<any>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isPaused]);
  return (
    <Box mx="sm" style={{ margin: "8rem auto 1rem" }}>
      <Container size="md" style={{ textAlign: "center" }}>
        <Subheading
          title="Our Services"
          desc="Select the categories you want to explore!"
        />
      </Container>
      <div className={classes.carouselContainer}>
        <Carousel
          className="w-full mx-auto p-4"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CarouselContent>
            {serviceCategories.map((category) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CategoryCard
                  name={category.name}
                  link={category.id}
                  icon={category.icon}
                  description={category.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Box>
  );
};

export default HomeServices;
