
import './App.css'

const SearchBox = ({searchCountry, setSearchCountry}) => {

  return (
    <div className='search-box-container'>
         <input className="search-box" placeholder='Search Your Fav Country' type="text" value={searchCountry} onChange={(e)=>setSearchCountry(e.target.value)} />

    </div>
   
  )
}

export default SearchBox
