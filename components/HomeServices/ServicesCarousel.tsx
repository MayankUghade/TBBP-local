"use client";
import { Carousel, Embla } from "@mantine/carousel";
import ServiceCard from "../UI/Cards/ServiceCard";
import classes from "./styles.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { ServicesProps } from "../Services/Services";
import { Text } from "@mantine/core";

const ServicesCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const [embla, setEmbla] = useState<Embla | null>(null);

  // Axios call
  const { isSuccess, isError, data } = useQuery({
    queryKey: ["servicesCarousle"],
    queryFn: async (): Promise<ServicesProps[]> => {
      const res = await axiosInstance.get("/services/");
      return res.data;
    },
  });

  const rafId = useRef<number>(0); // requestAnimationFrame ID

  // For autoscroll (NOTE: Upgrade this with future plugin of embla)
  // const animate = useCallback(() => {
  //   if (!embla || !rafId.current) return;

  //   const engine = embla.internalEngine();
  //   engine.location.add(-0.1);
  //   engine.target.set(engine.location);
  //   engine.scrollLooper.loop(-1);
  //   engine.slideLooper.loop();
  //   engine.translate.to(engine.location);
  //   rafId.current = requestAnimationFrame(animate);
  // }, [embla]);

  // const startAutoScroll = useCallback(() => {
  //   rafId.current = requestAnimationFrame(animate);
  // }, [animate]);

  // const stopAutoScroll = useCallback(() => {
  //   cancelAnimationFrame(rafId.current);
  //   rafId.current = 0;
  // }, []);

  // useEffect(() => {
  //   if (!embla) return;

  //   embla.on("pointerDown", stopAutoScroll);
  //   embla.on("settle", startAutoScroll);

  //   startAutoScroll();
  //   return () => stopAutoScroll();
  // }, [embla, startAutoScroll, stopAutoScroll]);

  return (
    <>
      {isError && (
        <Text c="red" ta="center">
          Oops! Error in loading data :(
        </Text>
      )}

      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33.3%" }}
        slideGap={{ base: 0, sm: "xl" }}
        loop
        plugins={[autoplay.current]}
        align="start"
        classNames={{
          root: classes.root,
          indicators: classes.indicators,
          indicator: classes.indicator,
          controls: classes.controls,
        }}
        getEmblaApi={setEmbla}
        withControls={false}
      >
        {isSuccess &&
          data.map((slide) => (
            <Carousel.Slide key={slide.id}>
              <ServiceCard
                img={slide.icon}
                title={slide.name}
                desc={slide.description}
              />
            </Carousel.Slide>
          ))}
        {/* ...other slides */}
      </Carousel>
    </>
  );
};
export default ServicesCarousel;
