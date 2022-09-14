import GoogleMapReact from 'google-map-react'

import '../../shared/style/main.css'

const AnyReactComponent = ({ text }) => <span id='marker-text'>{text}</span>

export default function MapComponent({
  location = { lat: 0, lng: 0 },
  name = '',
}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }

  return (
    <div className='map-wrapper'>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBB2eZstsz9sFZGJg9EUKSgOmga73rIYDA' }}
          defaultCenter={location}
          center={location}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={location.lat}
            lng={location.lng}
            text={name}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}
