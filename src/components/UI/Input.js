import searchIconSrc from '../../assets/desktop/icon-search.svg';
import locationIconSrc from '../../assets/desktop/icon-location.svg';

import styles from './Input.module.css';

const Input = (props) => {
  return (
    <label className={styles.inputLabel} htmlFor={props.id}>
      <img
        src={props.id === 'filterByInfos' ? searchIconSrc : locationIconSrc}
        alt={`${props.id} icon`}
      />
      <input
        className={styles.inputField}
        id={props.id}
        type='text'
        placeholder={props.placeholder}
      />
    </label>
  );
};

export default Input;
