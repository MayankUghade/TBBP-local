"use client";
import { Tabs } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const onTabChange = (value: string | null) => {
    router.push(`#${value}`);
    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab} onChange={onTabChange}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.label + "-tab"} value={tab.href}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};
export default ServiceTabs;
