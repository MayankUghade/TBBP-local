"use client";
import { Accordion } from "@mantine/core";
import classes from "./styles.module.css";
import { IconPlus } from "@tabler/icons-react";
import faqs from "./data.json";

const FaqAccordian = () => {
  return (
    <>
      <Accordion
        classNames={{
          chevron: classes.chevron,
          content: classes.content,
          label: classes.label,
        }}
        chevron={<IconPlus className={classes.icon} />}
        variant="default"
      >
        {" "}
        {faqs.map((que) => (
          <Accordion.Item
            key={que.question}
            className={classes.item}
            value={que.answer}
          >
            <Accordion.Control>{que.question}</Accordion.Control>
            <Accordion.Panel>{que.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};
export default FaqAccordian;
