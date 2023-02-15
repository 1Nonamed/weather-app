import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { Weather } from './components/Weather/Weather'
// import { useWeather } from './hooks/useWeather'
// import { useGeolocation } from './hooks/useGeolocation'
// import geolocationResults from './mocks/geolocationAPI.json'
import { weatherData } from './utils/weather'
import { useEffect, useState } from 'react'

export const WeatherApp = () => {
  const [weather, setWeather] = useState({})
  // const { initialWeather, isLoading } = useGeolocation()
  // const { city } = useWeather({ initialWeather })
  // console.log(openWeatherResults)

  // if ('geolocation' in navigator) {
  //   console.log(
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       const lat = pos.coords.latitude
  //       const lon = pos.coords.longitude
  //       console.log(lat, lon)
  //     })
  //   )
  // }
  useEffect(() => {
    const weather = weatherData()
    setWeather(weather)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Form />
        {/* <p>Search a city</p> */}
        {/* {isLoading && <h1>Loading...</h1>} */}
        <Weather
          weather={weather}
          // isLoading={isLoading}
          // units={units}
          // changeUnits={changeMetricSystem}
          // isError={isError}
        />
      </Container>
    </>
  )
}
