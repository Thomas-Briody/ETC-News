import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Weather() {

  const [weathers, updateWeathers] = useState({
    main: {},
    weather: []
  })
  const [loadingWeather, updateLoadingWeather] = useState(true)


  useEffect(() => {
    console.log('weather use effect')
    axios.get(`http://api.openweathermap.org/data/2.5/find?q=London,gb&units=metric&appid=${process.env.apikeyweather}`)
      .then(({ data }) => {
        updateWeathers(data.list[0])
        updateLoadingWeather(false)
      })
  }, [])
  console.log(process.env.apikeyweather)

  if (loadingWeather) {
    // ? Could return a loader in here.
    return null
  }

  return <div id="weatherMainBox">

    <h4 className="title is-4">Weather in London</h4>


    <div id="flexboxWeather">

      <h2 className="title is-2" id="temperature"> {Math.round(weathers.main.temp)}°C</h2>
      <img src={`http://openweathermap.org/img/w/${weathers.weather[0].icon}.png`} alt='picture of the weather' width="80" />
    </div>
    <div>{weathers.weather[0].main}. Feels like {Math.round(weathers.main.feels_like)} °C. </div>

  </div>

}
