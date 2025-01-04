"use client";
import classes from "./styles.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";

const cx = classNames.bind(classes);

const ColorGradeHeading = ({
  textBrand = "Your Guide,",
  textIndigo = "Your Mentor,",
  textRed = "Your Big Brother",
}: {
  textBrand?: string;
  textIndigo?: string;
  textRed?: string;
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      }}
      viewport={{ once: true, amount: "some" }}
      className={classes.heroHeading}
    >
      <span className={cx(classes.span, classes.highlight1)}>{textBrand}</span>
      <span className={cx(classes.span, classes.highlight2)}>{textIndigo}</span>
      <span className={cx(classes.span, classes.highlight3)}>{textRed}</span>
    </motion.h1>
  );
};
export default ColorGradeHeading;
