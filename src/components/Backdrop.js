import styles from './Backdrop.module.css';
import { motion } from 'framer-motion/dist/framer-motion';

const Backdrop = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={props.exit}
      className={styles.backdrop}
    ></motion.div>
  );
};

export default Backdrop;
