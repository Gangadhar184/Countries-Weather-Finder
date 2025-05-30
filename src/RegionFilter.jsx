

const RegionFilter = ({ selectedRegion, setSelectedRegion, regionOptions }) => {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
    >
      {regionOptions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
