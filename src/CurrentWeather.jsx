import React from "react"
import FormattedDate from './FormattedDate'
import CurrentTemperature from './CurrentTemperature'

export default function CurrentWeather(props) {
    return (
        <div className="CurrentWeather">
            <div className="FirstPart">
                <h2>{props.info.city}, {props.info.country}</h2>
                <ul>
                    <li>
                        <FormattedDate dates={props.info.date} />
                    </li>
                    <li className="text-capitalize">{props.info.condition}</li>
                </ul>
            </div>
            <hr/>
                <div className="row">
                    <div className="col-7">
                        <div className="d-flex">
                            
                                <img 
                                    src={props.info.iconUrl} 
                                    alt="Mostly cloudy" 
                                    size={52}
                                    />
                            
                            <div >
                                <CurrentTemperature celsius={props.info.temperature} />
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <ul>
                            <li>Humidity: {props.info.humidity} %</li>
                            <li>Wind: {props.info.wind} km/h</li>
                            <li>Direction: {props.info.degree} degree</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}