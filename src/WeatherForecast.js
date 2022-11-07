import axios from "axios";
import React, { useState } from "react";
import  "./Weather.css";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props){
    const[ loaded, setLoaded]= useState(false);
    const [forecast, setForecast]=useState(null);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
console.log(response.data);
}
console.log(props);
    
if (loaded) {
    return (
    <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
            return (
                <div className="col" key ={index}>
                <WeatherForecastDay data =  {dailyForecast}  />
            </div>

            );
        }
})}
        
       </div> 
    </div>
);

} else  {

let apiKey ="2af1ab046f283f38f8ddb93800aaf9bd";
let lat = props.coord.lat;
let long=  props.coord.lon;
let apiURL =`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);
}
}