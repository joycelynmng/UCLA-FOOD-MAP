import Head from 'next/head';
import React, {useState} from "react";
import Map, {Marker, Popup} from 'react-map-gl';
import foodPlaces from "../data/food-places.json";
import styles from "../styles/Home.module.css";

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam95Y2VseW5ubmciLCJhIjoiY2w3eTNzbXpoMHZqeDN2cXNqazRpZTlxaCJ9.FXzKgEA4xQSQUkbiV89Bug';

export default function Home() {
  
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div>
      <Head>
        <meta charset='utf-8' />
        <title>UCLA Food Places</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Map
        initialViewState={{
          latitude: 34.0689,
          longitude: -118.4452,
          zoom: 15
        }}
        style={{width: "100vw", height: "100vh"}}
        mapStyle="mapbox://styles/joycelynnng/cl7z6pbt8000414qtkmzt7et0"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {foodPlaces.features.map(food => (
          <Marker key={food.id} 
            latitude={food.geometry.coordinates[1]}
            longitude={food.geometry.coordinates[0]}>
              <button className={styles.markerBtn} onClick={(e) => {
                e.preventDefault();
                setSelectedFood(food)
              } }>
                <img src="bicycle-24.svg" alt="marker" />
              </button>
              <div>
                Food
              </div>
          </Marker>
        ))}

        {selectedFood ? (
          <Popup 
            latitude={selectedFood.geometry.coordinates[1]} 
            longitude={selectedFood.geometry.coordinates[0]}>
            <h2>{selectedFood.properties.Name}</h2>
            <p>{selectedFood.properties.Category}</p>
          </Popup>
        ) : null }
      </Map>
    </div>
  );
}