import React from "react";
export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;

    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }


    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ];

        return days[day];
    }
    return (
        <div>
            <div className="WeatherForecastDay">{day()}</div>
                <div className= "WeatherForecastTemp border border-opacity-25">
                    <span className= "WeatherForecastTempMax"> {maxTemperature()}°C </span>
                    <span className= "WeatherForecastTempMin"> {minTemperature()}°C </span>
                </div>
        </div>

    );
}