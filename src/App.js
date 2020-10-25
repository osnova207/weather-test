import React, {Component} from 'react';
import CitiesContainer from "./components/CitiesContainer";
import {connect} from "react-redux";
import ApiService from "./services/apiService";
import * as appActions from "./actions/appActions";
import Header from "./components/Header";
import "./components/assets/styles.scss";
import WeatherModal from "./components/WeatherModal";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.weatherRef = React.createRef();
        this.apiService = new ApiService();
    }

    componentDidMount() {
        this.apiService.getLocation()
            .then(location => {
                this.props.dispatch(appActions.addCurrentLocation(location));
                this.apiService.getWeather(location.city)
                    .then((weather) => this.props.dispatch(appActions.addCurrentWeather(weather)))
                    .catch(() => this.props.dispatch(appActions.addCurrentWeather({error: true})))
            })
            .catch(() => this.props.dispatch(appActions.addCurrentLocation({error: true})))
    }

    render() {
        return (
            <div className="App">
                <Header
                    weatherModalRef={this.weatherRef.current}
                    location={this.props.location}
                    weather={this.props.weather}
                />
                <CitiesContainer weatherModalRef={this.weatherRef.current} />
                <WeatherModal ref={this.weatherRef} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { currentLocation, currentWeather } = state;
    return {
        location: currentLocation,
        weather: currentWeather,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
