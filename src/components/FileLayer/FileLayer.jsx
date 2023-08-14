import { useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import togeojson from "togeojson";
import fileLayer from "leaflet-filelayer";
import axios from "axios";
import { getMarkers } from "../../redux/actions";
import { useDispatch } from "react-redux";

fileLayer(null, L, togeojson);

const style = {
  color: "yellow",
  opacity: 1,
  fillOpacity: 0.2,
  weight: 1,
  clickable: false
};

export default function LeafletFileLayer({ loadMarkers }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0); 
  let input = []
  const map = useMap();
  const Url = `https://leaflet-api-santiaguero91.vercel.app/markers`

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
          "longitude":  latlng.lng,
          "tipo": "hoja",
          }))   
           return null;
        }
      }
    });    
    control.addTo(map);
    control.loader.on("data:loaded", function (e) {
      var layer = e.layer;
    }
    
    );}
    setTimeout(() => {
      loadMarkers()
    }, 20000); 
  }, []);

  return null;
}