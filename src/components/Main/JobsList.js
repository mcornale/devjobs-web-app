import jobsData from '../../assets/data.json';
import Button from '../UI/Button';
import Job from './Job';

import styles from './JobList.module.css';

const JobsList = () => {
  return (
    <>
      <section className={styles.jobsGrid}>
        {jobsData.map((jobData, index) => (
          <Job {...jobData} />
        ))}
      </section>
      <Button primary>Load more</Button>
    </>
  );
};

export default JobsList;
