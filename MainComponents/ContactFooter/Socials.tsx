"use client";
import { ActionIcon, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import ButtonGestureRotate from "lib/animations/ButtonGestureRotate";
import { INSTAGRAM_URL, LINKEDIN_URL } from "lib/data/constants";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <Group>
      <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          style={{
            background: "var(--brand-blue)",
            borderRadius: "50%",
          }}
          size="xl"
          aria-label="Instagram"
          component="a"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
        >
          <AiFillInstagram
            style={{
              fontSize: "1.5rem",
            }}
          />
        </ActionIcon>
      </ButtonGestureRotate>
      <ButtonGestureRotate>
        <ActionIcon
          variant="filled"
          style={{
            background: "var(--brand-blue)",
            borderRadius: "50%",
          }}
          size="xl"
          aria-label="LinkedIn"
          component="a"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener"
        >
          <FaLinkedinIn
            style={{
              fontSize: "1.5rem",
            }}
          />
        </ActionIcon>
      </ButtonGestureRotate>
      {/* 
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
          <FaFacebookF
            style={{ fontSize: "1.5rem" }}
          />
        </ActionIcon>
      </ButtonGestureRotate> */}
    </Group>
  );
};
export default Socials;
