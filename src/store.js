import { createStore } from "redux";
import { cityWeatherReducer } from "./reducers";

const store = createStore(cityWeatherReducer);

export default store;