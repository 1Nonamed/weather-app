import { Current } from '../Current/Current'
import { Forecast } from '../Forecast/Forecast'

export const Weather = ({ weather = {}, error, units, changeUnits }) => {
  const { current, daily, hourly } = weather
  return error ? (
    <h1>Tu ciudad no existe</h1>
  ) : (
    <>
      <Current current={current} units={units} changeUnits={changeUnits} />
      <Forecast forecastData={hourly} frecuency='hourly' />
      <Forecast forecastData={daily} frecuency='daily' isDaily={true} />
    </>
  )
}
