// src/components/GoogleMap.js
import React, { Component, useState  } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; 
import SelectLocation from './SelectLocation';

class GoogleMap extends Component {
    
    render() {
        const {setMapdata , setlatitude, setlongitude, latitude, longitude} = this.props
     
    return (
      <div className="Business_Information_map_section" style={{height:'450px', width:'100%', border:'1px solid black'}}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: latitude? latitude :37.7749, lng: longitude? longitude :-122.4194 }} // Default map center
        >
          <Marker position={{ lat: latitude? latitude :37.7749, lng: longitude? longitude :-122.4194 }} />
        </Map>
        <SelectLocation setlatitude={setlatitude} setlongitude={setlongitude}  setMapdata={setMapdata} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA',
})(GoogleMap);