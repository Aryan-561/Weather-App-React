import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../store/weatherSilce";

// Fix the marker icons (Leaflet/Webpack issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LocationMarker = ({ setPosition }) => {
  const [position, setMarkerPosition] = useState(null);
  const dispatch = useDispatch();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      console.log(e.latlng);

      dispatch(setLocation([lat, lng]));
      setMarkerPosition(e.latlng);
      setPosition({ lat, lng });
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        Lat: {position.lat}, Lng: {position.lng}
      </Popup>
    </Marker>
  ) : null;
};

const Map = () => {
  
  const location = useSelector((state) => state.location);
  const [position, setPosition] = useState({});

  return (
    <div>
      {location.lat && (
        <div>
          <MapContainer center={location} zoom={13} className="w-full h-[80vh]">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setPosition={setPosition} />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default Map;
