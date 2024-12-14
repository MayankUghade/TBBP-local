"use client";
import { ActionIcon, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import ButtonGestureRotate from "lib/animations/ButtonGestureRotate";

const Socials = () => {
  return (
    <Group>
      <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          style={{
            background: "var(--brand-indigo)",
            borderRadius: "50%",
          }}
          size="xl"
          aria-label="Instagram"
          component="a"
          href="https://www.instagram.com/bigbrother.in"
          target="_blank"
          rel="noopener"
        >
          <IconBrandInstagram
            style={{
              width: "70%",
              height: "70%",
            }}
            stroke={1.5}
          />
        </ActionIcon>
      </ButtonGestureRotate>
      {/* <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          color="red"
          size="lg"
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener"
        >
          <IconBrandLinkedin
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </ButtonGestureRotate>
      <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          color="red"
          size="lg"
          aria-label="Twitter"
          component="a"
          href="https://www.x.com/"
          target="_blank"
          rel="noopener"
        >
          <IconBrandTwitter
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </ButtonGestureRotate>
      <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          color="red"
          size="lg"
          aria-label="Facebook"
          component="a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener"
        >
          <IconBrandFacebook
            style={{ width: "70%", height: "70%" }}
            stroke={1.5}
          />
        </ActionIcon>
      </ButtonGestureRotate> */}
    </Group>
  );
};
export default Socials;
