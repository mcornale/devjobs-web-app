import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <Input
        id='filterByInfos'
        placeholder='Filter by title, companies, expertise...'
      />
      <Input id='filterByLocation' placeholder='Filter by location...' />
      <Checkbox id='filterByFullTime' text='Full time only' />
      <Button primary>Search</Button>
    </form>
  );
};

export default SearchBar;
