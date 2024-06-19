`use strict`;

export function map() {
  const coords = [51.3657129, 16.0319702];

  const map = L.map('map').setView(coords, 13);

  L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  L.marker(coords)
    .addTo(map)
    .bindPopup(
      L.popup({
        autoClose: false,
        closeOnClick: false,
        className: `map-popup`,
      })
    )
    .setPopupContent(`Znajdziesz nas tutaj`)
    .openPopup();
}
