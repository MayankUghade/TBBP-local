import { Container, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";
import reviewImage from "../../assets/review.svg";
import ReviewForm from "./ReviewForm";
import LandingImage from "../Landing/LandingImage";

const UserReview = () => {
  return (
    <Container size="lg">
      {/* header */}
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            We would love to hear{" "}
            <span className={classes.highlight}>your thoughts</span>
          </Title>
          <Text mt="md" size="lg">
            Your Dedicated Partner for Career Success and Personal Development.
            Founded on the belief that with the right guidance, every student
            can achieve their dreams.
          </Text>
        </div>
        <LandingImage imgUrl={reviewImage} width={400} height={400} />
      </div>

      {/* form */}
      <ReviewForm />
    </Container>
  );
};
export default UserReview;
