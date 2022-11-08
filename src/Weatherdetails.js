import React from "react";
import ReadableDate from "./ReadableDate";
import "./Weather.css"
import WeatherTemperature from "./WeatherTemperature";


export default function Weatherdetails(props) {
    return (
    <div>
        <h2 className= "mt-3 text-start border-bottom" >{props.data.city} </h2>
        
        <div className="row">
                <ul className="description text-start">
                   <li> <ReadableDate date={props.data.date} /> </li>
                    <li >{props.data.description}</li>
                    <li> 
                        <img 
                        src ={props.data.iconURL}
                        alt ="Cloudy"
                        className="float-left">

                        </img>
                    </li>
                </ul>
              </div>
              <div className="col-6 text-start">
               <ul className="details"> 
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} km/h</li>
               </ul>
               <span  className="degrees">
               <WeatherTemperature celsius ={props.data.temperature} />
               </span>
               
            </div>
            </div>
        );
    }