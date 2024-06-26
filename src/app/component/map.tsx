"use client"
import {useState, useRef, useMemo} from "react"
import L, {LatLngExpression} from "leaflet"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import {TAIWAN_CENTER, DEFAULT_ZOOM, Sculpture} from "@/app/constant"
// import {OG} from "@/app/component/og"

import {Sculptures} from "@/app/mockup"

import MarkerIcon from "leaflet/dist/images/marker-icon.png"
import MarkerShadow from "leaflet/dist/images/marker-shadow.png"
import "leaflet/dist/leaflet.css"

const MarkerComponent = (props: {sculpture: Sculpture}) => {
  const {sculpture} = props
  const markerRef = useRef<L.Marker>(null)

  const eventHandlers = useMemo(
    () => ({
      mouseover() {
        markerRef?.current?.openPopup()
      }
    }),
    []
  )

  const markerIcon = new L.Icon({
    iconUrl: MarkerIcon.src,
    iconRetinaUrl: MarkerIcon.src,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    shadowUrl: MarkerShadow.src,
    shadowSize: [41, 41]
  })

  const sculptureInfo = (
    <>
      <span className="text-lg font-bold">
        {sculpture.title} - {sculpture.artist}
      </span>
      <br />
      <span className="text-lg">{sculpture.location}</span>
      <br />
      <span className="text-base">{sculpture.desc}</span>
      <br />
      {sculpture.link && (
        <a className="text-lg" href={sculpture.link} target="_blank" rel="noopener noreferrer">
          連結
        </a>
      )}
      {/*sculpture.link && <OG link={sculpture.link} />*/}
    </>
  )

  return (
    <Marker ref={markerRef} icon={markerIcon} eventHandlers={eventHandlers} position={sculpture.lnglat as LatLngExpression}>
      <Popup>{sculptureInfo}</Popup>
    </Marker>
  )
}

const Map = () => {
  const [coord, setCoord] = useState<LatLngExpression>(TAIWAN_CENTER as LatLngExpression)

  // TODO: reset map btn
  // TODO: where am i btn
  // TODO: search location input
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
  const sculptureMarkers = Sculptures.map((sculpture, cIndex) => {
    return <MarkerComponent key={`marker-${cIndex}`} sculpture={sculpture} />
  })

  return (
    <div className="absolute top-0 w-screen h-screen z-0">
      <MapContainer className="w-full h-full" center={TAIWAN_CENTER as LatLngExpression} zoom={DEFAULT_ZOOM} scrollWheelZoom={true}>
        {sculptureMarkers}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map
