import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";

function OpharnagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Juiz de Fora</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map
                center={[-21.7375028, -43.339121]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}
export default OpharnagesMap;