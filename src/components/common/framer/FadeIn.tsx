import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  off?: boolean;
  duration?: number;
  delay?: number;
  value?: number;
  className?: string;
};

export const FadeIn = ({
  children,
  off = false,
  duration = 0.2,
  delay = 0,
  value = 0.8,
  className,
}: Props) => {
  return (
    <>
      {off ? (
        children
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: value }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: [0.6, -0.28, 0.735, 0.045], // ease-in-back
            duration: duration,
            delay: delay,
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
