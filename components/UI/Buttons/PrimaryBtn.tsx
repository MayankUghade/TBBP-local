import { Button, ButtonProps, ElementProps } from "@mantine/core";
import classes from "./styles.module.css";

interface PrimaryBtnProps
  extends ButtonProps,
    ElementProps<"button", keyof ButtonProps> {
  children: React.ReactNode;
}

const PrimaryBtn = ({ children, ...props }: PrimaryBtnProps) => {
  return (
    <Button
      classNames={{
        root: classes.primaryBtn,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
export default PrimaryBtn;
