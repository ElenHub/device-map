import L from 'leaflet';

export const icons = {
  basic: L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/device-184-461563.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  }),
  advanced: L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/device-184-461563.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  }),
  special: L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/device-184-461563.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  }),
};