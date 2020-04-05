import React, { useState } from 'react';
import CustomSelect from './components/CustomSelect';
import { Button } from '@material-ui/core';
import { fetchWeatherForCity } from './api/weatherApi';

const cities = ['New York', 'Los Angeles', 'Denver'].map( value => ({value, label: value}));

const WeatherForcast = () => {
    const [city, handleChange] = useState('');
    const fetchForcast = () => {
        const respone = fetchWeatherForCity(city);
        console.log(respone);
    }

    return (
        <div>
            <h1>Weather Forcast</h1>
            <div>
                <CustomSelect label="Select City" options={cities} selectedValue={city} handleChange={handleChange} />
                <Button style={{ marginTop: 10}} variant="contained" color="primary" disabled={(city === '')} onClick={fetchForcast}>Fetch Forcast</Button>
            </div>
        </div>
    );
};

export default WeatherForcast;