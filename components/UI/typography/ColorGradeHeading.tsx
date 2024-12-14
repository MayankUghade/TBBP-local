import { Title } from "@mantine/core";
import classes from "./styles.module.css";

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
    <Title className={classes.title} order={1}>
      <span className={`${classes.span} ${classes.highlight1}`}>
        {textBrand}
      </span>
      <span className={`${classes.span} ${classes.highlight2}`}>
        {textIndigo}
      </span>
      <span className={`${classes.span} ${classes.highlight3}`}>{textRed}</span>
    </Title>
  );
};
export default ColorGradeHeading;
