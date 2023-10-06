import SearchBar from './SearchBar.jsx';
import FilterDropdown from './FilterDropdown.jsx';
import styles from './SearchAndFilterContainer.module.css';

export default function SearchAndFilterContainer() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <FilterDropdown />
    </div>
  );
}