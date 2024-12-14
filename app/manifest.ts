import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Big Brother",
    short_name: "Big Brother",
    description:
      "Your Dedicated Partner for Career Success and Personal Development. Founded on the belief that with the right guidance,every student can achieve their dreams.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
