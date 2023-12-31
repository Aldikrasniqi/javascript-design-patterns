import * as React from 'react';
import './App.css';
import TemperatureConverter, {
  Kelvin,
  Fahrenheit,
} from './TemperatureConverter';

export default function App() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <Kelvin value={value} />}
      renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
    />
  );
}
