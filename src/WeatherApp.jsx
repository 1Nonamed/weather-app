import { Form } from './components/Form/Form'
import { Container } from './components/Container/Container'
import { Weather } from './components/Weather/Weather'
import { useWeather } from './hooks/useWeather'
// import { useGeolocation } from './hooks/useGeolocation'
// import geolocationResults from './mocks/geolocationAPI.json'

export const WeatherApp = () => {
  // const { initialWeatherData, isLoading } = useGeolocation()

  const { weather, searchCity, changeMetricSystem, isLoading } = useWeather()
  // if ('geolocation' in navigator) {
  //   console.log(
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       const lat = pos.coords.latitude
  //       const lon = pos.coords.longitude
  //       console.log(lat, lon)
  //     })
  //   )
  // }
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Form searchCity={searchCity} />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Weather
            weather={weather}
            // isLoading={isLoading}
            // units={units}
            changeUnits={changeMetricSystem}
            // isError={isError}
          />
        )}
      </Container>
    </>
  )
}
