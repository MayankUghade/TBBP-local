import { motion } from "framer-motion";
import { Box, Button, Container, Stack, Text, Title } from "@mantine/core";
import servicesData from "../../lib/data/services.json";
import ServiceDescription, { ServiceDescriptionPropTypes } from "./Description";
import classes from "./styles.module.css";
import Image from "next/image";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Link from "next/link";

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
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                        },
                      }}
                      viewport={{ amount: "some" }}
                    >
                      <ServiceDescription key={dataId + "-data"} {...data} />
                    </motion.div>
                  );
                })}
              </Stack>

              {/* Image */}
              <Box className={classes.imageContainer}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                >
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
                </motion.div>

                {service?.cta && (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      c="red.5"
                      ta="center"
                      size="lg"
                      style={{
                        alignSelf: "center",
                        fontWeight: 500,
                        marginBottom: "16px",
                      }}
                    >
                      Ready to elevate your career?{" "}
                    </Text>
                    <Link
                      href={service?.cta}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        alignSelf: "center",
                      }}
                    >
                      <PrimaryBtn size="lg">Enroll Now</PrimaryBtn>
                    </Link>
                  </motion.div>
                )}
              </Box>
            </Container>
          </Box>
        );
      })}
    </Box>
  );
};
export default ServicesAll;
