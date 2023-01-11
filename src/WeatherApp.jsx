import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const WeatherApp = () => {
  return (
    <Main>
      <Header />
      <Form />
      <section>
        <p>London</p>
        <p>United Kingdom</p>
        <p>2022-12-28 18:15</p>
      </section>
    </Main>
  );
};
