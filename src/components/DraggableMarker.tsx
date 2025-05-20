import React, { useRef } from "react";
import { Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface DraggableMarkerProps {
  position: LatLngExpression;
  onDragEnd: (lat: number, lon: number) => void;
}

const DraggableMarker: React.FC<DraggableMarkerProps> = ({
  position,
  onDragEnd,
}) => {
  const markerRef = useRef<Marker | null>(null);

  // Обработчик окончания перетаскивания
  const handleDragEnd = () => {
    if (markerRef.current && markerRef.current.getLatLng) {
      const { lat, lng } = markerRef.current.getLatLng();
      onDragEnd(lat, lng);
    }
  };

  return (
    <Marker
      draggable={true}
      position={position}
      eventHandlers={{
        dragend: handleDragEnd,
      }}
      ref={markerRef}
    />
  );
};

export default DraggableMarker;
