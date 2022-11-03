import React,  {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props){

  const[ loaded, setLoaded]= useState(false);
  const [WeatherData, setWeatherData]=useState({});

  
  function handleResponse(response){
  
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind:response.data.wind.speed,
      icon: response.data.weather[0].icon,


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
          <h2 className="mt-3 cityName">{WeatherData.city} </h2>
            <ul className="description text-start">
               <li>
                Wednesday 07:00
                </li>
                <li >
                {WeatherData.description}
                </li>
            </ul>
          </div>
          <div className="col-6 text-start">
           <ul className="details">
           <li className="temperature">{Math.round(WeatherData.temperature)}°C</li>
            <li>
            Humidity: {WeatherData.humidity} %
            </li>
            <li>
            Wind: {WeatherData.wind} km/h
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
      const key ="2af1ab046f283f38f8ddb93800aaf9bd";
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${props.genericCity}&appid=${key}&units=metric`;
      axios.get(url).then(handleResponse);
      return ("Loading data...");
    
    }
  }

