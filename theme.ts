"use client";

import { Button, Input, createTheme } from "@mantine/core";
import classes from "./lib/styles/input.module.css";

export const theme = createTheme({
  fontFamily: "var(--font-poppins)",
  primaryColor: "brand",
  primaryShade: 9,
  defaultRadius: 40,
  defaultGradient: {
    from: "brand.9",
    to: "red.5",
    deg: 45,
  },
  colors: {
    brand: [
      "#ebf1ff",
      "#d3dff9",
      "#a2bdf6",
      "#6f98f4",
      "#487af2",
      "#3366f2",
      "#285cf3",
      "#1e4dd9",
      "#1644c2",
      "#033aab",
    ],
    indigo: [
      "#e7f1ff",
      "#d0deff",
      "#9fb9fc",
      "#6b93f8",
      "#4072f5",
      "#245df3",
      "#1153f3",
      "#0044d9",
      "#003cc3",
      "#0033ad",
    ],
    red: [
      "#ffe9eb",
      "#ffd0d3",
      "#fc9da2",
      "#fb686f",
      "#fb3c44",
      "#fb2429",
      "#fc171b",
      "#e00b10",
      "#c8010c",
      "#af0007",
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        tt: "uppercase",
      },
    }),
    Input: Input.extend({ classNames: classes }),
  },
});
