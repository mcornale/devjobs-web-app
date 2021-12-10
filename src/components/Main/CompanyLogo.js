import styles from './CompanyLogo.module.css';

const CompanyLogo = (props) => {
  return (
    <div
      className={styles.companyLogo}
      style={{ backgroundColor: props.logoBackground }}
    >
      <img src={props.logo} alt='' />
    </div>
  );
};

export default CompanyLogo;
