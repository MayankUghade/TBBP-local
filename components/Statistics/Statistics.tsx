import { Container } from "@mantine/core";
import StatCard from "../UI/Cards/StatCard";
import classes from "./styles.module.css";

const stats = [
  {
    label: "Success Driven Seminars",
    value: "100%",
    icon: "/stats/success.svg",
  },
  { label: "Industry Experts", value: "500+", icon: "/stats/industry.svg" },
  {
    label: "Career Choice Consultancies",
    value: "500+",
    icon: "/stats/career.svg",
  },
];

const Statistics = () => {
  return (
    <Container size="lg" className={classes.statContainer}>
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </Container>
  );
};

export default Statistics;
