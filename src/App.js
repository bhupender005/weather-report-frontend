import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import WeatherForecast from './WeatherForecast';
import store from './store';
import WeatherForecastDisplay from './components/WeatherForecastDisplay';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherForecast />
        <WeatherForecastDisplay />
      </Provider>
    </div>
  );
}

export default App;
