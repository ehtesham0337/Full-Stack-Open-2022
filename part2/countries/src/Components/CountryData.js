import React from 'react'
import WeatherData from './WeatherData'

function CountryData({countriesToShow}) {
  let city = []
  
  return (
    <>
    <div>
        {
            countriesToShow.map((country) => { 
              const languages = Object.values(country.languages)
              city = country.capital
              
                return(
                  <>
                <h1 > {country.name.common} </h1>
                <div> Capital: {country.capital} </div>
                <div> Area: {country.area} </div>
                <h2>Languages</h2>
                  <ul>
                    {languages.map((data) => <li key={data}> {data} </li>)}
                  </ul> 
                <img src={country.flags.png} alt='flag' width='350px' height='250px'></img>  
                </>
                )
            })
        }
        <WeatherData city={city}/>
    </div>

    </>
  )
}

export default CountryData