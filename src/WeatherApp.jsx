import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Weather } from './components/Weather/Weather';
import { useFetchWeather } from './hooks/useFetchWeather';

export const WeatherApp = () => {
  const [city, setCity] = useState('london');
  const { weather, isLoading } = useFetchWeather(city);

  const searchCity = (newCity) => {
    if (city === newCity) return;
    setCity(newCity);
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
          <Weather weather={weather} isLoading={isLoading} />
        )}
      </Container>
    </>
  );
};
