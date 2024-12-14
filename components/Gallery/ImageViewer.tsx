"use client";
import { Button, Modal, Paper } from "@mantine/core";
import Image from "next/image";
import classes from "./styles.module.css";
import { useDisclosure } from "@mantine/hooks";

const ImageViewer = ({ imgURL }: { imgURL: string }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Paper
        className={classes.singleImageContainer}
        component="button"
        onClick={open}
        radius="xl"
      >
        <Image
          src={imgURL}
          quality={100}
          fill={true}
          className={classes.singleImage}
          alt=" "
        />
      </Paper>

      <Modal
        opened={opened}
        onClose={close}
        size="100%"
        classNames={{ body: classes.modalContent }}
      >
        <Image
          src={imgURL}
          fill={true}
          quality={100}
          className={classes.modalImage}
          alt=" "
        />
      </Modal>
    </>
  );
};
export default ImageViewer;
