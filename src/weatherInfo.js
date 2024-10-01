import axios from "axios";
import { useState,useEffect } from "react";

function weatherInfo({lat,lng}){

    const [data,setData] = useState({})
    const apiKey = '9c4711a44bd52c6f69da6ddafd193fcd'
    useEffect(()=>{
        const fetchWeatherInfo = async ()=>{
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${apiKey}`)
                setData(response.data)
            } catch (error) {
                console.log(error.message)                
            }
        } 
        fetchWeatherInfo()
    },[lat,lng])
    return data
}


export default weatherInfo