import { Paper, Text } from "@mantine/core";
import Image from "next/image";
import classes from "../styles.module.css";
import { useMouse } from "@mantine/hooks";
import { useRef, useState } from "react";

interface ServiceCardProps {
  img: string;
  title: string;
  desc: string;
}

const ServiceCard = ({ img, title, desc }: ServiceCardProps) => {
  const { ref, x, y } = useMouse({ resetOnExit: true });
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(`${classes.serviceCursor}`);
  // animation
  const handleMouseMove = () => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
      setHover(`${classes.serviceCursor} ${classes.hovered}`);
    }
  };

  return (
    <Paper
      className={classes.serviceCard}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHover(`${classes.serviceCursor}`)}
    >
      <div className={hover} ref={cursorRef}></div>
      <Image
        src={img}
        alt={title}
        width={80}
        height={100}
        className={classes.serviceImage}
      />
      <Text
        fw={600}
        size="lg"
        tt="uppercase"
        ta="center"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      >
        {title}
      </Text>

      <Text
        mt="xs"
        c="dimmed"
        size="sm"
        ta="center"
        style={{ position: "relative", top: -10 }}
      >
        {desc}
      </Text>
    </Paper>
  );
};

export default ServiceCard;
