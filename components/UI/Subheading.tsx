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
      <Title order={1} className={classes.subheading}>
        {title}
      </Title>
      {desc && (
        <Text c="dimmed" mt="sm" className="sectionDescription">
          {desc}
        </Text>
      )}
    </>
  );
};
export default Subheading;
