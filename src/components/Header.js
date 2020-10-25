import React, {useEffect, useState} from "react";
import {Button, Spinner} from "react-bootstrap";

const Header = ({ weather, location, weatherModalRef }) => {
    const [isLocation, setLocation] = useState(false);
    const [isWeather, setWeather] = useState(false);

    useEffect(() => {
        if (!isLocation && Object.keys(location).length) setLocation(true)
    }, [location, isLocation]);

    useEffect(() => {
        if (!isWeather && Object.keys(weather).length) setWeather(true)
    }, [weather, isWeather]);

    const showWeather = () => {
        weatherModalRef.show(location.city, weather)
    };

    const renderLocation = () => {
        if (location.error) {
            return <b>Couldn't get location</b>
        } else {
            return (
                <React.Fragment>
                    <b>{location.city}</b>
                    <b>{' / ' + location.country}</b>
                    <b>{' / ' + location.countryCode}</b>
                </React.Fragment>
            )
        }
    };

    return (
        <section className="Header">
            <div className="Header__content">
                <div className="Header__content_location">
                    Your location:&nbsp;
                    {isLocation ? renderLocation() : <Spinner animation="border" variant="primary" className="ml-2" size="sm" />}
                </div>
                <div className="Header__content_weather">
                    {isWeather && !weather.error && <span>Temperature: <b>{weather.temperature}</b> &#176; C</span>}
                    <Button
                        variant="primary"
                        onClick={showWeather}
                        className="d-flex align-items-center"
                        disabled={!isWeather || weather.error}
                    >
                        {!isWeather &&
                        <Spinner
                            as="div"
                            animation="border"
                            size="sm"
                            aria-hidden="true"
                            className="mr-2"
                        />}
                        View all weather
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default Header;