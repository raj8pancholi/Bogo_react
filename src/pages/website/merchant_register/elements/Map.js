
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; 
import SelectLocation from './SelectLocation';

class GoogleMap extends Component {
  state = { mapLat:'25.2048493' , mapLong: '55.2707828' }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.latitude !== prevProps.latitude || this.props.longitude !== prevProps.longitude) {
        this.setState({ mapLat: this.props.latitude, mapLong: this.props.longitude });
    }
  }
    
  render() {
    const { setMapdata, setlatitude, setlongitude } = this.props;
    const { mapLat, mapLong } = this.state;
       
    return (
      <div className="Business_Information_map_section" style={{ height: '450px', width: '100%', border: '1px solid black' }}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: mapLat, lng: mapLong }} 
        >
          <Marker position={{ lat: mapLat, lng: mapLong }} />
        </Map>
        <SelectLocation setlatitude={setlatitude} setlongitude={setlongitude} setMapdata={setMapdata} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA',
})(GoogleMap);
