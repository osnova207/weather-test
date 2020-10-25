import Storage from "../Storage";

const STORAGE_KEY = 'cities';
const citiesList = Storage.get(STORAGE_KEY);

const initialState = {
    currentLocation: {},
    currentWeather: {},
    citiesList: citiesList || [],
};

const app = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CURRENT_LOCATION":
            return {...state, currentLocation: action.payload};

        case "ADD_CURRENT_WEATHER":
            return {...state, currentWeather: action.payload};

        case "ADD_CITY":
            const addCity = [...state.citiesList, action.payload];
            Storage.set(STORAGE_KEY, addCity);
            return {...state, citiesList: addCity};

        case "DELETE_CITY":
            const delCity = state.citiesList.filter(city => city !== action.payload);
            Storage.set(STORAGE_KEY, delCity);
            return {...state, citiesList: delCity};

        default:
            return state;
    }
};

export default app;