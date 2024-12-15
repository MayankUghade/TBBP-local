"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import ServiceCard from "../UI/Cards/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import classes from "./styles.module.css";

import servicesData from "../../lib/data/services.json";
import ServiceTabs from "./ServiceTabs";
import ServicesAll from "./ServicesAll";
import WhyUs from "../WhyUs/WhyUs";
import ContactCTA from "../Landing/ContactCTA";
import { useRouter } from "next/router";
export interface ServicesProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const ServiceCategory = ({ slug }: { slug: string }) => {
  const categorySelected =
    servicesData.categories[slug as keyof typeof servicesData.categories];
  const serviceIds = categorySelected.serviceIds;
  // const tabs = serviceIds.map((service) => {
  //   const data =
  //     servicesData.services[service as keyof typeof servicesData.services];

  //   return {
  //     label: data.heading,
  //     href: data.id,
  //   };
  // });

  const services = serviceIds.map((id) => {
    return servicesData.services[id as keyof typeof servicesData.services];
  });

  return (
    <>
      <Container size="lg" style={{ margin: "0 auto 6rem" }}>
        <Stack gap={10}>
          {/* Heading and tagline */}
          <Stack gap={4} mt={16}>
            <Title className={classes.title}>{categorySelected.name}</Title>
            <Text className={classes.tagline}>{categorySelected.tagline}</Text>
          </Stack>
          {/* Description */}
          <Text c="grey.7" mt="md" className={classes.description}>
            {categorySelected.description}
          </Text>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <ContactCTA size="lg" />
          </Box>

          {/* Tabs */}
          {/* {tabs.length > 1 && <ServiceTabs tabs={tabs} />} */}
        </Stack>
      </Container>
      <ServicesAll services={services} />
      <WhyUs />
    </>
  );
};
export default ServiceCategory;
