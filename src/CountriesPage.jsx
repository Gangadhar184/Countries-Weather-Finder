import { useNavigate } from 'react-router-dom';
import './App.css';

const CountriesPage = ({ countries }) => {
  const navigate = useNavigate();

  const showWeather = (capital) => {
    if (!capital) return;
    navigate(`/weather/${capital}`);
  }

  return (
    <div className='coutries-list'>
      {countries.map((country) => (
        <div key={country.cca2} className="card">
          <h2 className='country-name'>{country.name?.common || country.name?.official}</h2>
          <p className='country-capital'>Capital: {country.capital?.[0]}</p>
          <p className='region'>Region: {country.region}</p>
          <img className='flag' src={country.flags?.png} alt={country.name?.common} />
          <button className='weather-button' onClick={() => showWeather(country.capital?.[0])}>Weather</button>
        </div>
      ))}
    </div>
  );
}

export default CountriesPage;
