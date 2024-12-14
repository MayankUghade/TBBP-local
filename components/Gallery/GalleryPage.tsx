"use client";
import {
  Container,
  Group,
  Loader,
  LoadingOverlay,
  SimpleGrid,
} from "@mantine/core";
import ImageViewer from "./ImageViewer";
import PageHeader from "./PageHeader";
import Masonry from "react-masonry-css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { GalleryCardProps } from "./Gallery";

interface GalleryPageProps extends GalleryCardProps {
  event_images: { name: string; img: string }[];
}

const GalleryPage = ({ slug }: { slug: string }) => {
  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ["gallerySingle"],
    queryFn: async (): Promise<GalleryPageProps> => {
      const res = await axiosInstance.get(`/get-event-photos/${slug}/`);
      return res.data;
    },
  });

  return (
    <>
      {isPending && (
        <Group style={{ height: "80vh" }} justify="center">
          <Loader color="indigo.8" type="bars" />
        </Group>
      )}
      {isSuccess && (
        <PageHeader
          heading={data.title}
          desc={data.description}
          date={data.date}
          image={data.cover_img}
        />
      )}
      <Container size="xl" my="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {isSuccess &&
            data.event_images.map((image) => (
              <ImageViewer key={image.name} imgURL={image.img} />
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
export default GalleryPage;
