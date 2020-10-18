const initialState = {
    currentCity: '',
    citiesList: []
};

const app = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_CITY":
            return {...state, citiesList: [...state.citiesList, action.payload]};

        case "DELETE_CITY":
            return {...state, citiesList: state.citiesList.filter(city => city !== action.payload)};

        default:
            return state;
    }
};

export default app;