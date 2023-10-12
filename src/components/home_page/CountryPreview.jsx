export default function CountryPreview({ country }) {
  return (
    <div>
      <img src="" alt="" />
      <h2>{country.name}</h2>
      <p>{country.population}</p>
      <p>{country.region}</p>
      <p>{country.capital}</p>
    </div>
  );
}