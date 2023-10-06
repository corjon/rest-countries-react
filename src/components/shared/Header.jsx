import DarkModeButton from './DarkModeButton.jsx';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <DarkModeButton />
    </header>
  );
}