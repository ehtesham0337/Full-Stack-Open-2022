import {useEffect, useState} from 'react'
import axios from 'axios'
import React from 'react'
import Countries from './Components/Countries'
import CountryData from './Components/CountryData'

// function ApiData() {
//   return (
//     <div>App</div>
//   )
// }




function App() {
  const [country, setCountry] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
        setCountry(response.data)
      })
  }, [])

  const searchCountry = (event) => {

    const searching = event.target.value
    // console.log("Searcing now: ")
    setSearch(searching)
    setCountriesToShow(country.filter(
      (countries) => countries.name.common.toLowerCase().includes(searching.toLowerCase())
      )
    )
  }

  return (
    <div>

    

      Find Countries: 
      <input type='text' value={search} onChange={searchCountry}/>

       
      <div>
      
        {
          countriesToShow.length === 1 ?
           <CountryData countriesToShow={countriesToShow} />
            : null
        }

        {
          countriesToShow.length > 10  ?
           <div> Too many matches, specify another filter</div> 
          :   
          countriesToShow.length !== 1 
              ?
              <Countries countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />
              :
              null 
        }
     
      </div>

    </div>
  );
}

export default App;
