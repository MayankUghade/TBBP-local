/* eslint-disable react/no-unescaped-entities */
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./styles.module.css";
import {
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import Socials from "./Socials";
import PrimaryBtn from "../UI/Buttons/PrimaryBtn";
import Link from "next/link";
import { contactFooterData } from "lib/data/home";

const ContactFooter = () => {
  return (
    <Box className={classes.box}>
      <Container size="lg">
        <Group className={classes.group}>
          {/* left section */}
          <Stack className={classes.leftSection}>
            <Socials />
            <Box>
              <Title order={3} className={classes.heading}>
                {contactFooterData.heading}
              </Title>
              <Text c="gray.6">{contactFooterData.content}</Text>
            </Box>

            <Paper className={classes.contacts} radius="lg">
              <Group gap={8} justify="start" align="start">
                <IconPhoneFilled style={{ color: `var(--brand-blue)` }} />
                <Text>{contactFooterData.contacts.phone}</Text>
              </Group>
              <Group gap={8} justify="start" align="start">
                <IconMailFilled style={{ color: `var(--brand-blue)` }} />
                <Anchor
                  href="mailto:hello@tbbp.in"
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                  }}
                >
                  {contactFooterData.contacts.email}
                </Anchor>
              </Group>
              <Group gap={8} justify="start" align="start" wrap="nowrap">
                <IconMapPinFilled
                  style={{ color: `var(--brand-blue)`, flexShrink: 0 }}
                />
                <Anchor
                  href={contactFooterData.contacts.map}
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                  }}
                >
                  {contactFooterData.contacts.address}
                </Anchor>
              </Group>
            </Paper>

            <Link
              href="https://api.whatsapp.com/send?phone=917093116004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryBtn variant="filled" size="md">
                {contactFooterData.cta}
              </PrimaryBtn>
            </Link>
          </Stack>

          {/* right section */}
          <Stack className={classes.rightSection} gap={20}>
            <Paper className={classes.contacts} radius="lg">
              <Group gap={8} justify="start" align="start">
                <IconPhoneFilled style={{ color: `var(--brand-blue)` }} />
                <Text>{contactFooterData.contacts.phone}</Text>
              </Group>
              <Group gap={8} justify="start" align="start">
                <IconMailFilled style={{ color: `var(--brand-blue)` }} />
                <Anchor
                  href="mailto:hello@tbbp.in"
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                  }}
                >
                  {contactFooterData.contacts.email}
                </Anchor>
              </Group>
              <Group gap={8} justify="start" align="start" wrap="nowrap">
                <IconMapPinFilled
                  style={{ color: `var(--brand-blue)`, flexShrink: 0 }}
                />
                <Anchor
                  href={contactFooterData.contacts.map}
                  target="_blank"
                  rel="noopener"
                  style={{
                    color: `var(--brand-indigo)`,
                  }}
                >
                  {contactFooterData.contacts.address}
                </Anchor>
              </Group>
            </Paper>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
};
export default ContactFooter;
