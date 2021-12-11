import searchIconSrc from '../../assets/desktop/icon-search.svg';
import locationIconSrc from '../../assets/desktop/icon-location.svg';

import styles from './Input.module.css';
import { forwardRef } from 'react';
import useResponsiveText from '../../hooks/useResponsiveText';

const Input = forwardRef((props, ref) => {
  const placeholder = useResponsiveText(
    props.placeholder,
    props.placeholderResponsive
  );

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
        placeholder={placeholder}
        ref={ref}
      />
    </label>
  );
});

export default Input;
