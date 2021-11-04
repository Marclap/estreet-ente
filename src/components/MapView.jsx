import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Map = ({ latitud, longitud }) => {
    const position = [latitud, longitud]

    return (
        <>
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                style={{ height: '100vh', width: '100%' }}
            >
                <TileLayer
                    url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} draggable={false}>
                    <Popup>Tu ubicación actual</Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map
