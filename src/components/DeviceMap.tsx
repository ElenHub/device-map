import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import DeviceMarker from "./DeviceMarker";
import DraggableMarker from "./DraggableMarker";
import devicesData from "../data/devices.json";
import "leaflet/dist/leaflet.css";

const DeviceMap: React.FC = () => {
  const mapRef = useRef<LeafletMap | null>(null);
  const [devices, setDevices] = useState<typeof devicesData>(devicesData);

  const handleDoubleClick = (lat: number, lon: number) => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lon], 15);
    }
  };

  const handleDragEnd = (id: string, lat: number, lon: number) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, lat, lon } : d))
    );
    console.log(`Device ${id} new position: (${lat}, ${lon})`);
  };

  // Выбираем устройство для перетаскивания
  const draggableDevice = devices[0];

  return (
    <MapContainer
      center={[55.7558, 37.6173]} // Москва
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
      }}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Отрисовка маркеров устройств */}
      {devices.map((device) => (
        <DeviceMarker
          key={device.id}
          device={device}
          onDoubleClick={handleDoubleClick}
          onDragEnd={handleDragEnd}
        />
      ))}
      {/* Перетаскиваемый маркер */}
      <DraggableMarker
        position={[draggableDevice.lat, draggableDevice.lon]}
        onDragEnd={(lat, lon) => handleDragEnd(draggableDevice.id, lat, lon)}
      />
    </MapContainer>
  );
};

export default DeviceMap;
