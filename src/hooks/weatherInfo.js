import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

function weatherInfo(){
    const location = useSelector(state=>state.location)
    const [data,setData] = useState({})
    const apiKey = '9c4711a44bd52c6f69da6ddafd193fcd'
    useEffect(()=>{
        const fetchWeatherInfo = async ()=>{
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location?.lat}&lon=${location?.lng}&appid=${apiKey}`)

                setData(response.data)
                console.log(response.data)
                
            } catch (error) {
                console.log(error.message)                
            }
        } 
        fetchWeatherInfo()
    },[location])
    return data
}


export default weatherInfo