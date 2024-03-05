"use client"
import {useState} from "react"
import L, {LatLngExpression} from "leaflet"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import {TAIPEI_CENTER} from "@/app/constant"

/*
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png"
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png"
*/
import "leaflet/dist/leaflet.css"

const Map = () => {
  const [coord, setCoord] = useState<LatLngExpression>(TAIPEI_CENTER as LatLngExpression)

  const GetMyLocation = () => {
    const getMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setCoord([position.coords.latitude, position.coords.longitude])
        })
      } else {
        console.log("Geolocation is not supported by this browser.")
      }
    }

    return (
      <div className="get-my-location">
        <button onClick={getMyLocation}>Get My Location</button>
      </div>
    )
  }

  return (
    <div>
      <MapContainer
        style={{
          height: "100vh",
          width: "100vw"
        }}
        center={coord}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/*
        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41]
            })
          }
          position={TAIPEI_CENTER  as LatLngExpression}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        */}
      </MapContainer>
    </div>
  )
}

export default Map
