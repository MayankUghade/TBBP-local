import "@mantine/core/styles.layer.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../MainComponents/Navbar/Navbar";
import Footer from "../MainComponents/Footer/Footer";
import { Poppins } from "next/font/google";
import "@mantine/carousel/styles.css";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import SEO_DATA from "lib/data/seo-data"; // Basic SEO data

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: SEO_DATA.siteName,
    template: "%s | The Big Brother Program",
  },
  description: SEO_DATA.description,
  applicationName: SEO_DATA.shortName,
  keywords: [
    "The Big Brother Program",
    "Counselling near me",
    "higher education mentoring",
    "Study Abroad",
    "Personal development",
    "Career Building",
    "career guidance services",
    "education counseling",
    "student mentorship program",
    "career planning for students",
    "career guidance for high school students",
    "education and career counseling services",
    "career change guidance",
    "international university admissions",
    "aviation industry careers",
    "Short Term Aviation Courses",
    "3 Month Aviation Courses",
    "GMR Aero Academy Courses",
    "Online Learning Aviation",
    "Aviation Industry Jobs",
    "Aviation Career Paths",
  ],
  metadataBase: new URL("https://tbbp.in"),
  alternates: {
    canonical: "/", // The canonical URL of the page
  },
  openGraph: {
    title: SEO_DATA.siteName,
    description: SEO_DATA.description,
    url: "https://tbbp.in/",
    siteName: SEO_DATA.siteName,
    images: [
      {
        url: "https://tbbp.in/og.png",
        width: 1200,
        height: 628,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.siteName,
    description: SEO_DATA.description,
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://tbbp.in/og.png"], // Must be an aboslute URL
  },
  category: "mentorship",
};

// Component to wrap the entire app in
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={poppins.className} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLRLSFLKWW"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLRLSFLKWW');
          `}
        </Script>
      </body>
    </html>
  );
}
