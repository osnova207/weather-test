import React from "react";
import {Button} from "react-bootstrap";

const CityRow = ({ city, weatherModalRef, onDel }) => {

    const showWeather = () => {
        weatherModalRef.show(city)
    };

    return (
        <div className="city-row">
            <div className="city-row__label">
                {city}
            </div>
            <div className="city-row__controls">
                <Button
                    variant="primary sm"
                    onClick={showWeather}
                    className="btn-sm"
                >
                    Show weather
                </Button>
                <Button
                    variant="danger"
                    onClick={() => onDel(city)}
                    className="btn-sm"
                >
                    Delete
                </Button>
            </div>
        </div>
    )
};

export default CityRow;