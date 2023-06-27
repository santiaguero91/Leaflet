import { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import togeojson from "togeojson";
import fileLayer from "leaflet-filelayer";

fileLayer(null, L, togeojson);

const style = {
  color: "red",
  opacity: 1.0,
  fillOpacity: 1.0,
  weight: 2,
  clickable: false
};

export default function LeafletFileLayer() {
  const [count, setCount] = useState(0);

  
  const map = useMap();

  useEffect(() => {
    if(count===0){
    setCount(2)
    console.log("1");
    const control = L.Control.fileLayerLoad({
      fitBounds: true,
      layerOptions: {
        style: style,
        pointToLayer: function (data, latlng) {
          return L.circleMarker(latlng, { style: style });
        }
      }
    });
    control.addTo(map);
    control.loader.on("data:loaded", function (e) {
      var layer = e.layer;
      console.log(layer);
    });}
  }, []);


  return null;
}