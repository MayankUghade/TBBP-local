"use client";
import { Container, SimpleGrid, Skeleton, Text, Title } from "@mantine/core";
import GalleryCard from "../UI/Cards/GalleryCard";
import classes from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";

export interface GalleryCardProps {
  id: string;
  title: string;
  date: string;
  cover_img: string;
  description: string;
}

const Gallery = () => {
  const { isSuccess, isPending, data, error, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: async (): Promise<GalleryCardProps[]> => {
      const res = await axiosInstance.get("/get-events/");
      return res.data;
    },
  });

  return (
    <>
      <Container>
        <Title ta="center" className={classes.title}>
          Gallery
        </Title>{" "}
        <Text mt="md" size="lg" ta="center">
          Immerse yourself in a captivating visual journey that showcases the
          essence of who we are and what we do.
        </Text>
      </Container>
      {isError && (
        <Text c="red" ta="center">
          Oops! Issue in loading gallery :(
        </Text>
      )}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        my="xl"
        mx="lg"
      >
        {isPending && (
          <>
            <Skeleton visible={isPending} height={250} width={250} />
            <Skeleton visible={isPending} height={250} width={250} />
            <Skeleton visible={isPending} height={250} width={250} />
          </>
        )}
        {isSuccess &&
          data.map((event) => <GalleryCard key={event.id} {...event} />)}
      </SimpleGrid>
    </>
  );
};
export default Gallery;
