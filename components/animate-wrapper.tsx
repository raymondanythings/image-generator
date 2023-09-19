import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        damping: 4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
