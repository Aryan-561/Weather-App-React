import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    location:{},
    weatherInfo:{
        current:{},
        forecast:{}
    }
}

const weatherSlice = createSlice({
    name:"weather info",
    initialState,
    reducers:{
        setLocation:(state,action)=>{
            state.location = {lat:action.payload[0],lng:action.payload[1]}
        },
        setCurrentWeather:(state,action)=>{
            state.weatherInfo.current = action.payload
        },
        setForecastWeather:(state,action)=>{
            state.weatherInfo.forecast = action.payload
        }
    }
})

export const {setLocation,setCurrentWeather,setForecastWeather} = weatherSlice.actions;

export default weatherSlice.reducer