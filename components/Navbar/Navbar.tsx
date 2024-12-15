"use client";

import { useState } from "react";
import { Container, Group, Burger, Button, Drawer, Box } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "../Modals/ContactModal";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  // { link: "/services", label: "Services" },
  // { link: "/gallery", label: "Gallery" },
  // { link: "/contactus", label: "Contact Us" },
];

function Navbar() {
  const pathname = usePathname();
  // const [openedModal, { open, close }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();
  const [drawerOpened, { toggle: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <header
        className={
          scroll.y > 200
            ? `${classes.stickyHeader} ${classes.header}`
            : classes.header
        }
      >
        <Container size="lg" className={classes.inner} id="navbar">
          <Link href="/">
            <Box className={classes.logo}>
              <Image
                src="/logo.svg"
                fill
                sizes="(min-width: 808px) 20vw, 40vw"
                alt="Big Brother logo"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Link>
          <Group gap={5} visibleFrom="xs" className={classes.desktopGroup}>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                className={`${classes.link} ${
                  pathname === link.link && classes.active
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* TODO: Add whatsapp link here */}
            <Link
              href="https://api.whatsapp.com/send?phone=917093116004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryBtn>Contact Us</PrimaryBtn>
            </Link>
          </Group>
          {/* <ContactModal openModal={openedModal} closeModal={close} /> */}
          <Burger
            opened={drawerOpened}
            onClick={openDrawer}
            hiddenFrom="xs"
            size="sm"
          />
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            position="top"
            padding="xl"
            size="xl"
            hiddenFrom="xs"
            transitionProps={{
              transition: "pop-top-right",
              duration: 200,
              timingFunction: "linear",
            }}
            classNames={{ body: classes.mobileNavContainer }}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                className={`${classes.link} ${
                  pathname === link.link && classes.active
                }`}
                onClick={closeDrawer}
              >
                {link.label}
              </Link>
            ))}
            <PrimaryBtn>Contact Us</PrimaryBtn>
          </Drawer>
        </Container>
      </header>
      <Box className={scroll.y > 200 ? classes.showHeaderSpace : undefined} />
    </>
  );
}

export default Navbar;
