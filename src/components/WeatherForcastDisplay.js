import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchWeatherForCity } from '../api/weatherApi';

const WeatherForcastDisplay = () => {
    const city = useSelector(state => state.city);
    const [forcast, setForcast] = useState();

    useEffect(() => {
        if(city) {
            setForcast(fetchWeatherForCity(city));
        }
    }, [city]);

    return (
        <div>
            <span>{forcast}</span>
        </div>
    );
};

export default WeatherForcastDisplay;