"use client";
import { Accordion, Text } from "@mantine/core";
import classes from "./styles.module.css";
import { IconPlus } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "lib/axios";
import faqs from "./data.json";

interface FaqProps {
  question: string;
  answer: string;
}

const FaqAccordian = () => {
  // const { isPending, isSuccess, isError, data } = useQuery({
  //   queryKey: ["faq"],
  //   queryFn: async (): Promise<FaqProps[]> => {
  //     const res = await axiosInstance.get("/faq/");
  //     return res.data;
  //   },
  // });

  return (
    <>
      {/* {isPending && <Text c="dimmed">Loading data...</Text>}
      {isError && <Text c="red">Oops! Error in loading FAQs :(</Text>} */}
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
