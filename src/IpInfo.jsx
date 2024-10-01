import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IPInfo = () => {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io?token=42456662029b4f`);
        setIpData(response.data);
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    };

    fetchIPInfo();
  }, []);

  return (
    <div>
      {ipData ? (
        <div>
          <h3>IP Information</h3>
          <p>IP: {ipData.ip}</p>
          <p>City: {ipData.city}</p>
          <p>Region: {ipData.region}</p>
          <p>Country: {ipData.country}</p>
          <p>Location: {ipData.loc}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IPInfo;
