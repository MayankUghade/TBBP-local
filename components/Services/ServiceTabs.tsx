"use client";
import { FloatingIndicator, Tabs } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./styles.module.css";

const ServiceTabs = ({
  tabs,
}: {
  tabs: {
    label: string;
    href: string;
  }[];
}) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  const router = useRouter();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);

  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  const onTabChange = (value: string | null) => {
    router.push(`#${value}`);
    setActiveTab(value);
  };

  return (
    <Tabs
      variant="none"
      value={activeTab}
      onChange={onTabChange}
      className={classes.list}
    >
      <Tabs.List ref={setRootRef}>
        {tabs.map((tab, index) => (
          <Tabs.Tab
            key={tab.label + "-tab"}
            ref={setControlRef(tab.href)}
            value={tab.href}
            className={classes.tab}
          >
            {tab.label}
          </Tabs.Tab>
        ))}

        <FloatingIndicator
          target={activeTab ? controlsRefs[activeTab] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>
    </Tabs>
  );
};
export default ServiceTabs;
