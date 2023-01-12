import { useState } from 'react';
import { getWeather } from '../../helpers/getWeather';

export function Form({ searchCity }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValueTrim = inputValue.trim();
    if (inputValueTrim <= 2) return;
    searchCity(inputValueTrim);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">
        City
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
          value={inputValue}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
