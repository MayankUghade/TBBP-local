import { Box, Container, Stack, Text, Title } from "@mantine/core";
import servicesData from "../../lib/data/services.json";
import Subheading from "../UI/Subheading";
import ServiceDescription, { ServiceDescriptionPropTypes } from "./Description";
import classes from "./styles.module.css";
import Image from "next/image";

type ServiceType =
  (typeof servicesData.services)[keyof typeof servicesData.services];

const ServicesAll = ({ services }: { services: ServiceType[] }) => {
  return (
    <Box>
      {services.map((service, index) => {
        return (
          <Box
            key={service.id + "-section"}
            component="section"
            id={service.id}
            style={{
              background:
                index % 2 !== 0 ? "var(--mantine-color-white)" : "#FFF6F7",
              scrollMarginTop: "10rem",
            }}
            className={classes.section}
          >
            <Container size="lg" className={classes.sectionContainer}>
              <Stack gap={12} className={classes.textContainer}>
                <Title order={2} c="indigo.5" mb={10}>
                  {service.heading}
                </Title>
                <Text c="grey.8" mb={10}>
                  {service.desc}
                </Text>
                {/* More data */}

                {service.dataIds.map((dataId) => {
                  const data = servicesData.data[
                    dataId as keyof typeof servicesData.data
                  ] as unknown as ServiceDescriptionPropTypes;

                  return (
                    <ServiceDescription key={dataId + "-data"} {...data} />
                  );
                })}
              </Stack>

              {/* Image */}
              <Box className={classes.imageContainer}>
                <Box className={classes.image}>
                  <Image
                    src={service.image}
                    alt={service.heading}
                    fill={true}
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        );
      })}
    </Box>
  );
};
export default ServicesAll;
