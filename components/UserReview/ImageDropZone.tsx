import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { UseFormReturnType } from "@mantine/form";
import { ReviewFormProps } from "./ReviewForm";
import { Group, rem, Text } from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
import classes from "./styles.module.css";
import { IconUserSquareRounded } from "@tabler/icons-react";

interface ImageDropProps {
  form: UseFormReturnType<ReviewFormProps>;
}

const ImageDropZone = ({ form }: ImageDropProps) => {
  const thumbs = () => {
    const preview = form.values.photo && URL.createObjectURL(form.values.photo);
    return (
      form.values.photo && (
        <div key={form.values.photo.name}>
          <div>
            <Image
              src={preview || ""}
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(preview ?? "");
              }}
              width={100}
              height={100}
              className={classes.imagePreview}
              alt={form.values.photo.name}
            />
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <Group gap={10}>
        {thumbs()}
        <Dropzone
          onDrop={(files) => {
            form.setFieldValue("photo", files[0]);
          }}
          onReject={() => form.setFieldError("photo", "Invalid file formats")}
          accept={IMAGE_MIME_TYPE}
          multiple={false}
          name="photo"
          classNames={{ root: classes.dropzone }}
        >
          <Group
            justify="center"
            gap="xl"
            mih={100}
            style={{ pointerEvents: "none" }}
            className={classes.dropzoneGroup}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(40),
                  height: rem(40),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(40),
                  height: rem(40),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconUserSquareRounded
                style={{
                  width: rem(40),
                  height: rem(40),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text c="dimmed" inline className={classes.dropzoneText}>
                Drag image here or click to select files
              </Text>
            </div>
          </Group>
        </Dropzone>
      </Group>
      {form.errors.photo && (
        <Text c="red" mt={5}>
          {form.errors.photo}
        </Text>
      )}
    </>
  );
};
export default ImageDropZone;
