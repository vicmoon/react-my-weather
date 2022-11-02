import React,  {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(){

  const[ loaded, setLoaded]= useState(false);
  const [WeatherData, setWeatherData]=useState({});

  
  function handleResponse(response){
  
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind : response.data.wind
    });
    setLoaded(true);
  }


  
  let form = (
    <div className="Weather">
       <form className= "mt-5" >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
               
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div>
          <h2> {WeatherData.city} {Math.round(WeatherData.temperature)}°C</h2>
            <ul>
               <li className="text-start">
                Wednesday 07:00
                </li>
                <li className="text-start"  >
                {WeatherData.description}
                </li>
            </ul>
          </div>
          <div className="col-6 text-start mt-3">
           <ul className="details">
            <li>
            10
            </li>
            <li>
            {WeatherData.humidity}: 100%
            </li>
            <li>
            {WeatherData.wind}:10km/h
            </li>
           </ul>
        </div>
        </div>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
      </div>
    );
  } else{
      const key ="5f472b7acba333cd8a035ea85a0d4d4c";
      let city= "Prague"
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      axios.get(url).then(handleResponse);
      return ("Loading data...");
    
    }
  }

