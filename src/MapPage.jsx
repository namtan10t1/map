import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import React from "react";
import "./style.css"
const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCocMojEhEjVN6QXoTeT-qIFyh3kQvXV4c'
    })
    const position = {
        lat: 16.072117,
        lng: 108.171475
    }
    return (
        <div className="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={position}
                    zoom={20}
                >
                    <Marker position={position} options={{
                        label: {
                            text: "11 Dang Minh Khiem",
                            className: "title"
                        }
                    }} />
                </GoogleMap>
            ) : <></>}
        </div>
    )
}

export default MapPage;