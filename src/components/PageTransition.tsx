import { motion, type Variants } from 'framer-motion';

const DURATION = 0.6;

const variants: Variants = {
  initial: {
    opacity: 0,
    filter: 'blur(4px)',
  },
  enter: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(6px)',
    transition: {
      duration: DURATION * 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
