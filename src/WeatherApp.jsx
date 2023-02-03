import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'
import { Weather } from './components/Weather/Weather'
import { useWeather } from './hooks/useWeather'
import { useGeolocation } from './hooks/useGeolocation'

export const WeatherApp = () => {
  const { initialWeather, isLoading } = useGeolocation()
  const { city } = useWeather({ initialWeather })

  return (
    <>
      <Header />
      <Container>
        <Form />
        {/* <p>Search a city</p> */}
        {isLoading && <h1>Loading...</h1>}
        <Weather
          weather={initialWeather}
          isLoading={isLoading}
          // units={units}
          // changeUnits={changeMetricSystem}
          // isError={isError}
        />
      </Container>
    </>
  )
}
