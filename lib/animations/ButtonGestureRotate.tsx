import { motion } from "framer-motion";

const ButtonGestureRotate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ rotate: 10, scale: 1.05, transition: { type: "spring" } }}
    >
      {children}
    </motion.div>
  );
};
export default ButtonGestureRotate;
