import { motion } from 'framer-motion';

// Define tus animaciones
const animations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Crea un componente para cada punto
export const Dot = ({ delay }: { delay: number }) => (
  <motion.span
    variants={animations}
    initial="hidden"
    animate="visible"
    transition={{ delay: delay, repeat: Infinity, duration: 1 }}
  >
    .
  </motion.span>
);
