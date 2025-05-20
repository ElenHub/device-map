import L from 'leaflet';

export const icons = {
  basic: L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/000000/smartphone.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  }),
  special: L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/000000/laptop.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  }),
};
