import classes from "./styles.module.css";
import classNames from "classnames";

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
    <h1 className={classes.heroHeading}>
      <span className={cx(classes.span, classes.highlight1)}>{textBrand}</span>
      <span className={cx(classes.span, classes.highlight2)}>{textIndigo}</span>
      <span className={cx(classes.span, classes.highlight3)}>{textRed}</span>
    </h1>
  );
};
export default ColorGradeHeading;
