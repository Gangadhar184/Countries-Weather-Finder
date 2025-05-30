import { useEffect, useState } from "react";
import { COUNTRIES } from "./constants";
import './App.css';
import CountriesPage from "./CountriesPage";
import SearchBox from "./SearchBox";
import RegionFilter from "./RegionFilter";
import useDebounce from "./Hooks/useDebounce";


const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const debouncedSearch = useDebounce(searchCountry, 500);

  const countriesData = async () => {
    const countriesList = await fetch(COUNTRIES);
    const data = await countriesList.json();
    setCountries(data);
  }

  useEffect(() => {
    countriesData();
  }, [])

  const normalizedSearch = debouncedSearch.trim().toLowerCase();

  const filterCountries = countries.filter((country) => {
    const matchName =
      country.name?.official.toLowerCase().includes(normalizedSearch) ||
      country.name?.common.toLowerCase().includes(normalizedSearch);

    const matchRegion =
      selectedRegion === 'All' || country.region === selectedRegion;

    return matchName && matchRegion;
  });

  const regionOptions = [
    "All", ...Array.from(new Set(countries.map((c) => c.region).filter(Boolean)))
  ]


  return (
    <>
      <SearchBox searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <RegionFilter selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        regionOptions={regionOptions} />
      <CountriesPage countries={filterCountries} />
   
    </>
  )

}
export default App;
