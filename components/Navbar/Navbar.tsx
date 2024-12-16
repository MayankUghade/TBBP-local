"use client";

import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Button,
  Drawer,
  Box,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "../Modals/ContactModal";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import servicesData from "../../lib/data/services.json";
import { contactUrl } from "lib/data/home";

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
  const categories = servicesData.categories;

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
            {/* Services */}
            <Menu
              trigger="hover"
              shadow="md"
              width={200}
              radius="md"
              offset={20}
            >
              <Menu.Target>
                <Text className={classes.link}>Services</Text>
              </Menu.Target>

              <Menu.Dropdown>
                {Object.values(categories).map((category) => (
                  <Menu.Item
                    key={category.id + "-nav"}
                    component={Link}
                    href={`/services/${category.id}`}
                  >
                    {category.name}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            {/* TODO: Add whatsapp link here */}
            <Link href={contactUrl} target="_blank" rel="noopener noreferrer">
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
            <Title order={4} tt="uppercase" mt={20}>
              services
            </Title>
            {
              // Services
              Object.values(categories).map((category) => (
                <Link
                  key={category.id}
                  href={`/services/${category.id}`}
                  className={`${classes.link}`}
                  onClick={closeDrawer}
                >
                  {category.name}
                </Link>
              ))
            }
            <Link href={contactUrl} target="_blank" rel="noopener noreferrer">
              <PrimaryBtn mt={20}>Contact Us</PrimaryBtn>
            </Link>
          </Drawer>
        </Container>
      </header>
      <Box className={scroll.y > 200 ? classes.showHeaderSpace : undefined} />
    </>
  );
}

export default Navbar;
