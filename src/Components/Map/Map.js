import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const position = [54, -2];

  const markerIcon = divIcon({
    className: 'custom-marker',
    iconSize: [24, 24],
    html: '<div class="circle"></div>'
  });

  return (
    <div>
      <h2>GPS Location</h2>
      <MapContainer center={position} zoom={8} style={{ height: '400px', width: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <span>My Marker</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>

  );
};

export default Map;
