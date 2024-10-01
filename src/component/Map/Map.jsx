import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import weatherInfo from '../../weatherInfo';


// Fix the marker icons (Leaflet/Webpack issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const LocationMarker = ({ setPosition }) => {
  const [position, setMarkerPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      console.log(e.latlng);
      
     
      setMarkerPosition(e.latlng);
      setPosition({ lat, lng });
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>Lat: {position.lat}, Lng: {position.lng}</Popup>
    </Marker>
  ) : null;
};

const Map = ({loc}) => {

  const [position, setPosition] = useState({ lat:loc[0], lng:  loc[1]});
  
  const data = weatherInfo(position)
  console.log(data)

  return (
    <div>
      
      <MapContainer center={loc} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker setPosition={setPosition} />
      </MapContainer>
      <div >
        
        {position.lat && position.lng
          ? `Selected Location: Latitude: ${position.lat}, Longitude: ${position.lng}`
          : "Click on the map to select a location."}

        {
          data.main && 
          <div>
            <div>TEMP:{data.main.temp}</div>
            <div>FEELS_LIKE:{data.main.feels_like}</div>
          </div>
        }
      </div>
    </div>
  );
};

export default Map;
