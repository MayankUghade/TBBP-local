"use client";
import { Button } from "@mantine/core";
import ContactModal from "../Modals/ContactModal";
import { useDisclosure } from "@mantine/hooks";

const CTA = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button my="lg" size="md" onClick={open}>
        register with us
      </Button>
      <ContactModal openModal={opened} closeModal={close} />
    </>
  );
};
export default CTA;
