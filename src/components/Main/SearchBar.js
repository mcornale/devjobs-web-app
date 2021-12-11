import { useContext, useRef } from 'react';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import styles from './SearchBar.module.css';
import { JobsContext } from '../../store/JobsContextProvider';

const SearchBar = () => {
  const { updateFilterParams } = useContext(JobsContext);

  const filterByInfosInput = useRef();
  const filterByLocationInput = useRef();
  const fullTimeOnlyInput = useRef();

  const submitSearchHandler = (e) => {
    e.preventDefault();

    updateFilterParams(
      filterByInfosInput.current.value,
      filterByLocationInput.current.value,
      fullTimeOnlyInput.current.checked
    );
  };

  return (
    <form onSubmit={submitSearchHandler} className={styles.searchBar}>
      <Input
        id='filterByInfos'
        placeholder='Filter by title, companies, expertise...'
        ref={filterByInfosInput}
      />
      <Input
        id='filterByLocation'
        placeholder='Filter by location...'
        ref={filterByLocationInput}
      />
      <Checkbox
        id='filterByFullTime'
        text='Full time only'
        ref={fullTimeOnlyInput}
      />
      <Button primary>Search</Button>
    </form>
  );
};

export default SearchBar;
