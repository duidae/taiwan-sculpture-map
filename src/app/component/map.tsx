"use client"
import {useState} from "react"
import L, {LatLngExpression} from "leaflet"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import {TAIWAN_CENTER, DEFAULT_ZOOM} from "@/app/constant"

import {cases} from "@/app/mockup"

import MarkerIcon from "leaflet/dist/images/marker-icon.png"
import MarkerShadow from "leaflet/dist/images/marker-shadow.png"
import "leaflet/dist/leaflet.css"

const Map = () => {
  const [coord, setCoord] = useState<LatLngExpression>(TAIWAN_CENTER as LatLngExpression)

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

  // TODO: fetch link og
  const caseMarkers = cases.map(c => {
    return (
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
        position={c.lnglat as LatLngExpression}
      >
        <Popup>
          {c.info.map(i => {
            return (
              <>
                {`${i.date} ${i.title}`}
                <br />
                {i.address}
                <br />
                <a href={i.link} target="_blank" rel="noopener noreferrer">
                  連結
                </a>
                <br />
              </>
            )
          })}
        </Popup>
      </Marker>
    )
  })

  return (
    <div className="absolute top-0 w-screen h-screen z-0">
      <MapContainer className="w-full h-full" center={TAIWAN_CENTER as LatLngExpression} zoom={DEFAULT_ZOOM} scrollWheelZoom={true}>
        {caseMarkers}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map
