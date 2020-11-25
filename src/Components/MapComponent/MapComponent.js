import React from 'react'
import { Map, GoogleApiWrapper, Marker } from  'google-maps-react';

const MapComponent = (props) => {
  const styles = {
    width: '80%',
    height: '80%'
  }

    return (

        <div>
          <Map
            google={props.google}
            zoom={14}
            style={styles}
            initialCenter={{
              lat: props.location.latitude,
              lng: props.location.ongitude
            }}
          >
          <Marker
            // onClick={this.onMarkerClick}
            name={'This is test name'}
          />
          </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDT_T8NWXpaih_8s2CNMwr8XSmKx14uBWY'
  })(MapComponent);