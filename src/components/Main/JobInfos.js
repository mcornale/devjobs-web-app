import styles from './JobInfos.module.css';

const JobInfos = (props) => {
  return (
    <div className={styles.jobInfos}>
      <p>{props.postedAt}</p>
      <span className={styles.jobInfosDivider}></span>
      <p>{props.contract}</p>
    </div>
  );
};

export default JobInfos;
