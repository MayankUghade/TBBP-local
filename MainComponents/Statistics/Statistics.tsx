import { Container } from "@mantine/core";
import StatCard from "../UI/Cards/StatCard";
import classes from "./styles.module.css";

const stats = [
  {
    label: "Success Driven Seminars",
    from: 80,
    to: 100,
    numberSuffix: "%",
    icon: "/stats/success.svg",
  },
  {
    label: "Industry Experts",
    from: 450,
    to: 500,
    numberSuffix: "+",
    icon: "/stats/industry.svg",
  },
  {
    label: "Career Choice Consultancies",
    from: 450,
    to: 500,
    numberSuffix: "+",
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
          from={stat.from}
          to={stat.to}
          numberSuffix={stat.numberSuffix}
          icon={stat.icon}
        />
      ))}
    </Container>
  );
};

export default Statistics;
