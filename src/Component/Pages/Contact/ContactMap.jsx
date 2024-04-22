import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 55.05146,
  lng: 24.95066,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="your_api_key">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
