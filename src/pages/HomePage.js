import SearchBar from '../components/Main/SearchBar';
import JobsList from '../components/Main/JobsList';
import { motion } from 'framer-motion/dist/framer-motion';

const HomePage = () => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ ease: 'easeInOut' }}
    >
      <SearchBar />
      <JobsList />
    </motion.main>
  );
};

export default HomePage;
