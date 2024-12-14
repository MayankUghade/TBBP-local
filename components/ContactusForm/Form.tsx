"use client";

import {
  TextInput,
  Textarea,
  Group,
  Button,
  Text,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./styles.module.css";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { AxiosError } from "axios";
import { IconCheck } from "@tabler/icons-react";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const SimpleContactForm = () => {
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
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit(values);
        })}
        className={classes.form}
      >
        <TextInput
          label="Name"
          name="name"
          variant="underline"
          withAsterisk
          placeholder="Your name"
          disabled={isPending}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          name="email"
          variant="underline"
          withAsterisk
          placeholder="example@gmail.com"
          disabled={isPending}
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Phone"
          name="phone"
          variant="underline"
          placeholder="+91"
          disabled={isPending}
          {...form.getInputProps("phone")}
        />
        <Textarea
          mt="md"
          label="Message"
          maxRows={10}
          minRows={5}
          autosize
          placeholder="Your message..."
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
          <Text>or</Text>
          <Anchor href="#" c="indigo">
            Book a free consultation call
          </Anchor>
        </Group> */}
      </form>
    </>
  );
};

export default SimpleContactForm;
