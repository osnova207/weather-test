import React from "react";

const CityRow = (props) => {
    const { city } = props;

    return (
        <div className="city-row">
            <div className="city-row__label">
                {city}
            </div>
            <div className="city-row__delete" onClick={() => props.onDel(city)}>Delete</div>
        </div>
    )
};

export default CityRow;