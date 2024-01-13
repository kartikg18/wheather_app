import React from 'react'
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
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='search' />
            <div className="search-icon">
                <img src={search_icon} alt=''/>
            </div>
        </div>
        <div className="wheather-image">
             <img src={cloud_icon} alt=''/>
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
                    <div className="humidity-percent">20Km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WheatherApp