import React from "react";
import ReadableDate from "./ReadableDate";
import "./Weather.css"


export default function Weatherdetails(props) {
    return (
    <div>
        <h2 className= "mt-3 text-start">{props.data.city} </h2>
        <div className="row">
                <ul className="description text-start">
                   <li> <ReadableDate date={props.data.date} /> </li>
                    <li >{props.data.description}</li>
                </ul>
              </div>
              <div className="col-6 text-start">
               <ul className="details">
               <li className="temperature">{Math.round(props.data.temperature)}°C</li>
                <li>
                Humidity: {props.data.humidity} %
                </li>
                <li>
                Wind: {props.data.wind} km/h
                </li>
               </ul>
            </div>
            </div>
        );
    }