import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Location: React.FC = () => {
  const mapStyles: React.CSSProperties = {
    height: '400px',
    width: '100%',
  }

  const defaultCenter = {
    lat: 43.26271,
    lng: -2.92528,
  }
  return (
    <div className="w-full max-h-[250px] h-full bg-white border-t-4 border-background-second md:col-span-1 md:rounded-none md:border-none relative overflow-hidden">
      <img className="w-full h-full object-cover " src="/maps.jpg" alt="" />
      <div className="hidden">
        <LoadScript googleMapsApiKey="TU_CLAVE_API">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default Location
