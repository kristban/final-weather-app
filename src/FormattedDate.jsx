import React from "react"

export default function FormattedDate(props) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[props.dates.getDay()];
    let hours = props.dates.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    
    let minutes = props.dates.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {hours}:{minutes}
      </div>
    );
  }