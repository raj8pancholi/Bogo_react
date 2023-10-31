import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


const Component = () => {
    const [location, setLocation] = useState(null);
    console.log(location + "location");
    const handleLocationSelect = (place) => {
        setLocation(place);
        console.log("Place Name: " + place.label);
        console.log("Address: " + place.description);
        console.log("Latitude: " + place.location.lat);
        console.log("Longitude: " + place.location.lng);
      };


  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          location,
          onChange: setLocation,
          onSelect: handleLocationSelect,
        }}
        apiKey="AIzaSyDttOtnnoXMiMRXstU7hfBh2eymTg2tCUA"
        style={{ position: 'absolute', top: '10px', left: '30%', width: '100%' }}
      />
    </div>
  );
}

export default Component;


// import React, { useState } from 'react';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
//   } from 'react-places-autocomplete';


// const Component = () => {
//   const [address, setAddress] = useState("");
//   const [coordinates, setCoordinates] = useState({
//     lat: null,
//     lng: null
// });

// const handleSelect = async value => {
//     const results = await geocodeByAddress(value);
//     const latLng = await getLatLng(results[0]);
//     setAddress(value);
//     setCoordinates(latLng);
//     console.log(latLng);
// };



//   return (
//     <div>
//       <PlacesAutocomplete
//         value={address}
//         onChange={setAddress}
//         onSelect={handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// }

// export default Component;







