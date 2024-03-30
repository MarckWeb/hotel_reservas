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
      <a
        href="https://www.google.es/maps/place/Hotel+Gran+Bilbao/@43.2633235,-2.9335644,13z/data=!4m19!1m8!3m7!1s0xd4e4e27664b89b9:0x6534acc41e95a645!2sBilbao,+Vizcaya!3b1!8m2!3d43.2630126!4d-2.9349852!16zL20vMGh0cXQ!3m9!1s0xd4e4e35d93f2259:0x43ebff410cb03786!5m3!1s2024-06-30!4m1!1i2!8m2!3d43.2491191!4d-2.9198241!16s%2Fg%2F11c2941btw?entry=ttu"
        target="_blanck"
      >
        <img className="w-full h-full object-cover " src="/maps.jpg" alt="" />
      </a>
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
