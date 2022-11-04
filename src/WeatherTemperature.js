import React, {useState} from "react";
import "./Weather.css"


export default function WeatherTemperature (props){

const [metrics, setMetrics]= useState("celsius");
function convertFahrenheit(event) {
    event.preventDefault();
    setMetrics("fahrenheit")

}

function convertCelsius(event){
    event.preventDefault();
    setMetrics("celsius")
}



if( metrics === "celsius") {
    return (
        <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="units"> <button onClick={convertCelsius} >°C </button>|<button  onClick={convertFahrenheit}> °F </button> 
        </span>
        </div>
    );
}else {
    let fahrenheit =(props.celsius *9) /5 +32;
    return (
        <div>
        <span>{Math.round(fahrenheit)}</span>
        <span className="units"> <button onClick={convertCelsius} >°C</button>|<button onClick={convertFahrenheit}> °F </button> 
        </span>
        </div>
    );
}
}