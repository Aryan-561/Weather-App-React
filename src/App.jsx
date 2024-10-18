import React, { useEffect, useState } from 'react'
import Map from './component/Map/Map'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLocation } from './store/weatherSilce';
import conf from './conf/conf';


function App() {

  const ipToken = conf.IpInfoToken
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io?token=${ipToken}`);
        const data = response.data
        console.log(data)
        dispatch(setLocation(data.loc.split(',')))
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);


  

  return (
    <>
      <Map/>
    </>
  )
}

export default App
