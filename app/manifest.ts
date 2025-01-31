import SEO_DATA from "lib/data/seo-data";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_DATA.siteName,
    short_name: SEO_DATA.shortName,
    description: SEO_DATA.description,
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
