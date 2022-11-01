import React from "react";
import "./Weather.css"

export default function Weather(){
    return(
        <div className="Weather">
          <h1>How's the weather like? </h1>
          <form >
          <div className="row">
            <div className="col-9 mb-3">
              <input
                type="search"
                placeholder="Enter a city.."
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
                Wednesday 07:00
                </li>
                <li >
                Mostly cloudy
                </li>
            </ul>
        </div>
        <div className="col-6">
           <ul>
            <li>
                Precipitation:20 C
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