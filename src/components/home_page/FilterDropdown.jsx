import styles from './FilterDropdown.module.css';

export default function FilterDropdown() {
  return (
    <select className={styles.dropdown}>
      <option>Filter by region...</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
}