import React from "react";
import CityRow from "./city-row";

const CitiesList = (props) => {

    const list = props.list.map((city, idx) => <CityRow key={idx} city={city} onDel={props.onDel}/>);

    return (
        <div className="cities-list">
            {list}
        </div>
    )
};

export default CitiesList;