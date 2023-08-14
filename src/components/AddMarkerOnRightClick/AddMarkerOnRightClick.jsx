import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { getMarkers, postMarker } from '../../redux/actions';

export default function AddMarkerOnRightClick() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const dispatch = useDispatch();


  let [input, setInput] = useState({
    name: "",
    latitude: "",
    longitude:"",
    img: "",
    link: "",
    tipo: "ptoDeInteres",
  });  
  const handleSubmit = (e) => {
     dispatch(postMarker(input));     
     setTimeout(() => {
      console.log("alo");
      dispatch(getMarkers());
    }, 1000); 

  };
   
  useMapEvents({
    contextmenu(e) {
      setMarkerPosition(e.latlng);
      setInput({
        name: "newmarker",
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
        img: "",
        link: "",
        tipo: "",
      });
    },


  });

  return markerPosition === null ? null : (
    <Marker position={markerPosition}>
      <Popup><button onClick={(e) => handleSubmit(e)}>Guardar</button></Popup>
    </Marker>
  );
}


