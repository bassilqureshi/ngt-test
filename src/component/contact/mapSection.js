import React, { useEffect, useState, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import 'tippy.js/dist/tippy.css';

const MapSection = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAj0kSYxDiqYAUk5AenqQtWvIJj-S8dCjQ', // Replace with your API key
    libraries: ['places'],
  });

  const locations = [
    { lat: 40.58191256123704, lng: -74.60473902179672 },
    { lat: 31.511980414683638, lng: 74.34215224232285 },
    { lat: 28.41973731796887, lng: 77.03858307365455 },
  ];

  useEffect(() => {
    if (isLoaded && !loadError) {
      initializeGoogleMap();
    }
  }, [isLoaded, loadError]);

  const initializeGoogleMap = () => {
    if (!mapContainerRef.current) return;

    const google = window.google;

    if (!google) {
      console.error('Google Maps API is not loaded.');
      return;
    }

    const mapStyles = [
      { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
      { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
      { featureType: 'administrative', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
      { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#2b6ef4' }] },
      { featureType: 'administrative', elementType: 'labels.text.stroke', stylers: [{ color: '#f1f2f4' }, { weight: 2 }] },
      { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
      { featureType: 'landscape', elementType: 'geometry.fill', stylers: [{ color: '#f1f2f4' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#2b6ef4' }] },
    ];

    const mapOptions = {
      mapTypeControl: false,
      disableDefaultUI: true,
      styles: mapStyles,
    };

    const newMap = new google.maps.Map(mapContainerRef.current, mapOptions);
    const bounds = new google.maps.LatLngBounds();

    // Add markers and extend bounds
    locations.forEach((location) => {
      new google.maps.Marker({
        map: newMap,
        position: location,
        icon: {
          url: '/Contact/map_pin_en.svg',
          scaledSize: new google.maps.Size(100, 80),
          anchor: new google.maps.Point(25, 50),
        },
      });
      bounds.extend(location); // Extend bounds to include this marker
    });

    newMap.fitBounds(bounds); // Adjust map view to show all markers
    setMap(newMap);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="page-toload estamos-page" data-bodyClass="estamos">
          <main className="page-content" role="main">
            <section className="contacts" id="affinity" style={{ padding: 0 }}>
              <div id="map" ref={mapContainerRef} style={{ height: '500px', width: '100%' }}></div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default MapSection;
