import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import CustomSelect from './components/CustomSelect';
import { Button } from '@material-ui/core';

const cities = ['New York', 'Los Angeles', 'Denver'].map( value => ({value, label: value}));

const WeatherForecast = () => {
    const dispatch = useDispatch();
    const [city, handleChange] = useState('');

    return (
        <div>
            <h1>Weather Forecast</h1>
            <div>
                <CustomSelect label="Select City" options={cities} selectedValue={city} handleChange={handleChange} />
                <Button style={{ marginTop: 10}} variant="contained" color="primary" disabled={(city === '')} onClick={() => {
                    dispatch({ type: 'SELECT_CITY', payload: { city } })
                }}>Fetch Forecast</Button>
            </div>
        </div>
    );
};


export default WeatherForecast;