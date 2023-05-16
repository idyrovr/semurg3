import './MapContact.scss'
import { GoogleMap, useLoadScript } from 'google-maps-react'


export const MapContact = () => {
   const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: "AIzaSyDi0PO74imPW7cc2PgTgZTihk8f8krkiEY" })
   if (isLoaded)
      return (<GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} className='mapcontact'>Map</GoogleMap>);
   else
      return (<div>{loadError}</div>)
};

