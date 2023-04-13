import { Current } from '../Current/Current'
import { Forecast } from '../Forecast/Forecast'

export const Weather = ({ weather, units, changeUnits, isLoading }) => {
  const { current, hourly, daily } = weather

  return (
    <>
      {isLoading ? (
        <div className='h-[calc(100vh-60px)] bg-red-600 text-7xl'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Current current={current} units={units} changeUnits={changeUnits} />
          <Forecast forecastData={hourly} frecuency='hourly' />
          <Forecast forecastData={daily} frecuency='daily' />
        </>
      )}
    </>
  )
}
