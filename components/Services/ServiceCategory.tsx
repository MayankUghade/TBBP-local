"use client";
import { Box, Container, Stack, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

import servicesData from "../../lib/data/services.json";
import ServiceTabs from "./ServiceTabs";
import ServicesAll from "./ServicesAll";
import WhyUs from "../WhyUs/WhyUs";
import ContactCTA from "../Landing/ContactCTA";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import bgCircle from "../../assets/circle-bg.svg";

export interface ServicesProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const ServiceCategory = ({ slug }: { slug: string }) => {
  const matches = useMediaQuery("(max-width: 62em)");
  const categorySelected =
    servicesData.categories[slug as keyof typeof servicesData.categories];
  const serviceIds = categorySelected.serviceIds;
  const tabs = serviceIds.map((service) => {
    const data =
      servicesData.services[service as keyof typeof servicesData.services];

    return {
      label: data.heading,
      href: data.id,
    };
  });

  const services = serviceIds.map((id) => {
    return servicesData.services[id as keyof typeof servicesData.services];
  });

  return (
    <>
      <Container
        size="lg"
        style={{ margin: "0 auto 5rem", position: "relative" }}
      >
        <Box className={classes.eclipse}></Box>
        <Stack gap={10}>
          {/* Heading and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            }}
            whileHover={{
              scale: 1.05,
              translateY: -10,
            }}
            viewport={{ once: true, amount: "some" }}
          >
            <Stack gap={4} mt={36}>
              <Title className={classes.title}>{categorySelected.name}</Title>
              <Text className={classes.tagline}>
                {categorySelected.tagline}
              </Text>
            </Stack>
          </motion.div>
          {/* Description */}
          <Text c="grey.7" mt="md" className={classes.description}>
            {categorySelected.description}
          </Text>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <ContactCTA size="lg" />
          </Box>
        </Stack>
      </Container>
      {tabs.length > 1 && !matches && (
        <Container size="lg" className={classes.tabContainer}>
          {/* Tabs */}
          <ServiceTabs tabs={tabs} />
        </Container>
      )}
      <ServicesAll services={services} />
      <WhyUs />
    </>
  );
};
export default ServiceCategory;
