import React,  {useState} from "react";
import axios from "axios";
import "./Weather.css"
import Weatherdetails from "./Weatherdetails.js"
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){

  const[ loaded, setLoaded]= useState(false);
  const [city, setCity]= useState(props.genericCity);
  const [WeatherData, setWeatherData]=useState({});

  
  function handleResponse(response){
    console.log(response.data);
    console.log(response.data.weather[0].icon);
    setWeatherData({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name
    });

    setLoaded(true);
  }

 function search(){
      const key ="2af1ab046f283f38f8ddb93800aaf9bd";
      let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      axios.get(url).then(handleResponse);
 }

 function handleSubmit (event){
  event.preventDefault();
  search();
 }


function handleSearch(event){
  setCity(event.target.value);

}

  if (loaded) {
    return (
      <div>
        <div className="Weather">
           <form className= "mt-5 " onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleSearch}
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
           <Weatherdetails data={WeatherData}/>
           <WeatherForecast coord ={WeatherData.coord} /> 
         </div>
      </div>
    );
  } else{
      search();
      return ("Loading data...");
    }
  }

