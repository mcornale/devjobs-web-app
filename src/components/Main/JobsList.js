import { useContext } from 'react';
import jobsData from '../../assets/data.json';
import Button from '../UI/Button';
import Job from './JobCard';
import { JobsContext } from '../../store/JobsContextProvider';
import includesText from '../../helpers/includesText';

import styles from './JobsList.module.css';

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
      <section className={styles.jobsGrid}>
        {filteredJobsData.map(
          (jobData, index) =>
            index < numOfJobsToShow && <Job key={jobData.id} {...jobData} />
        )}
      </section>
      {numOfJobsToShow < numOfFilteredJobs && (
        <Button onClick={updateNumOfJobsToShow} primary marginTop>
          Load more
        </Button>
      )}
    </>
  );
};

export default JobsList;
