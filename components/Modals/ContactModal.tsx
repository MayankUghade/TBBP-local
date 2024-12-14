"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Text,
  Anchor,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./styles.module.css";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { ContactFormValues } from "../ContactusForm/Form";
import { AxiosError } from "axios";
import { IconCheck } from "@tabler/icons-react";

interface ContactModalProps {
  openModal: boolean;
  closeModal: any;
}

const ContactModal = ({ openModal, closeModal }: ContactModalProps) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2
          ? "Name should be atleast 2 characters long"
          : null,
      email: (value) => (!/^\S+@\S+$/.test(value) ? "Invalid email" : null),
      phone: (value) => {
        const phoneNum = value.replace(/[^\d]/g, "");
        if (phoneNum) {
          if (phoneNum.length > 6 && phoneNum.length < 11) {
            return null;
          } else return "Phone number should be between 6 - 11 characters";
        }
      },
      message: (value) => (value.length < 2 ? "Please enter a message" : null),
    },
  });

  const {
    mutate: onSubmit,
    isPending,
    isSuccess,
    data,
    reset,
  } = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      await axiosInstance.post("/contact-us/", values);
    },
    onSuccess: () => {
      form.reset();
      setTimeout(() => reset(), 2000);
    },
    onError: (err: AxiosError) => {
      alert(err.response?.data);
    },
  });

  return (
    <>
      <Modal
        opened={openModal}
        onClose={closeModal}
        title="Contact Us"
        size="xl"
        padding="xl"
        centered
      >
        <form
          onSubmit={form.onSubmit((values) => {
            onSubmit(values);
          })}
          className={classes.contactForm}
        >
          <TextInput
            label="Name"
            name="name"
            variant="underline"
            disabled={isPending}
            placeholder="Your name"
            withAsterisk
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="example@email.com"
            name="email"
            variant="underline"
            disabled={isPending}
            withAsterisk
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Phone"
            placeholder="+91"
            name="phone"
            variant="underline"
            disabled={isPending}
            {...form.getInputProps("phone")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message..."
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="underline"
            disabled={isPending}
            withAsterisk
            {...form.getInputProps("message")}
          />

          <Button
            type="submit"
            my="lg"
            loading={isPending}
            leftSection={isSuccess && <IconCheck />}
          >
            {isSuccess ? "Submitted" : "Submit"}
          </Button>

          {/* <Group className={classes.consultationText}>
            <Text size="sm">or</Text>
            <Anchor href="#" c="indigo" size="sm">
              Book a free consultation call
            </Anchor>
          </Group> */}
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;
