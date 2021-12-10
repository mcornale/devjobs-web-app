import Button from '../UI/Button';
import CompanyLogo from './CompanyLogo';
import jobsData from '../../assets/data.json';

import styles from './CompanyHeader.module.css';

const CompanyHeader = () => {
  return (
    <section className={styles.companyHeader}>
      <CompanyLogo
        logo={jobsData[0].logo}
        logoBackground={jobsData[0].logoBackground}
        big
      />
      <div className={styles.companyHeaderInfos}>
        <div>
          <h2>Scott</h2>
          <p>scott.com</p>
        </div>
        <Button secondary>Company Site</Button>
      </div>
    </section>
  );
};

export default CompanyHeader;
