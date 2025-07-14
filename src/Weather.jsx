import React, { useState } from 'react'
import axios from 'axios'

import CurrentWeather from './CurrentWeather'
import './Weather.css'
import WeatherForecast from './WeatherForecast';

export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState(props.defaultLocation);

    function handleResponse(response) {
        setWeatherData({
            city: response.data.city,
            country: response.data.country,
            date: new Date(response.data.time * 1000),
            condition: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity, 
            wind: response.data.wind.speed,
            degree: response.data.wind.degree,
        })
        
        setReady(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleLocationEntry(event) {
        setLocation(event.target.value);
    }

    function search() {
        const apiKey = "7a9df9a4f940btc116d43db796o3aa67"
        let apiURL = `https://api.shecodes.io/weather/v1/current?query=${location}&key=${apiKey}&units=metric`
        axios.get(apiURL).then(handleResponse)
    }

    if (ready) {
        return (
            <div className='weather'>
                <div className="head">
                    <h1>The Weather</h1>
                    <h4>today and beyond</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                                type="search" 
                                placeholder="Enter your City..." 
                                className="form-control"
                                autoFocus="on"
                                onChange={handleLocationEntry}
                            />
                        </div>
                        <div className="col-3">
                            <input 
                                type="submit" 
                                value="Search" 
                                className="btn  w-100"/>
                        </div>
                    </div>
                </form>
                <CurrentWeather info={weatherData} />
                <hr/>
                <WeatherForecast />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}