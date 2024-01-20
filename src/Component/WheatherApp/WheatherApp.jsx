import React, { useState } from 'react'
import './WheatherApp.css'
import search_icon from '../Assests/search.png'
import clear_icon from '../Assests/clear.png'
import cloud_icon from '../Assests/cloud.png'
import drizzle_icon from '../Assests/drizzle.png'
import humidity_icon from '../Assests/humidity.png'
import rain_icon from '../Assests/rain.png'
import snow_icon from '../Assests/snow.png'
import wind_icon from '../Assests/wind.png'

const WheatherApp = () => {

    let api_key="981affc7ed98b11d8883d3e55d6b0fa8";

    const [wicon, setWicon]= useState(cloud_icon);

    const search= async()=>{
        const element= document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response= await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind= document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("wheather-temp");
        const location= document.getElementsByClassName("wheather-location");

        humidity[0].innerHTML = data.main.humidity+ "%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°c";
        location[0].innerHTML= data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n"){
            setWicon(snow_icon);
        } 
        else{
            setWicon(clear_icon)
        }


    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt=''/>
            </div>
        </div>
        <div className="wheather-image">
             <img src={wicon} alt=''/>
        </div>
        <div className="wheather-temp">24'C</div>
        <div className="wheather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt='' className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64'C</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt='' className='icon'/>
                <div className="data">
                    <div className="wind-rate">20Km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WheatherApp