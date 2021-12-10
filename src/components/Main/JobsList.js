import jobsData from '../../assets/data.json';
import Button from '../UI/Button';
import Job from './JobCard';

import styles from './JobList.module.css';

const JobsList = () => {
  return (
    <>
      <section className={styles.jobsGrid}>
        {jobsData.map((jobData) => (
          <Job key={jobData.id} {...jobData} />
        ))}
      </section>
      <Button primary>Load more</Button>
    </>
  );
};

export default JobsList;
