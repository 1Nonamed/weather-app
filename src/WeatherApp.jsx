import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Weather } from './components/Weather/Weather';
import { useFetchWeather } from './hooks/useFetchWeather';

export const WeatherApp = () => {
  const [city, setCity] = useState('london');
  const [units, setUnits] = useState('metric');
  const { weather, isLoading } = useFetchWeather(city, units);

  const searchCity = (newCity) => {
    if (city === newCity) return;
    setCity(newCity);
  };

  const changeMetricSystem = (newUnits) => {
    console.log(newUnits);
    setUnits(newUnits);
  };

  return (
    <>
      {/* {isLoading && <h1>Loading...</h1>} */}
      <Header />
      <Container>
        <Form searchCity={searchCity} />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Weather
            weather={weather}
            isLoading={isLoading}
            units={units}
            changeUnits={changeMetricSystem}
          />
        )}
      </Container>
    </>
  );
};
