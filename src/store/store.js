import { configureStore } from "@reduxjs/toolkit";
import  weatherReducer  from './weatherSilce'

export const store = configureStore({
    reducer:weatherReducer
})