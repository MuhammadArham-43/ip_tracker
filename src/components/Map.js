import React from "react";
import styles from "../styles/global.module.scss";

import { Map as PigeonMap, Marker } from "pigeon-maps"

// import { Map as LeafletMap, MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";


// import {Map as LeafletMap} from "react-leaflet";
// import 'leaflet/dist/leaflet.css';

// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });


const Map = (location) => {
    const lat = location["location"]["lat"];
    const lng = location["location"]["lng"];
    const region = location["location"]["region"];
    const coords = [lat,lng]
    console.log(coords);


	return (
        <PigeonMap center={coords} defaultZoom={11} className={styles.map}>
            <Marker width={50} anchor={coords} />
        </PigeonMap>
	);
};

export default Map;
