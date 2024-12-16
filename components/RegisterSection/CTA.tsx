"use client";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const CTA = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button my="lg" size="md" onClick={open}>
        register with us
      </Button>
    </>
  );
};
export default CTA;
