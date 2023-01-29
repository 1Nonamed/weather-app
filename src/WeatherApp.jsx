import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { Weather } from './components/Weather/Weather'
import { useWeather } from './hooks/useWeather'
// import { useGeolocation } from './hooks/useGeolocation'

export const WeatherApp = () => {
  // const { location } = useGeolocation()
  const { units, weather, isLoading, searchCity, changeMetricSystem, isError } =
    useWeather({ location })

  return (
    <>
      <Header />
      <Container>
        <Form searchCity={searchCity} />
        {isError && <h1>City not Found</h1>}
        {/* <p>Search a city</p> */}

        <Weather
          weather={weather}
          isLoading={isLoading}
          units={units}
          changeUnits={changeMetricSystem}
          isError={isError}
        />
      </Container>
    </>
  )
}
