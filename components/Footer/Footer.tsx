"use client";
import {
  Text,
  Container,
  ActionIcon,
  Group,
  Anchor,
  Tooltip,
  Box,
} from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "@mantine/hooks";
import ButtonGestureRotate from "lib/animations/ButtonGestureRotate";
import { footerDesc, footerNav, footerSocials } from "lib/data/footer";

// component to render footer links
const FooterLinks = () => {
  return (
    <>
      <div className={classes.footerLinks}>
        <Text size="sm" tt="uppercase" fw="600" c="brand">
          {footerSocials.title}
        </Text>
        <ul className={classes.quicklinks} style={{ gap: "1.2rem" }}>
          {footerSocials.links.map((link) => (
            <li key={link.label}>
              <Group gap={10} align="center" className={classes.socialLink}>
                {link.icon}
                <Anchor
                  href={link.link}
                  target="_blank"
                  rel="noopener"
                  size="sm"
                  c="dark"
                  // classNames={{ root: classes.socialLink }}
                >
                  {link.label}
                </Anchor>
              </Group>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footerLinks}>
        <Text size="sm" tt="uppercase" fw="600" c="brand">
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
    <>
      <Box className={classes.footerWrapper}></Box>

      <footer className={classes.footer}>
        <Container size="lg" className={classes.inner}>
          <div className={classes.logoBox}>
            <Image
              src="/logo.svg"
              width={200}
              height={140}
              className={classes.logo}
              alt="Big Brother logo"
            />
            <Text size="sm" fw={500} c="grey.8" className={classes.description}>
              {footerDesc}
            </Text>
          </div>
          <div className={classes.groups}>
            <FooterLinks />
          </div>
        </Container>

        {/* after footer */}
        <Container size="lg" className={classes.afterFooter}>
          <Text c="brand">
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
                  aria-label="Navigate Back to top"
                  style={{
                    backgroundColor: "var(--brand-indigo)",
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
    </>
  );
};

export default Footer;
