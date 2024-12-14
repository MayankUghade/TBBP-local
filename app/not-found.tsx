import { Container, Title, Text, Button, SimpleGrid } from "@mantine/core";
import image from "../assets/404.svg";
import classes from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src={image}
          className={classes.mobileImage}
          width={400}
          height={400}
          alt="404 image"
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="md">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            component={Link}
            href="/"
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src={image}
          className={classes.desktopImage}
          width={400}
          height={400}
          alt="404 image"
        />
      </SimpleGrid>
    </Container>
  );
};

export default notFound;
