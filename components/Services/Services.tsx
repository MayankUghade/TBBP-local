"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import ServiceCard from "../UI/Cards/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import classes from "./styles.module.css";
import Image from "next/image";
import serviceImage from "../../assets/services.svg";
import LandingImage from "../Landing/LandingImage";

export interface ServicesProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const Services = () => {
  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["services"],
    queryFn: async (): Promise<ServicesProps[]> => {
      const res = await axiosInstance.get("/services/");
      return res.data;
    },
  });

  return (
    <Container size="lg" style={{ margin: "0 auto 6rem" }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Our <span className={classes.highlight}>Services</span>
          </Title>
          <Text c="dimmed" mt="md">
            Our comprehensive range of services is tailored to meet the unique
            needs of students and academia, providing invaluable support at
            every stage of their educational journey.
          </Text>
        </div>
        <LandingImage imgUrl={serviceImage} width={400} height={250} />
      </div>

      {isError && (
        <Text c="red" ta="center">
          Oops! Issue in loading services :(
        </Text>
      )}
      {isPending && <Skeleton visible={isPending} height={300} width={250} />}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "md" }}
      >
        {/* <Box className={classes.gridContainer}> */}
        {isSuccess &&
          data.map((slide) => (
            <ServiceCard
              key={slide.id}
              title={slide.name}
              desc={slide.description}
              img={slide.icon}
            />
          ))}
        {/* </Box> */}
      </SimpleGrid>
    </Container>
  );
};
export default Services;
