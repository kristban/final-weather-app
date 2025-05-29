import React from 'react'
import './Weather.css'

export default function Weather(){
    return (
        <div className='weather'>
            <form>
                <div className="row">
                    <div className="col-9">
                        <input 
                            type="search" 
                            placeholder="Enter your City..." 
                            className="form-control"/>
                    </div>
                    <div className="col-3">
                        <input 
                            type="submit" 
                            value="Search" 
                            className="btn btn-primary"/>
                    </div>
                </div>
            </form>
            <h1>Cork</h1>
            <ul>
                <li>Friday 09:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mostly cloudy" />
                    14 C|F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}