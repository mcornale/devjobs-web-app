import { useContext, useRef } from 'react';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import styles from './SearchBar.module.css';
import { JobsContext } from '../../store/JobsContextProvider';

import filterIconSrc from '../../assets/mobile/icon-filter.svg';
import searchIconSrc from '../../assets/mobile/icon-search.svg';

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
        placeholderResponsive='Filter by title...'
        ref={filterByInfosInput}
      />
      <Input
        id='filterByLocation'
        placeholder='Filter by location...'
        placeholderResponsive='Filter by location...'
        ref={filterByLocationInput}
        hideOnMobile
      />
      <Checkbox
        id='filterByFullTime'
        text='Full time only'
        responsiveText='Full time'
        ref={fullTimeOnlyInput}
        hideOnMobile
      />
      <Button primary hideOnMobile>
        Search
      </Button>
      <Button autoWidth showOnlyOnMobile noBackground>
        <img src={filterIconSrc} alt='filter icon' />
      </Button>
      <Button primary autoWidth showOnlyOnMobile>
        <img src={searchIconSrc} alt='search icon' />
      </Button>
    </form>
  );
};

export default SearchBar;
