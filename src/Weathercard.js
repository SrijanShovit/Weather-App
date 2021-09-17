import React,{useState,useEffect} from 'react'
import './style.css'

const Weathercard = ({ temp,humidity,pressure,weathermood,name,speed,country,sunset}) => {

    const [weatherState,setWeatherState] = useState("")

    useEffect(() => {
       if (weathermood)
       //if we get api data 
       {
           switch (weathermood) {
               case "Clouds": setWeatherState("wi-day-cloudy")                   
                   break;
               case "Haze": setWeatherState("wi-fog")                   
                   break;
               case "Clear": setWeatherState("wi-day-sunny")                   
                   break;
               case "Mist": setWeatherState("wi-dust")                   
                   break;
               case "Rain": setWeatherState("wi-rain")                   
                   break;
           
               default:setWeatherState("wi-day-sunny") 
                   break;
           }
       }
    }, [weathermood])

    //converting seconds into time
    let sec= sunset
    let date = new Date(sec * 1000)
    //on getting milliseconds we can easily get time 
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name} , {country}
                        </div>
                    </div>
                </div>

                <div className="date">
                    {new Date().toLocaleString()}
                </div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p>
                                <i className="extra-info-leftside">
                                   {timeStr}<br />
                                    Sunset
                                </i>
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p>
                                <i className="extra-info-leftside">
                                {humidity}<br />
                                    Humidity
                                </i>
                            </p>
                        </div>

                      


                    </div>

                    <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-rain"}></i>
                                </p>
                                <p>
                                    <i className="extra-info-leftside">
                                    {pressure}<br/>
                                        Pressure
                                    </i>
                                </p>
                            </div>
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-strong-wind"}></i>
                                </p>
                                <p>
                                    <i className="extra-info-leftside">
                                    {speed}<br/>
                                     Speed
                                    </i>
                                </p>
                            </div>

                        </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard
