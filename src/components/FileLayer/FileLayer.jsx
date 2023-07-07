import { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import togeojson from "togeojson";
import fileLayer from "leaflet-filelayer";
import axios from "axios";

fileLayer(null, L, togeojson);

const style = {
  color: "yellow",
  opacity: 1,
  fillOpacity: 0.2,
  weight: 1,
  clickable: false
};

export default function LeafletFileLayer() {
  const [count, setCount] = useState(0); 
 let input = []
  const map = useMap();
  const Url = `http://localhost:3001/markers`

  useEffect(() => {
    if(count===0){
    setCount(2)
    const control = L.Control.fileLayerLoad({
      fitBounds: true,
      layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) { 
         
            axios.post(`${Url}`, ({"name": data.properties.name,
           "latitude": latlng.lat,
           "longitude":  latlng.lng}))  
           console.log("cargado");

          return L.circleMarker(latlng, { style: style }).bindPopup(data.properties.name);
        }
      }
    });    
    control.addTo(map);

    control.loader.on("data:loaded", function (e) {
      var layer = e.layer;

    });}
  }, []);


  return null;
}