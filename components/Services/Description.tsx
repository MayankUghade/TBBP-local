"use client";
import { List, Text, Title } from "@mantine/core";

export type ServiceDescriptionPropTypes =
  | {
      id: string;
      type: "list";
      description: string;
      content: string[];
    }
  | {
      id: string;
      type: "paragraph";
      description: undefined;
      content: string;
    };

const ServiceDescription = ({
  id,
  type,
  description,
  content,
}: ServiceDescriptionPropTypes) => {
  if (type === "list") {
    return (
      <>
        <Title order={4} size="lg" c="red.6" tt="capitalize" fw={600}>
          {description}
        </Title>
        <List withPadding c="dark.5">
          {content.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </>
    );
  }
  return <Text mt={10}>{content}</Text>;
};
export default ServiceDescription;
