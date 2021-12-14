import { Link } from 'react-router-dom';
import CompanyLogo from './CompanyLogo';
import { motion } from 'framer-motion/dist/framer-motion';

import styles from './JobCard.module.css';
import JobInfos from './JobInfos';

const Job = (props) => {
  return (
    <motion.article
      className={styles.jobCard}
      variants={props.variants}
      transition={{ type: 'tween', duration: 0.5 }}
    >
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
    </motion.article>
  );
};

export default Job;
