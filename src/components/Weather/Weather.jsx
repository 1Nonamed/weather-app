import { Current } from '../Current/Current'
import { Forecast } from '../Forecast/Forecast'

export const Weather = ({ weather, units, changeUnits, isLoading }) => {
  const { current, hourly, daily } = weather

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Current current={current} units={units} changeUnits={changeUnits} />
          <Forecast forecastData={hourly} frecuency='hourly' />
          <Forecast forecastData={daily} frecuency='daily' isDaily={true} />
        </>
      )}
    </>
  )
}
