import Button from '../UI/Button';
import CompanyLogo from './CompanyLogo';

import styles from './CompanyHeader.module.css';

const CompanyHeader = (props) => {
  return (
    <section className={styles.companyHeader}>
      <CompanyLogo
        logo={props.logo}
        logoBackground={props.logoBackground}
        big
      />
      <div className={styles.companyHeaderInfos}>
        <div>
          <h2>{props.company}</h2>
          <p>{props.website}</p>
        </div>
        <a href={props.website} target='_blank' rel='noreferrer'>
          <Button secondary>Company Site</Button>
        </a>
      </div>
    </section>
  );
};

export default CompanyHeader;
