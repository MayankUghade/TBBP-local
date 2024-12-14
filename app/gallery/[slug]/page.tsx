import GalleryPage from "@/components/Gallery/GalleryPage";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <GalleryPage slug={params.slug} />
    </>
  );
};
export default page;
