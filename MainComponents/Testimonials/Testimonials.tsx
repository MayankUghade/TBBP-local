"use client";
import { useState } from "react";
import TestimonialsCard from "./TestimonailsCard";
import testimonials from "./testimonials data.json";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Subheading from "../UI/Subheading";

export default function Testimonials() {
  const [carouselApi, setCarouselApi] = useState<any>(null);

  return (
    <div className="w-full h-full flex items-center justify-center px-7 mt-20">
      <div className="flex flex-col items-center justify-center p-5 w-full max-w-[1200px]">
        {/* Header */}
        <Subheading title="Our Success Stories" desc="What our students say" />

        {/* Carousel */}
        <div className="flex sm:gap-3 gap-1 items-center justify-center w-full px-2 mt-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 basis-full"
                >
                  <div className="sm:px-2 sm:py-2 flex items-center justify-center">
                    <TestimonialsCard
                      video={testimonial.video}
                      name={testimonial.name}
                      desc={testimonial.desc}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 md:hidden" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 md:hidden" />
            <div className="justify-end gap-2 w-full mt-5 mr-2 md:flex hidden">
              <Button
                className="text-white p-6 rounded-md cursor-pointer"
                style={{
                  background:
                    "linear-gradient(240deg, #ce3e50 10.77%, #1f298b 70.57%, #356af4 93.33%)",
                }}
                onClick={() => carouselApi?.scrollPrev()}
              >
                <FaArrowLeftLong />
              </Button>
              <Button
                className="text-white p-6 rounded-md cursor-pointer"
                style={{
                  background:
                    "linear-gradient(240deg, #ce3e50 10.77%, #1f298b 70.57%, #356af4 93.33%)",
                }}
                onClick={() => carouselApi?.scrollNext()}
              >
                <FaArrowRightLong />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
