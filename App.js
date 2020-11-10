import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Mapview, { Marker } from "react-native-maps";

function App() {
  const [latitude, setLatitude] = useState(23.82235);
  const [longitude, setLongitude] = useState(90.365417);
  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);

  return (
    <Mapview
      style={styles.map}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      }}
    >
      <Marker
        coordinate={{
          latitude: 23.82235,
          longitude: 90.365417,
        }}
      />
    </Mapview>
  );
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default App;
