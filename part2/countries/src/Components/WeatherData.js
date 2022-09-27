import axios from 'axios'
import React, { useEffect, useState } from 'react'

function WeatherData({city}) {
  const apiKey = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => setWeather(response.data))
  }, [city])

  
//  console.log(weather)
  return (
    
    weather.main ?
    <>
        <h1>Weather in {city}</h1>
        <h3>Temperature | {weather.main.temp} °C</h3>
        
        <div style={{backgroundColor: 'lightblue'}}>
            <h2>{weather.weather[0].description.toUpperCase()}</h2>
            <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
        </div>
        <h3>Wind | {weather.wind.speed} m/s</h3>
    </>
    :
    null
   

  )
}

export default WeatherData