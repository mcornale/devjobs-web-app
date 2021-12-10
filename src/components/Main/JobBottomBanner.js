import jobsData from '../../assets/data.json';
import Button from '../UI/Button';

import styles from './JobBottomBanner.module.css';

const JobBottomBanner = () => {
  return (
    <section className={styles.jobBottomBanner}>
      <div>
        <h3 className={styles.jobDescriptionPosition}>
          {jobsData[0].position}
        </h3>
        <p>{jobsData[0].company}</p>
      </div>
      <Button primary>Apply now</Button>
    </section>
  );
};

export default JobBottomBanner;
