import React,{useState,useEffect} from 'react'
import './style.css'
import Weathercard from './Weathercard'

const Temp = () => {

    const [searchValue,setSearchValue] = useState("Patna")
    const [tempInfo,setTempInfo] = useState("")

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=50cec83b5ca9da70cd5757139a7bbcca`

            //both the lines below return promise
            const res = await fetch(url);
            const data = await res.json();

            //Object destructuring
            const {temp,humidity,pressure} = data.main;
            // fetching data's weather which is array so [0]
            // then its main which we use as weather mood
            const {main : weathermood} = data.weather[0]
            const {name} = data;
            const {speed } = data.wind
            const {country,sunset} = data.sys
     
            //storing all the data in an object and then we ll store it in state
            const myNewWeatherInfo = {
                temp,humidity,pressure,weathermood,name,speed,country,sunset
            }
            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
    //    we want to call getWeatherInfo fn as soon as page refreshes
    getWeatherInfo()
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm" 
                        value={searchValue}
                        onChange={(e)=> setSearchValue(e.target.value)}
                        />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>

                </div>
            </div>
            {/* tempInfo is passed as props */}
            <Weathercard {...tempInfo}/>
            {/* desctructuring directly using spread operator */}
        </>
    )
}

export default Temp
