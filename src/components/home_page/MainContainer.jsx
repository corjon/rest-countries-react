import SearchAndFilterContainer from './components/home_page/SearchAndFilterContainer.jsx';
import CountryListContainer from './components/home_page/CountryListContainer.jsx';

export default function MainContainer() {
  return (
    <main>
      <SearchAndFilterContainer />
      <CountryListContainer />
    </main>
  );
}