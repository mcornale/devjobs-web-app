import { Link } from 'react-router-dom';
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
      <Link to={`/${props.id}`}>
        <h3 className={styles.jobCardPosition}>{props.position}</h3>
      </Link>
      <p>{props.company}</p>
      <h4 className={styles.jobCardLocation}>{props.location}</h4>
    </article>
  );
};

export default Job;
