import '../styles/global.scss';
import '../styles/global.css';
import 'maplibre-gl/dist/maplibre-gl.css';

import {
  FullscreenControl,
  GeolocateControl,
  Map,
  NavigationControl,
  ScaleControl
} from 'maplibre-gl';

document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    const map = new Map({
      container: mapContainer,
      hash: mapContainer.id,
      style: 'https://tiles.versatiles.org/assets/styles/colorful/style.json',
      center: [13.404954, 52.520008],
      zoom: 10
    });

    // NavigationControl (Zoom und Rotation)
    map.addControl(new NavigationControl(), 'top-left');

    // ScaleControl (Maßstabsleiste)
    map.addControl(
      new ScaleControl({ maxWidth: 100, unit: 'metric' }),
      'bottom-left'
    );

    // FullscreenControl (Vollbildmodus)
    map.addControl(new FullscreenControl(), 'top-left');

    // GeolocateControl (Standortbestimmung)
    map.addControl(
      new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: true
      }),
      'top-left'
    );

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
  }
});
