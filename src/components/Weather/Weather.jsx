import { useFetchWeather } from '../../hooks/useFetchWeather';

export const Weather = ({ city }) => {
  const { weather, isLoading } = useFetchWeather(city);
  const { current, forecast, location } = weather;
  console.log(current);
  return (
    <>
      <h3>{city}</h3>
      {isLoading && <h1>Loading...</h1>}
      {JSON.stringify(weather?.current, null, 6)};
    </>
  );
};
