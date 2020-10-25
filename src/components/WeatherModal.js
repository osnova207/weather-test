import React, {Component} from "react";
import {Modal, Spinner} from "react-bootstrap";
import ApiService from "../services/apiService";

const initialState = {
    show: false,
    title: '',
    weather: {},
    isLoaded: false,
    isError: false
};

class WeatherModal extends Component {
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
        this.state = initialState;
    }

    show(city, weather) {
        if (weather) {
            this.setState({
                show: true,
                title: city,
                weather: weather,
                isLoaded: true
            })
        } else {
            this.setState({ show: true, title: city });
            this.apiService.getWeather(city)
                .then((weather) => this.setState({ weather: weather, isLoaded: true }))
                .catch(() => this.setState({ isLoaded: true, isError: true }))
        }
    }

    closeModal() {
        this.setState(initialState)
    }

    renderItem = (data) => (
        <div className="WeatherModal__content_item" key={data.label}>
            <div className="WeatherModal__content_label">
                {data.label ? data.label + ":" : ""}
            </div>
            <div className="WeatherModal__content_value">
                {data.value ? data.value : ""}
                {data.units ? ", " + data.units : ""}
            </div>
        </div>
    );

    renderWind = (angle) => (
      <div style={{ transform: `rotate(${angle - 45}deg)`}} className="wind-icon" />
    );

    render() {
        const { isLoaded, isError, title, show } = this.state;
        const { description, icon, windAngle, windSpeed, temperature, pressure } = this.state.weather;
        const weatherArr = [
            { label: "Temperature", value: temperature, units: 'C' },
            { label: "Pressure", value: pressure, units: "Pa" },
            { label: "Wind speed", value: windSpeed, units: "m/s" },
            { label: "Wind", value: this.renderWind(windAngle) },
        ];

        return (
            <Modal
                show={show}
                onHide={this.closeModal.bind(this)}
                keyboard={true}
                className="WeatherModal"
                centered={true}
            >
                <Modal.Header closeButton>
                   <b>{title}</b>
                </Modal.Header>
                <Modal.Body>
                    {isLoaded && !isError &&
                    <div className="WeatherModal__content">
                        <h3>{description}</h3>
                        <div className="WeatherModal__content_icon-wrapper">
                            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="WeatherModal__content_icon" alt="icon"/>
                        </div>
                        {weatherArr.map(item => this.renderItem(item))}
                    </div>}
                    {!isLoaded &&
                    <div className="loader d-flex justify-content-center align-items-center">
                        <Spinner
                            as="div"
                            animation="border"
                            size="xl"
                            aria-hidden="true"
                        />
                    </div>}
                    {isLoaded && isError &&
                    <div className="loader d-flex justify-content-center align-items-center">
                        Couldn't get weather
                    </div>}
                </Modal.Body>
            </Modal>
        )
    }
}

export default WeatherModal;