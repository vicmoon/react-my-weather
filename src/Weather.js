import React from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(){
    return(
        <div className="Weather">
         
          <form className="mt-5" >
          <div className="row">
            <div className="col-9 mb-3">
              <input
                type="search"
                placeholder="Enter a city here.."
                className="form-control"
                autoFocus="on" 
              />
            </div>
            <div className="col-3 mb-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">  
        <h2> Prague</h2>       
        <div className="col-6 text-start"> 
            <ul>
            <li> 
                 <h2>20°C</h2></li>
                <li>
                Wednesday 07:00
                </li>
                <li >
                Mostly cloudy
                </li>
                
            </ul>
        </div>
        <div className="col-6 text-start mt-3">
           <ul>
            <li>
                Precipitation:10%
            </li>
            <li>
                Humidity: 100%
            </li>
            <li>
                Wind:10km/h
            </li>
           </ul>
        </div>
        </div>

        </div>
    )
}