import jobsData from '../../assets/data.json';
import Button from '../UI/Button';
import JobInfos from './JobInfos';

import styles from './JobDescription.module.css';

const JobDescription = () => {
  return (
    <section className={styles.jobDescription}>
      <div className={styles.jobDescriptionDetails}>
        <div>
          <JobInfos
            postedAt={jobsData[0].postedAt}
            contract={jobsData[0].contract}
          />
          <h1 className={styles.jobDescriptionPosition}>
            {jobsData[0].position}
          </h1>
          <h4>{jobsData[0].location}</h4>
        </div>

        <Button primary>Apply now</Button>
      </div>
      <div>
        <p>{jobsData[0].description}</p>
      </div>
      <div>
        <h3>Requirements</h3>
        <p>{jobsData[0].requirements.content}</p>
        <ul>
          {jobsData[0].requirements.items.map((item) => (
            <li>
              <span className={styles.jobItemsDots}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>What You Will Do</h3>
        <p>{jobsData[0].role.content}</p>
        <ol>
          {jobsData[0].role.items.map((item, index) => (
            <li>
              <span className={styles.jobItemsNumbers}>{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JobDescription;
