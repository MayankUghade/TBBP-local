"use client";

import { Carousel } from "@mantine/carousel";
import image from "../../assets/preparation.png";
import classes from "./styles.module.css";
import TestimonialCard from "../UI/Cards/TestimonialCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { Text } from "@mantine/core";

const slides = [
  {
    title: "Janak Kapoor",
    designation: "Student, PCU University",
    comment:
      "Personalized counseling sessions to help you make informed decisions about your academic and career choices.",
  },
  {
    title: "Kanak Kapoor",
    designation: "Student, PCU University",
    comment:
      "Custominzed counseling sessions to help you make informed decisions about your academic and career choices.",
  },
  {
    title: "Shreya Kapoor",
    designation: "Student, PCU University",
    comment:
      "Centrallized counseling sessions to help you make informed decisions about your academic and career choices.",
  },
];

interface TestimonialDataProps {
  name: string;
  title: string;
  content: string;
  photo: string;
}

const TestimonialCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const classnames = useRef(ClassNames());
  const { isPending, isError, isSuccess, data } = useQuery({
    queryKey: ["testimonialView"],
    queryFn: async (): Promise<TestimonialDataProps[]> => {
      const res = await axiosInstance.get("/get-testimonials/");
      return res.data;
    },
  });
  console.log(data);
  return (
    <>
      {isError && (
        <Text c="red" ta="center">
          Oops! Error in loading data :(
        </Text>
      )}
      <Carousel
        slideSize={{ base: "100%", sm: "60%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        plugins={[autoplay.current, classnames.current]}
        classNames={classes}
        slidesToScroll={1}
        inViewThreshold={1}
      >
        {isSuccess &&
          data.map((slide) => (
            <Carousel.Slide key={slide.name}>
              <TestimonialCard
                title={slide.name}
                designation={slide.title}
                comment={slide.content}
                img={slide.photo}
              />
            </Carousel.Slide>
          ))}
      </Carousel>
    </>
  );
};
export default TestimonialCarousel;
