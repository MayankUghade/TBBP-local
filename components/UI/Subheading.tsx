import { Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

interface SubheadingProps {
  title: string;
  desc?: string;
}

/**
 * Subheading component for sections of pages
 */
const Subheading = ({ title, desc }: SubheadingProps) => {
  return (
    <>
      <Title order={2} className={classes.subheading}>
        {title}
      </Title>
      {desc && (
        <Text c="grey.8" mt="sm" className="sectionDescription">
          {desc}
        </Text>
      )}
    </>
  );
};
export default Subheading;
