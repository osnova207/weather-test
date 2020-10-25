import React from "react";
import CityRow from "./CityRow";

const CitiesList = (props) => {

    const list = props.list.map((city, idx) => (
        <CityRow
            key={idx}
            city={city}
            onDel={props.onDel}
            weatherModalRef={props.weatherModalRef}
        />
    ));

    return (
        <div className="cities-list">
            {list}
        </div>
    )
};

export default CitiesList;