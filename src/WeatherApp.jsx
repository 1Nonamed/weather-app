import { useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Weather } from './components/Weather/Weather';
import { useFetchWeather } from './hooks/useFetchWeather';

export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const { weather, isLoading } = useFetchWeather(city);

  const searchCity = (newCity) => {
    if (city === newCity) return;
    setCity(newCity);
  };

  return (
    <>
      <Header />
      {/* {isLoading && <h1>Loading...</h1>} */}
      <Container>
        <Form searchCity={searchCity} />
        <Weather city={city} weather={weather} />
      </Container>
    </>
  );
};
