"use client";
import { Box, TextInput, Textarea, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import ImageDropZone from "./ImageDropZone";
import classes from "./styles.module.css";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import { AxiosError } from "axios";
import { IconCheck } from "@tabler/icons-react";

export interface ReviewFormProps {
  photo: File | undefined;
  name: string;
  title: string;
  content: string;
}

const ReviewForm = () => {
  const form = useForm<ReviewFormProps>({
    initialValues: {
      photo: undefined,
      name: "",
      title: "",
      content: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
      title: (value) =>
        value.trim().length === 0 ? "Designation is required" : null,
      photo: (value) => (!value ? "Image is required" : null),
      content: (value) =>
        value.trim().length === 0 ? "Please enter your review" : null,
    },
  });

  const {
    mutate: onSubmit,
    isPending,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: async (values: ReviewFormProps) => {
      const userData = new FormData();
      userData.append("name", values.name);
      userData.append("photo", values.photo || "");
      userData.append("title", values.title);
      userData.append("content", values.content);
      await axiosInstance.post("/add-testimonial/", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      form.reset();
      setTimeout(() => reset(), 2000);
    },
    onError: (err: AxiosError) => {
      alert(err.response?.data);
    },
  });
  console.log(form.values);
  return (
    <Box
      component="form"
      onSubmit={form.onSubmit((values: ReviewFormProps) => {
        onSubmit(values);
      })}
      className={classes.form}
    >
      <TextInput
        label="Name"
        placeholder="Your name"
        name="name"
        variant="underline"
        disabled={isPending}
        {...form.getInputProps("name")}
      />
      {/* image dropzone */}
      <ImageDropZone form={form} />
      <TextInput
        label="Designation"
        placeholder="Student/Professional"
        mt="md"
        name="title"
        variant="underline"
        disabled={isPending}
        {...form.getInputProps("title")}
      />
      <Textarea
        mt="md"
        label="Review"
        placeholder="Your review"
        maxRows={10}
        minRows={5}
        autosize
        name="content"
        variant="underline"
        disabled={isPending}
        {...form.getInputProps("content")}
      />

      <Group justify="center" mt="xl">
        <Button
          type="submit"
          size="md"
          loading={isPending}
          leftSection={isSuccess && <IconCheck />}
        >
          {isSuccess ? "Submitted" : "Submit Review"}
        </Button>
      </Group>
    </Box>
  );
};
export default ReviewForm;
