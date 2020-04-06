import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import WeatherForcast from './WeatherForcast';
import store from './store';
import WeatherForcastDisplay from './components/WeatherForcastDisplay';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherForcast />
        <WeatherForcastDisplay />
      </Provider>
    </div>
  );
}

export default App;
