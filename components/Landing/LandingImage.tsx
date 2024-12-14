"use client";
import { motion } from "framer-motion";
import { useMouse } from "@mantine/hooks";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import classes from "./styles.module.css";

interface LandingImageProps {
  imgUrl: StaticImageData;
  width: number;
  height: number;
}

const LandingImage = ({ imgUrl, width, height }: LandingImageProps) => {
  const { x, y } = useMouse();
  const imageRef = useRef<HTMLImageElement>(null);
  return (
    <motion.div
      animate={{ x: -x / 15, y: -y / 15 }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <Image
        src={imgUrl}
        ref={imageRef}
        className={classes.image}
        width={width}
        height={height}
        style={{ objectFit: "cover" }}
        alt=" "
      />
    </motion.div>
  );
};
export default LandingImage;
