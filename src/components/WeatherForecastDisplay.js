import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWeatherForCity } from '../api/weatherApi';
import ForecastPanel from './ForecastPanel';

const WeatherForecastDisplay = () => {
    const city = useSelector(state => state.city);
    const [forecast, setForecast] = useState();

    useEffect(() => {
        if(city) {
            fetchWeatherForCity(city).then(response => {
                setForecast(response);
            });
        }
    }, [city]);

    return (
        <div>
            {
                forecast &&
                (<ForecastPanel data={forecast} />)
            }
        </div>
    );
};

export default WeatherForecastDisplay;