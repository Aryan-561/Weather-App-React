import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    location:{
        latitude:0,
        longitude:0
    },
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
            state.location= action.payload
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