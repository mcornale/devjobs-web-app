import CompanyLogo from './CompanyLogo';

import styles from './JobCard.module.css';
import JobInfos from './JobInfos';

const Job = (props) => {
  return (
    <article className={styles.jobCard}>
      <CompanyLogo
        logo={props.logo}
        logoBackground={props.logoBackground}
        small
      />
      <JobInfos postedAt={props.postedAt} contract={props.contract} />
      <h3 className={styles.jobCardPosition}>{props.position}</h3>
      <p>{props.company}</p>
      <h4 className={styles.jobCardLocation}>{props.location}</h4>
    </article>
  );
};

export default Job;
