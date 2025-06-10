import React from "react"
import FormattedDate from './FormattedDate'

export default function CurrentWeather(props) {
    return (
        <div className="CurrentWeather">
            <h1>{props.info.city}, {props.info.country}</h1>
            <ul>
                <li>
                    <FormattedDate dates={props.info.date} />
                </li>
                <li className="text-capitalize">{props.info.condition}</li>
            </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex">
                            <div>
                                <img src={props.info.iconUrl} alt="Mostly cloudy" size={52}/>
                            </div>
                            <div>
                                {Math.round(props.info.temperature)} °C|°F
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.info.humidity} %</li>
                            <li>Wind: {props.info.wind} km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}