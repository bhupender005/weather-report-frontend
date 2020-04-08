import React from 'react';
// import moment from 'moment';
//{moment.unix(date).format("DD MM YYYY")

const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        border: "2px black solid",
        padding: "10px",
        alignItems: "center",
        flex: 1,
        minWidth: 200,
    }
}

const ForecastChildBox = props => {
    const {
        day,
        // date,
        low,
        high,
        text,
        code,
    } = props;

    return (
        <div style={style.container}>
            <div>{day}</div>
            <img alt="img" src={`http://l.yimg.com/a/i/us/we/52/${code}.gif`} />
            <div><b>{high}&#8451;</b> {low}&#8451;</div>
            <div>{text}</div>
        </div>
    );
};

export default ForecastChildBox;