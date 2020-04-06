const intialState = {
    city: '',
};

const SELECT_CITY = 'SELECT_CITY';

const cityWeatherReducer = (state = intialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SELECT_CITY:
            return {
                ...state,
                ...payload,
            }
        
        default:
            return state;
    }
}

export {
    cityWeatherReducer,
};