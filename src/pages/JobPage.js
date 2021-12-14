import CompanyHeader from '../components/Main/CompanyHeader';
import JobDescription from '../components/Main/JobDescription';
import JobBottomBanner from '../components/Footer/JobBottomBanner';
import { motion } from 'framer-motion/dist/framer-motion';

import jobsData from '../assets/data.json';

import { Navigate, useParams } from 'react-router-dom';

const JobPage = () => {
  let { jobId } = useParams();

  const currentJobPage = jobsData.find((jobData) => jobData.id === +jobId);

  return (
    <>
      {!currentJobPage && <Navigate replace to='/not-found' />}
      {currentJobPage && (
        <>
          <motion.main
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.4 },
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ ease: 'easeInOut' }}
          >
            <CompanyHeader
              logo={currentJobPage.logo}
              logoBackground={currentJobPage.logoBackground}
              company={currentJobPage.company}
              website={currentJobPage.website}
            />
            <JobDescription {...currentJobPage} />
          </motion.main>
          <motion.footer>
            <JobBottomBanner
              company={currentJobPage.company}
              position={currentJobPage.position}
              apply={currentJobPage.apply}
            />
          </motion.footer>
        </>
      )}
    </>
  );
};

export default JobPage;
