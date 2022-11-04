import React, {useState} from "react";
import "./Weather.css"


export default function WeatherTemperature (props){

const [metrics, setMetrics]= useState("celsius");
if( metrics === "celsius") {

    return (
        <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="units"> °C|°F</span>
        </div>
    );
}else {
    return "F"
}
}