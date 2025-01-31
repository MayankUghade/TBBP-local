import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tbbp.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://tbbp.in/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://tbbp.in/services/grade-8-12",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://tbbp.in/services/ug-pg",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://tbbp.in/services/career-transition",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://tbbp.in/services/international-education-assitance",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://tbbp.in/services/aviation-career-program",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
