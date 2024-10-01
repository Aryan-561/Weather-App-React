import React, { useEffect, useState } from 'react'
import Map from './component/Map/Map'
import axios from 'axios';

function App() {
  const [loc, setLoc] = useState(null)
  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io?token=42456662029b4f`);
        const data = response.data
        setLoc(data.loc.split(','));
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);


  console.log(loc)

  return (
    <>
      <div className='p-4 bg-green-400   text-cyan-950 text-center'>Test by batman</div>

      {loc &&
        <Map loc={loc} />}
    </>
  )
}

export default App
