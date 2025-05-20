import React, { useRef } from "react";
import { Marker, Popup, CircleMarker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { icons } from "./Icons";

interface IDevice {
  id: string;
  name: string;
  lat: number;
  lon: number;
  model: "basic" | "advanced" | "special";
  status: "on" | "off";
  children?: IDevice[];
}

interface DeviceMarkerProps {
  device: IDevice;
  onDoubleClick: (lat: number, lon: number) => void;
  onDragEnd: (id: string, lat: number, lon: number) => void;
}

const DeviceMarker: React.FC<DeviceMarkerProps> = ({
  device,
  onDoubleClick,
  onDragEnd,
}) => {
  const position: LatLngExpression = [device.lat, device.lon];
  const markerRef = useRef<Marker | null>(null);

  const handleDblClick = () => {
    onDoubleClick(device.lat, device.lon);
  };

  const handleDragEnd = () => {
    if (markerRef.current) {
      const { lat, lng } = markerRef.current.getLatLng();
      onDragEnd(device.id, lat, lng);
    }
  };

  const icon =
    device.model === "special"
      ? icons.special
      : device.model === "advanced"
      ? icons.advanced
      : icons.basic;

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        dblclick: handleDblClick,
        dragend: handleDragEnd,
      }}
      draggable={false}
      ref={markerRef}
    >
      {/* Информация в попапе */}
      <Popup>
        <div>
          <strong>{device.name}</strong>
          <br />
          Модель: {device.model}
          <br />
          Статус: {device.status}
        </div>
      </Popup>
      {device.children &&
        device.children.map((child) => (
          <CircleMarker
            key={child.id}
            center={[child.lat, child.lon]}
            radius={5}
            pathOptions={{ color: "orange" }}
          >
            <Popup>
              <div>
                <strong>{child.name}</strong>
                <br />
                Модель: {child.model}
                <br />
                Статус: {child.status}
              </div>
            </Popup>
          </CircleMarker>
        ))}
    </Marker>
  );
};

export default DeviceMarker;
