import React, { useState } from 'react';

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }
    
    if (unit === 'celsius') {
        return (
            <div className="CurrentTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">°C |{" "} <a href="/" onClick={convertToFahrenheit}>°F</a> </span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32
        return (
            <div className="CurrentTemperature">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit"> <a href="/" onClick={showCelsius}>°C</a> | °F</span>
            </div>
        );
    }
} 