import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Weather } from './components/Weather/Weather';

export const WeatherApp = () => {
  const [city, setCity] = useState('london');

  const searchCity = (newCity) => {
    if (city === newCity) return;
    setCity(newCity);
  };

  return (
    <>
      <Header />
      <Container>
        <Form searchCity={searchCity} />
        <Weather city={city} />
      </Container>
    </>
  );
};
