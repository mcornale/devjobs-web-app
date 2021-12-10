import CompanyLogo from './CompanyLogo';

import styles from './Job.module.css';

const Job = (props) => {
  return (
    <article className={styles.job}>
      <CompanyLogo logo={props.logo} logoBackground={props.logoBackground} />
      <div className={styles.jobInfos}>
        <p>{props.postedAt}</p>
        <span className={styles.jobInfosDivider}></span>
        <p>{props.contract}</p>
      </div>
      <h3 className={styles.jobPosition}>{props.position}</h3>
      <p>{props.company}</p>
      <h4 className={styles.jobLocation}>{props.location}</h4>
    </article>
  );
};

export default Job;
