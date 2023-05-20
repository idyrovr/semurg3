import './MapContact.scss'
// import { GoogleMap } from 'google-maps-react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

export const MapContact = () => {
   const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: "AIzaSyDi0PO74imPW7cc2PgTgZTihk8f8krkiEY" })
   if (isLoaded)
      return (<div className='mapMain'>
             <GoogleMap 
         zoom={10} 
         center={{ lat: 34.183080, lng: -84.129340 }} 
         mapContainerClassName='mapcontact'>
            <Marker position={{lat: 34.183080, lng: -84.129340}}/>
         </GoogleMap>;
      </div>)
     
   else
      return (<div>{loadError}</div>)
};

