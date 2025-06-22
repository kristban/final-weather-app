import React, { useState } from 'react'
import axios from 'axios'

import CurrentWeather from './CurrentWeather'
import './Weather.css'

export default function Weather(props){
    const [ready, setReady] = useState(false)
    const [weatherData, setWeatherData] = useState({})
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
        
        setReady(true)
    }

    if (ready) {
        return (
            <div className='weather'>
                <div className="head">
                    <h2>The Weather today and beyond</h2>
                </div>
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input 
                                type="search" 
                                placeholder="Enter your City..." 
                                className="form-control"
                                autoFocus="on"
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
                <CurrentWeather info={weatherData}/>
                
                </div>
        );
    } else {
        const apiKey = "7a9df9a4f940btc116d43db796o3aa67"
        
        let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
        axios.get(apiURL).then(handleResponse)

        return "Loading..."
    }

    
    
}