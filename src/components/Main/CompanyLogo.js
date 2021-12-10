import styles from './CompanyLogo.module.css';

const CompanyLogo = (props) => {
  return (
    <div
      className={`${styles.companyLogo} ${
        props.small ? styles.companyLogoSmall : styles.companyLogoBig
      }`}
      style={{ backgroundColor: props.logoBackground }}
    >
      <img src={props.logo} alt='' />
    </div>
  );
};

export default CompanyLogo;
