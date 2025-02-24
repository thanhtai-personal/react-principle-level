import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

export const EaseInBackFramer = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: [0.6, -0.28, 0.735, 0.045], // ease-in-back
        duration: 0.8,
        delay: 0.3,
      }}
      className="h-full rounded-lg p-4"
    >
      {children}
    </motion.div>
  );
};
