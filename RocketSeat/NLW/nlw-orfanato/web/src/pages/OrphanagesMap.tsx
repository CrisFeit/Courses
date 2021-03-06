import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer ,Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'
import '../styles/pages/orphanages-map.css'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [100,-10 ]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.5816316,-46.5248828,]}
                zoom={15}
                style={ { width:'100%',height: '100%' } }
            >

                {/* <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}/> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                <Marker 
                    icon= { mapIcon }
                    position={[-23.5816316,-46.5248828,]}
                >
                    <Popup className="map-popup"
                        closeButton={false}
                    >
                        Lar das Meninas
                    </Popup>
                </Marker>

            </Map>

            <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap
