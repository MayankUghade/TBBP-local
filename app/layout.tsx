import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Poppins } from "next/font/google";
import "@mantine/carousel/styles.css";
import "./globals.css";
import TanstackProvider from "lib/providers/TanstackProvider";
import { Metadata } from "next";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Big Brother",
    template: "%s | Big Brother",
  },
  description:
    "We are your dedicated partners in journey towards career success and personal development.",
  applicationName: "The Big Brother",
  keywords: [
    "Education",
    "Counselling",
    "Higher Studies",
    "Study Abroad",
    "Personal development",
    "career",
    "Consultations",
    "Career Building",
  ],
  metadataBase: new URL("https://tbbp.in"),
  openGraph: {
    title: "Big Brother",
    description:
      "We are your dedicated partners in journey towards career success and personal development.",
    url: "https://tbbp.in/",
    siteName: "Big Brother",
    images: [
      {
        url: "https://tbbp.in/og.png", // Must be an absolute URL
        width: 1200,
        height: 628,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Brother",
    description:
      "We are your dedicated partners in journey towards career success and personal development.",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://tbbp.in/og.png"], // Must be an absolute URL
  },
  category: "education",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={poppins.className}>
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
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <TanstackProvider>
          <MantineProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </MantineProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
