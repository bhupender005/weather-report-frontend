import React from 'react';
import ForecastChildBox from './ForecastChildBox';

const style = {
    container: {
        display: "flex",
        maxWidth: "100%",
        flexDirection: "column",
        width: "1200px",
        margin: "20px auto",
        padding: 10,
        border: "3px black solid",
    },
    forecastBottomPanel: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
    },
}

const ForecastPanel = props => {
    const { forecasts, current_observation } = props.data;
    const { condition: { temperature, text, code } } = current_observation;

    return (
        <div style={style.container}>
            <div>
                <div>Today's temperature is: {temperature}&#8451;</div>
                <img alt="img" src={`http://l.yimg.com/a/i/us/we/52/${code}.gif`} />
                <div>{text}</div>
            </div>
            <div style={style.forecastBottomPanel}>
                {
                    forecasts.map((row, i) => <ForecastChildBox {...row} key={i} />)
                }
            </div>
        </div>
    );
};

export default ForecastPanel;