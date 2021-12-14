import { useContext } from 'react';
import jobsData from '../../assets/data.json';
import Button from '../UI/Button';
import JobCard from './JobCard';
import { JobsContext } from '../../store/JobsContextProvider';
import includesText from '../../helpers/includesText';
import { motion } from 'framer-motion/dist/framer-motion';

import styles from './JobsList.module.css';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const JobsList = () => {
  const {
    filterByInfos,
    filterByLocation,
    fullTimeOnly,
    numOfJobsToShow,
    updateNumOfJobsToShow,
  } = useContext(JobsContext);

  const filteredJobsData = jobsData.filter((jobData) => {
    let isFoundWithInfos = false;
    let isFoundWithLocation = false;
    let isFoundWithFullTime = false;

    if (filterByInfos)
      isFoundWithInfos =
        includesText(jobData.company, filterByInfos) ||
        includesText(jobData.position, filterByInfos);
    if (filterByLocation)
      isFoundWithLocation = includesText(jobData.location, filterByLocation);
    if (fullTimeOnly)
      isFoundWithFullTime = includesText(jobData.contract, 'Full Time');

    if (filterByInfos && filterByLocation && fullTimeOnly)
      return isFoundWithInfos && isFoundWithLocation && isFoundWithFullTime;

    if (filterByInfos && filterByLocation)
      return isFoundWithInfos && isFoundWithLocation;

    if (filterByInfos && fullTimeOnly)
      return isFoundWithInfos && isFoundWithFullTime;

    if (filterByLocation && fullTimeOnly)
      return isFoundWithLocation && isFoundWithFullTime;

    if (filterByInfos) return isFoundWithInfos;
    if (filterByLocation) return isFoundWithLocation;
    if (fullTimeOnly) return isFoundWithFullTime;

    return true;
  });

  const numOfFilteredJobs = filteredJobsData.length;

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className={styles.jobsGrid}
      >
        {filteredJobsData.map(
          (jobData, index) =>
            index < numOfJobsToShow && (
              <JobCard
                key={jobData.id}
                {...jobData}
                variants={childrenVariants}
              />
            )
        )}
      </motion.section>
      {numOfJobsToShow < numOfFilteredJobs && (
        <Button onClick={updateNumOfJobsToShow} primary marginTop>
          Load more
        </Button>
      )}
    </>
  );
};

export default JobsList;
