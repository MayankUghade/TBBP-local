import { Text, Title } from "@mantine/core";

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
      <Title
        order={1}
        tt="capitalize"
        style={{
          color: `var(--brand-blue)`,
          textTransform: "uppercase",
        }}
      >
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
