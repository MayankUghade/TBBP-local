"use client";
import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Button,
  Anchor,
  Tooltip,
  Box,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconArrowUp,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandX,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "@mantine/hooks";
import ButtonGestureRotate from "lib/animations/ButtonGestureRotate";

const footerNav = {
  title: "Quick Links",
  links: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    // { label: "Gallery", link: "/gallery" },
  ],
};

const footerContact = {
  title: "Get In Touch",
  links: [
    { label: "Contact Us", link: "/contactus" },
    // { label: "Write a Review", link: "/user-review" },
  ],
};

const footerSocials = {
  title: "Follow Us",
  links: [
    // {
    //   label: "Twitter",
    //   link: "https://twitter.com",
    //   icon: <IconBrandX />,
    // },
    {
      label: "Instagram",
      link: "https://www.instagram.com/bigbrother.in",
      icon: <IconBrandInstagram />,
    },
    // {
    //   label: "LinkedIn",
    //   link: "https://linkedin.com",
    //   icon: <IconBrandLinkedin />,
    // },
    // {
    //   label: "Facebook",
    //   link: "https://facebook.com",
    //   icon: <IconBrandFacebook />,
    // },
  ],
};

// component to render footer links
const FooterLinks = () => {
  return (
    <>
      <div className={classes.footerLinks}>
        <Text size="sm" tt="uppercase" fw="600">
          {footerSocials.title}
        </Text>
        <ul className={classes.quicklinks}>
          {footerSocials.links.map((link) => (
            <li key={link.label}>
              <Group gap={5} className={classes.socialLink}>
                <Anchor
                  href={link.link}
                  target="_blank"
                  rel="noopener"
                  size="sm"
                  c="dark"
                  classNames={{ root: classes.socialLink }}
                >
                  {link.label}
                </Anchor>
              </Group>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footerLinks}>
        <Text size="sm" tt="uppercase" fw="600">
          {footerNav.title}
        </Text>
        <ul className={classes.quicklinks}>
          {footerNav.links.map((link) => (
            <li key={link.label}>
              <Link href={link.link} className={classes.quicklink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={classes.footerLinks}>
        <Text size="sm" tt="uppercase" fw="600">
          {footerContact.title}
        </Text>
        <ul className={classes.quicklinks}>
          {footerContact.links.map((link) => (
            <li key={link.label}>
              <Link href={link.link} className={classes.quicklink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

const Footer = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logoBox}>
          <Image
            src="/logo.svg"
            width={180}
            height={140}
            className={classes.logo}
            alt="Big Brother logo"
          />
          <Text size="sm" c="dimmed" className={classes.description}>
            We are your dedicated partners in journey towards career success and
            personal development.
          </Text>
        </div>
        <div className={classes.groups}>
          <FooterLinks />
        </div>
      </Container>

      {/* after footer */}
      <Container size="lg" className={classes.afterFooter}>
        <Text size="sm">
          The Big Brother Program | © {new Date().getFullYear()} All Rights
          Reserved.
        </Text>
        <Box className={classes.afterFooterAction}>
          {/* <Button
            component={Link}
            href="/user-review"
            variant="subtle"
            rightSection={<IconArrowNarrowRight />}
            hiddenFrom="sm"
          >
            Write us a review
          </Button> */}
          <ButtonGestureRotate>
            <Tooltip
              label="Back to Top"
              transitionProps={{ transition: "slide-up" }}
            >
              <ActionIcon
                variant="filled"
                size="xl"
                radius="xl"
                aria-label="Back to top"
                style={{
                  backgroundColor: "var(--brand-maroon)",
                }}
                onClick={() => scrollTo({ y: 0 })}
              >
                <IconArrowUp
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </ButtonGestureRotate>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
