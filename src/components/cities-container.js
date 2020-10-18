import React from "react";
import AddCity from "./add-city";
import {connect} from "react-redux";
import * as appActions from "../actions/appActions";
import CitiesList from "./cities-list";

const CitiesContainer = (props) => {

    const addCity = (city) => {
        props.dispatch(appActions.addCity(city))
    };

    const deleteCity = (city) => {
        props.dispatch(appActions.deleteCity(city))
    };

    return (
        <div className="cities">
            <AddCity onAdd={addCity}/>
            <CitiesList list={props.citiesList} onDel={deleteCity}/>
        </div>
    )
};
const mapStateToProps = (state) => {

    const { citiesList } = state;

    return {
        citiesList
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);